import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useState } from "react"

type Step2Props = {
  setPickupDate: (date: string) => void;
  currenStepIndex: number;
  setCurrentStepIndex: (arg0: number) => void;
}

export function Step2 ({ setPickupDate, currenStepIndex, setCurrentStepIndex }: Step2Props) {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const minDate = tomorrow.toISOString().split("T")[0]

  const [date, setDate] = useState("")

  const dateChanged = (e: React.FormEvent<HTMLInputElement>) => {
    setDate(e.currentTarget.value)
  }

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    setPickupDate(date)
    setCurrentStepIndex(currenStepIndex + 1)
  }

  return (<>
    <h1>Please choose a pickup date</h1>
    <div className="info-form-cont">
      <form className="date-form" onSubmit={submit}>
        <FormControl isRequired>
          <FormLabel>Pick up date</FormLabel>
          <Input
            className="calender-input"
            placeholder="Please choose a pickup date"
            type="date"
            name="date"
            min={minDate}
            onChange={dateChanged}
          >

          </Input>
        </FormControl>
        <button disabled={!date} id="date-btn" className="next-submit" type='submit'>Next</button>
      </form></div></>
  )
}
