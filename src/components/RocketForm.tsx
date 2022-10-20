/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, Button, Flex, FlexProps, ButtonProps, ImageProps, Image, TextProps, Heading, HeadingProps } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

export default function RocketForm () {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data))
  }

  return (
    <>
      <ImgText>
        <HeadingH1>Add Rocket</HeadingH1>
      </ImgText>
      <FlexCntr>
        <ImgCntr>
          <Img src={"/media/placeholder.png"} />
        </ImgCntr>

        <FlexFormOuterCntr>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <FlexFormInnerCntr>
            <FlexFormField>
              <FormText>
                Rocket name
              </FormText>
              <input
              {...register("name")}
              // value="Name"
              type="text"
              id="nameInput"
              placeholder="Rocket name"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px",
              }}
              />
            </FlexFormField>

            <FlexFormField>
              <FormText>
                Image
              </FormText>
              <input
              {...register("image")}
              // value={data.image}
              type={"file"}
              accept="image/*"
              id="imageInput"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px",
              }}
              />
            </FlexFormField>

            {/* <FlexFormFieldCntr> */}
              <FlexFormField>
                <FormText>
                  Next launch
                </FormText>
                <input
                {...register("nextLaunch")}
                // value={data.nextLaunch}
                type={"datetime-local"}
                id="nextLaunchInput"
                style={{
                  color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px",
                }}
                />
              </FlexFormField>
              <FlexFormField display={"none"}>
                <FormText display={"none"}>
                  Previous launch
                </FormText>
                <input
                {...register("prevLaunch")}
                // value={data.prevLaunch}
                type={"datetime-local"}
                id="prevLaunchInput"
                style={{
                  color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px", display: "none",
                }}
                />
              </FlexFormField>
            {/* </FlexFormFieldCntr> */}

            <FlexFormField>
              <FormText>
                Est. orbit time
              </FormText>
              <input
              {...register("estOrbitTime")}
              // value={data.estOrbitTime}
              type={"time"}
              id="estOrbitTimeInput"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px",
              }}
              />
            </FlexFormField>

            {/* <FlexFormFieldCntr> */}
              <FlexFormField>
                <FormText>
                  Max capacity
                  <span> (kg/m<span style={ {
                    fontSize: "10px",
                    textAlign: "start",
                    verticalAlign: "top",
                  }}>3</span>)
                  </span>
                </FormText>
                <input
                {...register("maxCap")}
                // value={data.maxCap}
                type={"number"}
                id="maxCapInput"
                placeholder="(kg/m3)"
                style={{
                  color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px",
                }}
                />
              </FlexFormField>
              <FlexFormField display={"none"}>
                <FormText display={"none"}>
                  Current capacity
                  <span> (kg/m<span style={ {
                    fontSize: "10px",
                    textAlign: "start",
                    verticalAlign: "top",
                  }}>3</span>)
                  </span>
                </FormText>
                <input
                {...register("maxCap")}
                // value={data.currCap}
                type={"number"}
                id="maxCapInput"
                placeholder="(kg/m3)"
                style={{
                  color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px", display: "none",
                }}
                />
              </FlexFormField>
            {/* </FlexFormFieldCntr> */}

            <FlexFormFieldCntr>
              <FormText w={"100%"}>Rocket size</FormText>
              <FlexFormField50>
                <Text color={"gray.800"} fontWeight={"medium"} marginBottom={"0"}>Height</Text>
                <input
                {...register("height")}
                // value={data.height}
                type={"number"}
                id="heightInput"
                placeholder="Height (m)"
                style={{
                  color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px",
                }}
                />
              </FlexFormField50>
              <FlexFormField50>
                <Text color={"gray.800"} fontWeight={"medium"} marginBottom={"0"}>Width</Text>
                <input
                {...register("width")}
                // value={data.width}
                type={"number"}
                id="widthInput"
                placeholder="Width (m)"
                style={{
                  color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px",
                }}
                />
              </FlexFormField50>
            </FlexFormFieldCntr>

            <BtnCntr>
              <CancelButton type="submit">Cancel</CancelButton>
              <SubmitButton type="submit">Submit</SubmitButton>
            </BtnCntr>

          </FlexFormInnerCntr>
        </form>
        </FlexFormOuterCntr>

      </FlexCntr>
    </>
  )
}

const FlexCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  marginY={"10px"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  alignContent={"center"}
  gap={"10px"}
  color={"black"}
  />
)
const ImgText = (props: FlexProps) => (
  <Flex {...props}
  minW={"280px"}
  maxW={"1200px"}
  marginLeft={"auto"}
  marginRight={"auto"}
  paddingBottom={"10px"}
  paddingY={"10px"}
  flexWrap={"wrap"}
  alignItems={"baseline"}
  gap={"10px"}
  bg={"truewhite"}
  />
)
const HeadingH1 = (props: HeadingProps) => (
  <Heading {...props}
  as={"h1"}
  margin={0}
  color={"trueblack"}
  bottom={0}
  />
)

const ImgCntr = (props: FlexProps) => (
  <Flex {...props}
  minW={"280px"}
  maxW={"600px"}
  maxH={"800px"}
  marginLeft={"auto"}
  marginRight={"auto"}
  objectFit={"cover"}
  flexDir={"column"}
  objectPosition={"center"}
  overflow={"hidden"}
  borderRadius={"5"}
  // boxShadow={"0px 2px 4px 2px rgba(0, 0, 0, 0.05), 1px 1px 2px 0px inset rgba(0, 0, 0, 0.02)"}
  />
)
const Img = (props: ImageProps) => (
  <Image {...props}
  w={"100%"}
  h={"100%"}
  objectFit={"cover"}
  borderRadius={"5"}
  />
)

// ----- Form -----
const FlexFormOuterCntr = (props: FlexProps) => (
  <Flex {...props}
  minW={"280px"}
  maxW={"600px"}
  marginLeft={"auto"}
  marginRight={"auto"}
  // flexWrap={"wrap"}
  />
)
const FlexFormInnerCntr = (props: FlexProps) => (
  <Flex {...props}
  minW={"280px"}
  maxW={"100%"}
  marginLeft={"auto"}
  marginRight={"auto"}
  flexDir={"column"}
  />

)

const FlexFormFieldCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  marginBottom={"20px"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  // alignItems={"left"}
  rowGap={"2px"}
  columnGap={"2px"}
  color={"black"}
  />
)
const FlexFormField50 = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  // maxW={"300px"}
  // marginY={"10px"}
  marginTop={"0px"}
  flexDir={"column"}
  // flexWrap={"wrap"}
  justifyContent={"space-between"}
  alignItems={"left"}
  gap={"2px"}
  color={"black"}
  />
)
const FlexFormField = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  marginBottom={"20px"}
  flexDir={"column"}
  // flexWrap={"wrap"}
  justifyContent={"space-between"}
  alignItems={"left"}
  gap={"2px"}
  color={"black"}
  />
)
const FormText = (props: TextProps) => (
  <Text {...props}
  marginBottom={".2em"}
  fontWeight={"semibold"}
  textTransform={"uppercase"}
  />
)

const BtnCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  marginBottom={"20px"}
  flexDir={"row"}
  justifyContent={"space-between"}
  alignItems={"left"}
  gap={"20px"}
  color={"black"}
  />
)
const SubmitButton = (props: ButtonProps) => (
  <Button {...props}
  w={"50%"}
  alignSelf={"flex-end"}
  marginTop={"2em"}
  fontWeight={"semibold"}
  color={"truewhite"}
  bg={"brand.600"}
  borderColor={"brand.600"}
  borderWidth={"1px"}
  _hover={{
    bg: "brand.500",
    color: "truewhite",
  }}
  />
)

const CancelButton = (props: ButtonProps) => (
  <Button {...props}
  alignSelf={"flex-end"}
  marginTop={"2em"}
  fontWeight={"semibold"}
  color={"gray.500"}
  bg={"transparent"}
  borderColor={"gray.500"}
  borderWidth={"1px"}
  _hover={{
    bg: "brand.600",
    color: "truewhite",
  }}
  />
)
