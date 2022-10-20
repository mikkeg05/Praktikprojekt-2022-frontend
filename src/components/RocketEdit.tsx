/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, Button, Flex, FlexProps, ButtonProps } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { Rocket } from "types/rocket.model"

type RocketProps = {
    rocket: Rocket,
}

export default function RocketEdit ({ rocket }: RocketProps) {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  return (
    <>
      <Flex width={"100%"}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Flex flexDir={"column"} maxW={"600px"} marginLeft={"auto"} marginRight={"auto"}>
            <FlexFormField>

              <Text fontWeight={"semibold"}>
                Rocket name
              </Text>
              <input
              {...register("name")}
              value={rocket.name}
              type="text"
              id="nameInput"
              placeholder="Rocket name"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "4px 6px",
              }}
              />
            </FlexFormField>

            <FlexFormField>
              <Text fontWeight={"semibold"}>
                Next launch
              </Text>
              <input
              {...register("nextLaunch")}
              type={"datetime-local"}
              id="nextLaunchInput"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "4px 6px",
              }}
              />
            </FlexFormField>

            <FlexFormField>
              <Text fontWeight={"semibold"}>
                Image
              </Text>
              <input
              {...register("image")}
              type={"file"}
              accept="image/*"
              id="nextLaunchInput"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "4px 6px",
              }}
              />
            </FlexFormField>

            <FlexFormField>
              <Text fontWeight={"semibold"}>
                Est. orbit time
              </Text>
              <input
              {...register("estOrbitTime")}
              type={"time"}
              id="estOrbitTimeInput"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "4px 6px",
              }}
              />
            </FlexFormField>

            <FlexFormField>
              <Text fontWeight={"semibold"}>
                Max capacity
              </Text>
              <input
              {...register("maxCap")}
              type={"number"}
              id="maxCapInput"
              placeholder="(kg/m3)"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "4px 6px",
              }}
              />
            </FlexFormField>

            <FlexFormField>
              <Text fontWeight={"semibold"}>
                Rocket size
              </Text>
              <input
              {...register("height")}
              type={"number"}
              id="heightInput"
              placeholder="Height (m)"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "4px 6px",
              }}
              />
              <input
              {...register("lenght")}
              type={"number"}
              id="lenghtInput"
              placeholder="Lenght (m)"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "4px 6px",
              }}
              />
              <input
              {...register("width")}
              type={"number"}
              id="widthInput"
              placeholder="Width (m)"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "4px 6px",
              }}
              />
              <input
              {...register("weight")}
              type={"number"}
              id="weightInput"
              placeholder="Weight (kg)"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "4px 6px",
              }}
              />
            </FlexFormField>

            <input {...register("currCap")} type={"number"} hidden id="currCapInput"/>
            <input {...register("location")} type={"number"} hidden id="locationInput" />
            <input {...register("prevLaunch")} type={"datetime-local"} hidden id="prevLaunchInput" />

            <SubmitButton type="submit">
              Submit
            </SubmitButton>
          </Flex>
        </form>
      </Flex>
    </>
  )
}

const FlexFormField = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  marginY={"10px"}
  flexDir={"column"}
  justifyContent={"space-between"}
  alignItems={"left"}
  gap={"2px"}
  color={"black"}
  />
)

const SubmitButton = (props: ButtonProps) => (
  <Button {...props}
  w={"200px"}
  marginLeft={"auto"}
  marginRight={"auto"}
  marginTop={"2em"}
  fontWeight={"semibold"}
  _hover={{
    bg: "#c35809",
    color: "white",
  }}
  />
)
