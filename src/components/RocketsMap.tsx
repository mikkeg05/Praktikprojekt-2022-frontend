/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import { GetStaticProps } from "next"
// import { RocketResults } from "types/rocket.model"
import { Flex, Heading, Image, Text, Button, ButtonProps, TextProps, FlexProps, ImageProps, HeadingProps } from "@chakra-ui/react"
import { rocketMocks } from "mockData/rocketMocks"

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("/data/rockets.json")
//   const { results }: RocketResults = await res.json()
//   return { props: { rockets: results } }
// }

export const RocketsMap = () => {
  return (
    <>
      <FlexCntr100>
        {rocketMocks.map((rocket: { id: number; name: string; image: string; available: string; location: string; nextLaunch: string; prevLaunch: string; estOrbitTime: string; currCap: number; maxCap: number; lenght: number; width: number; height: number; weight: number }) => {
          return (
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
                        <HeadingH1>
                          {rocket.name}
                        </HeadingH1>
                        <HeadingSemiBGray>
                          {rocket.id}
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
                      <Btn>Load</Btn>
                      <Btn>Launch</Btn>
                    </BtnCntr>
                  </FlexCardTxt>
              </FlexCard>
          )
        })}
      </FlexCntr100>
    </>
  )
}

//
// ----- General ----- //
const HeadingH1 = (props: HeadingProps) => (
  <Heading {...props}
  as={"h1"}
  fontSize={"2xl"}
  color={"brand.600"}
  />
)

const HeadingSemiBGray = (props: HeadingProps) => (
  <Heading {...props}
  as={"h3"}
  fontSize={"m"}
  fontWeight={"semibold"}
  color={"gray.600"}
  />
)

const FlexCntr100 = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  m={"auto auto"}
  p={0}
  justifyContent={"center"}
  rowGap={"100px"}
  columnGap={"50px"}
  alignItems={"center"}
  flexWrap={"wrap"}
  />
)

//
// ----- Card ----- //
const FlexCard = (props: FlexProps) => (
  <Flex {...props}
  maxW={"600px"}
  minW={"300px"}
  flexDir={"row"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  bg={"truewhite"}
  color={"black"}
  borderRadius={"5"}
  boxShadow={"0px 2px 4px 2px rgba(0, 0, 0, 0.02), 1px 1px 2px 0px inset rgba(0, 0, 0, 0.1)"}
  overflow={"hidden"}
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
  borderColor={"gray.300"}
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
  maxH={"180px"}
  objectFit={"cover"}
  objectPosition={"center"}
  />
)
const Img = (props: ImageProps) => (
  <Image {...props}
  w={"100%"}
  h={"100%"}
  objectFit={"cover"}
  boxShadow={"2px 0px 6px 1px rgba(0, 0, 0, 0.02)"}
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
  color={"black"}
  bg={"transparent"}
  borderColor={"gray.300"}
  borderWidth={"1px"}
  borderRadius={2}
  _hover={{
    color: "white",
    bg: "#c35809",
    borderColor: "#c35809",
  }}
  />
)
