/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import countryList from "react-select-country-list"
import { useMemo, useState } from "react"
import Select from "react-select"
// import { SpecificStep1Component } from "./SpecificStep1Component"
import { CustomerInfo } from "../../../types/checkoutorder.model"

type Step1Props = {
  setCustomerInfo: (value: CustomerInfo) => void;
  currenStepIndex: number;
  setCurrentStepIndex: (arg0: number) => void;
}

export function Step1 ({ setCustomerInfo, currenStepIndex, setCurrentStepIndex }: Step1Props) {
  const countryOpt = useMemo(() => countryList().getData(), [])

  // select styling
  const selectStyles = {
    control: (base: any, state: any) => ({
      ...base,
      boxShadow: state.isFocused ? 0 : 0,
      borderColor: state.isFocused
        ? "#ff9f2a"
        : "white",
      "&:hover": {
        borderColor: state.isFocused
          ? "#ff9f2a"
          : "white",
      },
    }),
  }
  const [firstName, setFname] = useState("")
  const [lastName, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [zipPostalCode, setZipPostalCode] = useState("")
  const [valid, setValid] = useState(false)

  const fNameChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setFname(e.currentTarget.value)
    if (firstName !== "" && lastName !== "" && email !== "" && address !== "" && city !== "" && country !== "" && zipPostalCode !== "") {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const lNameChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setLname(e.currentTarget.value)
    if (firstName !== "" && lastName !== "" && email !== "" && address !== "" && city !== "" && country !== "" && zipPostalCode !== "") {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const emailChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
    if (firstName !== "" && lastName !== "" && email !== "" && address !== "" && city !== "" && country !== "" && zipPostalCode !== "") {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const addressChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setAddress(e.currentTarget.value)
    if (firstName !== "" && lastName !== "" && email !== "" && address !== "" && city !== "" && country !== "" && zipPostalCode !== "") {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const cityChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setCity(e.currentTarget.value)
    if (firstName !== "" && lastName !== "" && email !== "" && address !== "" && city !== "" && country !== "" && zipPostalCode !== "") {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const countryChanged = (value: any) => {
    setCountry(value.label)
    if (firstName !== "" && lastName !== "" && email !== "" && address !== "" && city !== "" && country !== "" && zipPostalCode !== "") {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const zipPostalCodeChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setZipPostalCode(e.currentTarget.value)
    if (firstName !== "" && lastName !== "" && email !== "" && address !== "" && city !== "" && country !== "" && zipPostalCode !== "") {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const value = {
      firstName, lastName, email, address, city, country, zipPostalCode,
    }
    setCustomerInfo(value)
    setCurrentStepIndex(currenStepIndex + 1)
  }

  return (<>
    <h1>Your Information</h1>
    <div className="info-form-cont">
      <form className="info-form" onSubmit={submit}>
        <FormControl className="info-chakra-form" isRequired>
          <div>
            <FormLabel>First name</FormLabel>
            <Input onChange={fNameChanged} value={firstName} autoComplete="on" className="info-input" type='text' name="firstName" placeholder="First name" />
          </div>
          <div>
            <FormLabel>Last name</FormLabel>
            <Input onChange={lNameChanged} value={lastName} autoComplete="on" className="info-input" type='text' name="lastName" placeholder="Last name" />
          </div>
          <div className="info-form-email">
            <FormLabel>E-mail</FormLabel>
            <Input onChange={emailChanged} value={email} autoComplete="on" className="info-input" type='email' name="email" placeholder="example@sdinc.com" />
          </div>
          <div>
            <FormLabel>Address line</FormLabel>
            <Input onChange={addressChanged} value={address} autoComplete="on" className="info-input" type='text' name="address" placeholder="Sun Street 32" />
          </div>
          <div>
            <FormLabel>City</FormLabel>
            <Input onChange={cityChanged} value={city} autoComplete="on" className="info-input" type='text' name="city" placeholder="Copenhagen" />
          </div>
          <div className="info-select">
            <FormLabel className="info-select-label">Country</FormLabel>
            <Select
              onChange={countryChanged}
              styles={selectStyles}
              placeholder="Denmark"
              id="country"
              name="country"
              options={countryOpt}
            />
          </div>
          <div>
            <FormLabel>ZIP/Postal code</FormLabel>
            <Input onChange={zipPostalCodeChanged} autoComplete="on" className="info-input" name='postal-zip-code' type="text" placeholder="1300" />
          </div>
        </FormControl>
        <button disabled={!valid} className="next-submit" type='submit'>Next</button>
      </form>

    </div></>
  )
}
