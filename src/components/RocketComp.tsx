/* eslint-disable no-console */
/* eslint-disable react/no-children-prop */
import { Flex, Image, Text, Button, ButtonProps, TextProps, FlexProps, ImageProps } from "@chakra-ui/react"
import { GetStaticProps } from "next"
import NextLink from "next/link"
import { Rocket } from "types/rocket.model"

type RocketProps = {
    rocket: Rocket,
}

function RocketComponent ({ rocket }: RocketProps) {
  return (
    <>
    <NextLink href="/adminPage/rockets/[id]" as={`/adminPage/rockets/${rocket.id}`}>
      <FlexCard key={rocket.id} >
          <ImgCntr>
            <Img
            src={rocket.image}
            />
          </ImgCntr>

          <FlexCardTxt>
            <FlexCardHeading>
              <Flex flexDir={"column"}>
                <HeadingSemiBGray>
                  {rocket.available}
                </HeadingSemiBGray>
                <HeadingH>
                  {rocket.name}
                </HeadingH>
                <HeadingSemiBGray>
                  {rocket.rid}
                </HeadingSemiBGray>
              </Flex>
            </FlexCardHeading>

            <FlexRowOuterCntr>
              <FlexRowInnerCntr>
                <FlexRow>
                  <RowHeader>Next launch:</RowHeader>
                  <RowTxt>
                    {rocket.nextLaunch}
                  </RowTxt>
                </FlexRow>

                <FlexRow>
                  <RowHeader>Last launch:</RowHeader>
                  <RowTxt>
                    {rocket.prevLaunch}
                  </RowTxt>
                </FlexRow>

                <FlexRow>
                  <RowHeader>Est orbittime:</RowHeader>
                  <RowTxt>
                    {rocket.estOrbitTime}
                  </RowTxt>
                </FlexRow>
              </FlexRowInnerCntr>

              <FlexRowInnerCntr>
                <FlexRow>
                  <RowHeader>Location:</RowHeader>
                  <RowTxt>
                    {rocket.location}
                  </RowTxt>
                </FlexRow>

                <FlexRow>
                  <RowHeader>Max capacity:</RowHeader>
                  <RowTxt>
                    {rocket.maxCap}
                    <span> (kg/m
                      <span style={ {
                        fontSize: "10px",
                        textAlign: "start",
                        verticalAlign: "top",
                      }}>3</span>)
                    </span>
                  </RowTxt>
                </FlexRow>

                <FlexRow>
                  <RowHeader>Current load:</RowHeader>
                  <RowTxt>
                    {rocket.currCap}
                    <span> (kg/m
                      <span style={ {
                        fontSize: "10px",
                        textAlign: "start",
                        verticalAlign: "top",
                      }}>3</span>)
                    </span>
                  </RowTxt>
                </FlexRow>
              </FlexRowInnerCntr>
            </FlexRowOuterCntr>

            <BtnCntr>
              <NextLink href="/adminPage/rockets/[id]" as={`/adminPage/rockets/${rocket.id}`} passHref>
                <Btn as="a">Load</Btn>
              </NextLink>
              <NextLink href="/adminPage/rockets/[id]" as={`/adminPage/rockets/${rocket.id}`} passHref>
                <Btn as="a">Launch</Btn>
              </NextLink>
            </BtnCntr>

          </FlexCardTxt>
      </FlexCard>
    </NextLink>
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("/api/rockets")
  const { rocketsdata } = await res.json()
  return { props: { rocketsdata }, revalidate: 10 }
}

export default RocketComponent

//
// ----- General ----- //
const HeadingH = (props: TextProps) => (
  <Text {...props}
  as={"h2"}
  margin={0}
  fontSize={"2rem"}
  fontWeight={"semibold"}
  color={"trueblack"}
  />
)

const HeadingSemiBGray = (props: TextProps) => (
  <Text {...props}
  as={"h4"}
  margin={0}
  fontSize={"1rem"}
  fontWeight={"semibold"}
  color={"gray.400"}
  />
)

// ----- Card ----- //
const FlexCard = (props: FlexProps) => (
  <Flex {...props}
  maxW={"500px"}
  minW={"48%"}
  flexDir={"row"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  bg={"truewhite"}
  color={"black"}
  borderRadius={"5"}
  boxShadow={"0px 2px 4px 2px rgba(0, 0, 0, 0.05), 1px 1px 2px 0px inset rgba(0, 0, 0, 0.02)"}
  overflow={"hidden"}
  cursor={"pointer"}
  _hover={{
    boxShadow: "0px 6px 6px 2px rgba(0, 0, 0, 0.08), 1px 1px 2px 0px inset rgba(0, 0, 0, 0.02)",
    transition: "ease-in-out .2s",
  }}
  />
)
const FlexCardHeading = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  padding={"0 0 15px 0"}
  justifyContent={"space-between"}
  />
)
const FlexCardTxt = (props: FlexProps) => (
  <Flex {...props}
  minW={"70%"}
  flexDir={"column"}
  padding={"5px 10px"}
  />
)
// const CardBtn = (props: ButtonProps) => (
//   <Button {...props}
//   rightIcon={<EditIcon/>}
//   paddingLeft={".8rem"}
//   paddingRight={"1rem"}
//   color={"gray.500"}
//   fontSize={".8rem"}
//   fontWeight={"medium"}
//   // textTransform={"uppercase"}
//   bg={"transparent"}
//   _hover={{
//     color: "brand.600",
//     bg: "transparent",
//     borderColor: "transparent",
//   }}
//   />
// )

// ----- Card detail rows
const FlexRowOuterCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  flexDir={"row"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  columnGap={"0px"}
  />
)
const FlexRowInnerCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"48%"}
  flexDir={"row"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  />
)
const FlexRow = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  paddingY={"2px"}
  flexDir={"row"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  borderTopWidth={"1px"}
  borderColor={"gray.100"}
  />
)
const RowHeader = (props: TextProps) => (
  <Text {...props}
  minW={"100px"}
  fontWeight={"semibold"}
  />
)
const RowTxt = (props: TextProps) => (
  <Text {...props}
  maxW={"130px"}
  textAlign={"right"}
  />
)

//
// ----- Card Image ----- //
const ImgCntr = (props: FlexProps) => (
  <Flex {...props}
  minW={"20%"}
  maxH={"300px"}
  objectFit={"cover"}
  objectPosition={"center"}
  overflow={"hidden"}
  />
)
const Img = (props: ImageProps) => (
  <Image {...props}
  w={"100%"}
  h={"100%"}
  objectFit={"cover"}
  />
)

//
// ----- Buttons ----- //
const BtnCntr = (props: FlexProps) => (
  <Flex {...props}
  marginTop={"5"} marginBottom={"2"}
  flexDir={"row"}
  justifyContent={"flex-end"}
  gap={2}
  />
)
const Btn = (props: ButtonProps) => (
  <Button {...props}
  h={"25px"}
  paddingX={"1em"} paddingY={"0em"}
  color={"brand.600"}
  fontWeight={"medium"}
  fontSize={"sm"}
  bg={"transparent"}
  borderColor={"brand.600"}
  borderWidth={"1px"}
  borderRadius={5}
  _hover={{
    color: "white",
    bg: "brand.600",
    borderColor: "brand.600",
  }}
  />
)
