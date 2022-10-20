/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Text, Button, Flex, FlexProps, ButtonProps, Box, Link, LinkProps, ImageProps, Image, TextProps, Heading, HeadingProps } from "@chakra-ui/react"
import { Layout } from "partials/Layout"
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useForm, Resolver } from "react-hook-form"
import { useRouter } from "next/router"
import { Nav } from "@components/Nav"

type FormValues = {
  id: string;
  rid: string;
  name: string;
  status: string;
  available: string;
  location: string;
  longlat: string;
  nextLaunch: string;
  prevLaunch: string;
  estOrbitTime: string;
  image: string;
  currCap: number;
  maxCap: number;
  lenght: number;
  width: number;
  height: number;
  weight: number;
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.name ? values : {},
    errors: !values.name
      ? { name: { type: "required", message: "Required" } }
      : {},
  }
}

function AddRocket () {
  const router = useRouter()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver })
  const onSubmit = handleSubmit((data) => console.log(data))

  function HandleSubmit () {
    router.push("/adminPage/rockets")
  }

  function HandleCancel () {
    // if (window.confirm("Are you sure you want to cancel?")) {
    router.push("/adminPage/rockets")
    // }
  }

  return (
  <>
  <Layout>
    <Box>
      <HeaderCntr>
        <LinkBtn href="/adminPage/rockets"><ArrowBackIcon/> Back</LinkBtn>
      </HeaderCntr>
      <ImgText>
        <HeadingH1>Add Rocket</HeadingH1>
        {/* <HeadingSemiB>X-000</HeadingSemiB>
        <HeadingSemiB w={"100%"}>Available </HeadingSemiB> */}
      </ImgText>
      <FlexCntr>
        <ImgCntr>
          <Img src={"/media/1200px-Maki-rocket-15.png"} />
        </ImgCntr>
        <FlexFormOuterCntr>
        <form onSubmit={onSubmit} style={{ width: "100%" }}>
          <FlexFormInnerCntr>
            <FlexFormField>
              <FormText>
                Rocket name {errors?.name && <span style={{ color: "#db2316" }}>- {errors.name.message}</span>}
              </FormText>
              <input
              {...register("name")}
              // value={data.name}
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
                Model
              </FormText>
              <input
              {...register("rid")}
              // value="Name"
              type="text"
              id="ridInput"
              placeholder="Rocket model"
              style={{
                color: "black", borderColor: "grey", borderWidth: "1px", borderRadius: "5px", padding: "6px",
              }}
              />
            </FlexFormField>

            <FlexFormField>
              <FormText>
                Location
              </FormText>
              <input
              {...register("location")}
              // value="Name"
              type="text"
              id="locationInput"
              placeholder="Longtitude, latitude"
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
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
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
                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
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
              <CancelButton type="button" onClick={HandleCancel}>Cancel</CancelButton>
              <SubmitButton type="submit" onClick={HandleSubmit}>Submit</SubmitButton>
            </BtnCntr>

          </FlexFormInnerCntr>
        </form>
        </FlexFormOuterCntr>

      </FlexCntr>

    </Box>
  </Layout>
  </>
  )
}

AddRocket.getNav = function getNav (page: typeof AddRocket) {
  return <Nav>{page}</Nav>
}

export default AddRocket

const HeaderCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  h={"100%"}
  marginTop={20}
  marginBottom={10}
  paddingTop={"50px"}
  justifyContent={"space-between"}
  columnGap={2}
  />
)
const LinkBtn = (props: LinkProps) => (
  <Link {...props}
  h={"auto"}
  paddingY={"2px"}
  display={"flex"}
  justifyContent={"center"}
  alignItems={"center"}
  verticalAlign={"center"}
  gap={"2px"}
  bg={"transparent"}
  color={"sdblack"}
  _hover={{ color: "brand.500" }}
  />
)

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
  bg={"transparent"}
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
  objectFit={"contain"}
  flexDir={"column"}
  objectPosition={"center"}
  overflow={"hidden"}
  borderRadius={"5"}
  bg={"gray.50"}
  // boxShadow={"0px 2px 4px 2px rgba(0, 0, 0, 0.05), 1px 1px 2px 0px inset rgba(0, 0, 0, 0.02)"}
  />
)
const Img = (props: ImageProps) => (
  <Image {...props}
  w={"100%"}
  h={"100%"}
  paddingX={"100px"}
  objectFit={"contain"}
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
