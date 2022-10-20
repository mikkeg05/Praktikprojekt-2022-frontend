/* eslint-disable @typescript-eslint/no-explicit-any */
import { Heading, Image, Flex, FlexProps, ImageProps, HeadingProps } from "@chakra-ui/react"
// import { GetRocketResults, RocketProps } from "types/rocket.model"
// import imageLoader from "../../imageLoader"

// const checkAvailability = (rocket: any) => {
//   if (rocket.available === true) {
//     return (<>Available</>)
//   } else return (<>Unavailable</>)
// }

// export async function getStaticPaths () {
//   const res = await fetch("/mockData/rocketMock")
//   const { results }: GetRocketResults = await res.json()

//   return {
//     paths: results.map((rocket) => { // obs
//       return { params: { rid: String(rocket.id) } } // obs
//     }),
//     fallback: false,
//   }
// }

// export async function getStaticProps ({ params }: { params: { id: string } }) {
//   const res = await fetch(`/rocketMock${params.id}`)
//   const rocket = await res.json()

//   return { props: { rocket } } // obs
// }

// function Rocket ({ rocket }:{ rocket: RocketProps }) {
const Rocket = () => {
  return (
      <>
        <FlexCard
        // key={rocket.id}
        >
            <ImgCntr>
              <Img
              // src={rocket.imgUrl}
              />
            </ImgCntr>

            <FlexCardTxt>
              <FlexCardHeading>
                <Flex flexDir={"column"}>
                  <HeadingSemiBGray>
                    {/* {checkAvailability(rocket)} - {rocket.status} */}
                    </HeadingSemiBGray>
                  <HeadingH1>
                    {/* {rocket.name} */}
                    </HeadingH1>
                  <HeadingSemiBGray>
                    {/* {rocket.id} */}
                    </HeadingSemiBGray>
                </Flex>
              </FlexCardHeading>
            </FlexCardTxt>
        </FlexCard>
      </>
  )
}

export default Rocket

const FlexCard = (props: FlexProps) => (
  <Flex {...props}
  maxWidth={"600px"}
  flexDir={"row"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  bg={"white"}
  color={"black"}
  borderRadius={"5"}
  boxShadow={"0px 2px 4px 1px rgba(0, 0, 0, 0.02), 1px 1px 2px 0px inset rgba(0, 0, 0, 0.1)"}
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

// ----- Heading ----- //
const HeadingSemiBGray = (props: HeadingProps) => (
  <Heading {...props}
  as={"h3"}
  fontSize={"m"}
  fontWeight={"semibold"}
  color={"gray.600"}
  />
)
const HeadingH1 = (props: HeadingProps) => (
  <Heading {...props}
  as={"h1"}
  fontSize={"2xl"}
  color={"brand.600"}
  />
)

// ----- Image ----- //
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
