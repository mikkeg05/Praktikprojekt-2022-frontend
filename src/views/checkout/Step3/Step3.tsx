import { Button, Box, FormControl, FormLabel, Input, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, CircularProgress } from "@chakra-ui/react"
import { PatternFormat } from "react-number-format"
import { useState } from "react"

type Step3Props = {
  setPayment: (payment: string) => void
  currenStepIndex: number;
  setCurrentStepIndex: (arg0: number) => void;
}

export function Step3 ({ setPayment, setCurrentStepIndex, currenStepIndex }: Step3Props) {
  const [spinner, setSpinner] = useState<boolean>(false)

  function fakeSubmit () {
    setPayment("PayGal")
    setSpinner(true)
    setTimeout(() => {
      setCurrentStepIndex(currenStepIndex + 1)
    }, 2000)
  }

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setPayment("Card")
    setCurrentStepIndex(currenStepIndex + 1)
  }
  return (
    <>
      <h1>Payment</h1>
      <div className="info-form-cont">
        <Accordion className="pay-form">
          <AccordionItem className="accord-item">
            <AccordionButton className="pay-btns">
              <h2>PayGal</h2>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className="acoord-cont-paygal">
              <Button _hover={{
                bg: "#2ccc3c", color: "black", boxShadow: "0 0.6em 0.5em -0.4em #2ccc3c", transform: "translateY(-0.25em)",
              }} gridColumn="2/3" w="8rem" bg="#00970F" color="white" fontFamily="'Montserrat', sans-serif" fontSize="1rem" fontWeight="500" onClick={() => fakeSubmit()} >Login</Button>
              {spinner ? <CircularProgress position="relative" top="0%" left="10%" isIndeterminate color='orange.400' thickness="0.6rem" size="2.5rem" /> : null}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="accord-item">
            <AccordionButton className="pay-btns">
              <h2>Credit card</h2>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className="acoord-cont">
                <form className="pay-form-card" onSubmit={submit}>
                  <FormControl className="card-form" isRequired>
                  <Box>
                    <FormLabel>Name on card</FormLabel>
                    <Input name="fullName" className="pay-input" type='text' placeholder="Mlon Eusk" />
                  </Box>
                    <Box display="flex" flexDir="column">
                    <FormLabel>Card Number</FormLabel>
                    <PatternFormat id="card-number" className="pay-input" valueIsNumericString format="#### #### #### ####" mask="_" placeholder="0000 0000 0000 0000" />
                  </Box>
                  <Box display="flex" gap="1rem" flexWrap="wrap" flexGrow="1">
                    <Box flexGrow="1">
                    <FormLabel>Expiry date</FormLabel>
                    <PatternFormat
                      className="pay-input"
                      required
                      id="expiry-date"
                      name="expirydate"
                      valueIsNumericString
                      format="##/##"
                      placeholder="00/00"
                      style={{ minWidth: "100%" }}
                    />
                  </Box>
                    <Box flexGrow="1">
                      <FormLabel>Security Code</FormLabel>
                      <Input required
                        className="pay-input"
                        type="text"
                        id="security-code"
                        name="security-code"
                        inputMode="numeric"
                        minLength={3}
                        maxLength={4}
                        placeholder="000"
                        pattern="[0-9]+"/>
                    </Box>
                    </Box>
                </FormControl>
                <Button _hover={{
                  bg: "#2ccc3c", color: "black", boxShadow: "0 0.6em 0.5em -0.4em #2ccc3c", transform: "translateY(-0.25em)",
                }} alignSelf="center" w="8rem" mt="2rem" bg="#00970F" color="white" fontFamily="'Montserrat', sans-serif" fontSize="1rem" fontWeight="500" type='submit'>Next</Button>
                </form>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div></>
  )
}
