/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, FormControl, FormLabel, NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, Select } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { useBasket } from "contexts/basketContext"
import { GetStaticProps } from "next"
import { TrashFormType } from "../types/trashform.model"
import { Nav } from "../components/Nav"

function TrashServicePage ({ trashFormData }: { trashFormData: TrashFormType }) {
  const { addTrashPickUp, openBasket } = useBasket()
  const { Section, Button, FormRequest } = trashFormData
  // console.log(trashFormData)

  const [checkedBag, setCheckedBag] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)

  const [weight, setWeight] = useState(0)
  const [size, setSize] = useState("")
  const [length, setLength] = useState(0)
  const [width, setWidth] = useState(0)
  const [depth, setDepth] = useState(0)
  const [sizeInM3, setSizeInM3] = useState(0)

  // calculate m3
  useEffect(() => {
    setSizeInM3(length * width * depth / 100000)
  },
  [
    length,
    width,
    depth,
  ])

  // make on array
  const wBagWeight = FormRequest.Inputs.find((i) => {
    return i.Name === "weight"
  })
  if (wBagWeight === undefined) return undefined

  // get parentid
  const hiddenInput = FormRequest.Inputs.find((i) => {
    return i.Name === "parentid"
  })
  const parentId = hiddenInput?.Value
  if (parentId == null) return undefined

  // choose what form
  const handleChange = () => {
  // reset all numbers
    setLength(0)
    setDepth(0)
    setWidth(0)
    setWeight(0)
    setSize("")
    setErrorMsg(false)
    setCheckedBag(!checkedBag)
  }

  // set size to what is chosen
  const sizeChanged = (e: any) => {
    setSize(e.target.value)
    if (e.target.value === "Small") {
      setSizeInM3(0.1)
    } else if (e.target.value === "Medium") {
      setSizeInM3(0.25)
    } else {
      setSizeInM3(0.525)
    }
  }

  const handleWeight = (value: any) => setWeight(parseInt(value, 10))
  const handleDepth = (value: any) => setDepth(value)
  const handleWidth = (value: any) => setWidth(value)
  const handleLength = (value: any) => setLength(value)

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (checkedBag === true) {
      if (weight === 0 || size === " ") {
        setErrorMsg(true)
      } else { confirmData() }
    } else if (weight === 0 || length === 0 || depth === 0 || width === 0) {
      setErrorMsg(true)
    } else { confirmData() }

    function confirmData () {
      setErrorMsg(false)
      openBasket()
      // get price
      const finalPrice = Math.round(((weight * sizeInM3) + Number.EPSILON) * 100) / 100
      /*    setTrashOrderData([
        id: 4,
        quantity: 1,
        itemType: "Trash Pickup",
        price: finalPrice,
      ]) */
      // add to the basket
      if (parentId == null) return undefined
      addTrashPickUp(4, "trash pickup", finalPrice, sizeInM3, weight, "Trash Pickup Order", parentId)
      // open basket
    }
  }

  return <main id="trashservice-main">
    <header id="trashservice-header" style={{ backgroundImage: `url(http://local.spacedebris.dk${Section.ImageUrl})` }}><h1>{Section.Title}</h1></header>
    <section className="trashservice-first-section">
      <div className="trashservice-checkbox">
        <h2>{Section.Body}</h2><Checkbox onChange={handleChange} colorScheme='green' size="lg"></Checkbox>
      </div>
      <div className="form-container">
        {checkedBag
          ? <form className="withbag-form" onSubmit={submit}>
            <FormControl isRequired className="chakra-form" >
              <FormLabel className="chakra-label">Weight (kg)</FormLabel>
              <NumberInput
                defaultValue={0} max={100} min={1} value={weight} onChange={handleWeight}>
                <NumberInputField className="chakra-input" />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
              </NumberInput>
          </FormControl>
          <FormControl isRequired className="chakra-form" >
          <FormLabel className="chakra-label">Bag Size</FormLabel>
            <Select value={size} onChange={sizeChanged} className="chakra-input" placeholder='Select size'>
              <option value='Small'>Small</option>
              <option value='Medium'>Medium</option>
              <option value='Large'>Large</option>
          </Select>
        </FormControl>
            <p style={errorMsg ? { opacity: "1" } : { opacity: "0" } }>Please fill out all required fields</p>
            <div className="price-btn-cont"><h3>Your cost <b>{Math.round(((weight * sizeInM3) + Number.EPSILON) * 100) / 100}</b>,-</h3><button style={{ backgroundColor: `#${Button.BtnColor}` }} className="trash-submit" type='submit'>{Button.BtnText}</button></div>
        </form>
          : <form className="withoutbag-form" onSubmit={submit}>
            <div className="without-bag-grid">
            <FormControl isRequired className="chakra-form" >
                <FormLabel className="chakra-label">Weight (kg)</FormLabel>
                  <NumberInput
                  defaultValue={0} max={100} min={1} value={weight} onChange={handleWeight}>
                    <NumberInputField className="chakra-input" />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                  </NumberInput>
              </FormControl>
          <FormControl isRequired className="chakra-form" >
              <FormLabel className="chakra-label">Width (cm)</FormLabel>
            <NumberInput
                  defaultValue={20} max={200} min={20} value={width} onChange={handleWidth}>
              <NumberInputField className="chakra-input" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl isRequired className="chakra-form" >
            <FormLabel className="chakra-label">Depth/Height (cm)</FormLabel>
            <NumberInput
                  defaultValue={20} max={200} min={20} value={depth} onChange={handleDepth}>
              <NumberInputField className="chakra-input" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl isRequired className="chakra-form" >
            <FormLabel className="chakra-label">Length (cm)</FormLabel>
            <NumberInput
                  defaultValue={20} max={200} min={20} value={length} onChange={handleLength}>
              <NumberInputField className="chakra-input" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
            </div>
            <p style={errorMsg ? { opacity: "1" } : { opacity: "0" }}>Please fill out all required fields</p>
            <div className="price-btn-cont"><h3>Your cost <b>{Math.round(((weight * sizeInM3) + Number.EPSILON) * 100) / 100}</b>,-</h3>
              <button style={{ backgroundColor: `#${Button.BtnColor}` }} className="trash-submit" type='submit'>{Button.BtnText}</button></div>
        </form>}
      </div>
    </section>
  </main>
}

TrashServicePage.getNav = function getNav (page: typeof TrashServicePage) {
  return <Nav>{page}</Nav>
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://local.spacedebris.dk/umbraco/api/Endpoint/GetTrashServicePage")
  const formData = await res.json()
  return { props: { trashFormData: formData } }
}

export default TrashServicePage
