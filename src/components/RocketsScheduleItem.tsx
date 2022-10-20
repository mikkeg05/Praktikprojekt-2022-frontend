import { GetStaticProps } from "next"
import { Tr, Td, Text, TableCellProps, TextProps, TableRowProps } from "@chakra-ui/react"
import { Rocket } from "types/rocket.model"

type RocketProps = {
  rocket: Rocket,
}

function RocketScheduleItem ({ rocket }: RocketProps) {
  return (
    <>
      <TrItem key={rocket.id}>

        <TdCell w={"30%"} maxW={"100px"} borderRightWidth={".5px"} borderRightStyle={"dotted"} borderRightColor={"gray.100"}>
          <TdText fontWeight={"medium"} marginTop={".1rem"} marginRight={".2rem"}>
            {rocket.name}
          </TdText>
          <TdTextSmall textAlign={"start"} verticalAlign={"bottom"} wordBreak={"break-all"} marginRight={".2rem"}>
            {rocket.location}
          </TdTextSmall>
        </TdCell>

        <TdCell width={"30%"} borderRightWidth={".5px"} borderRightStyle={"dotted"} borderRightColor={"gray.100"} isNumeric>
          <TdText marginRight={".2rem"}>
            {rocket.nextLaunch}
          </TdText>
          <TdTextSmall marginRight={".2rem"}>
            {rocket.prevLaunch}
          </TdTextSmall>
        </TdCell>

        <TdCell width={"30%"} isNumeric >
          <TdText>
            {rocket.currCap}
            <span> (kg/m
            <span style={ {
              fontSize: "8px",
              textAlign: "start",
              verticalAlign: "top",
            }}>3</span>)
          </span>
          </TdText>
          <TdTextSmall>
            {/* <span style={ { fontSize: "6px" }}> max</span> */}
            {rocket.maxCap}
            <span> (kg/m
            <span style={ {
              fontSize: "6px",
              textAlign: "start",
              verticalAlign: "top",
            }}>3</span>)
          </span>
          </TdTextSmall>
        </TdCell>

      </TrItem>

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("/api/rockets")
  const { rocketsdata } = await res.json()
  return { props: { rocketsdata }, revalidate: 10 }
}

export default RocketScheduleItem

const TrItem = (props: TableRowProps) => (
  <Tr {...props}
  w={"100%"}
  h={"100%"}
  borderColor={"gray.200"}
  borderBottomWidth={"1px"}
  _hover={{ bg: "rgba(0, 0, 0, .05)", color: "sdblack" }}
  _selected={{ bg: "rgba(0, 0, 0, .05)", color: "sdblack" }}
  />
)
const TdCell = (props: TableCellProps) => (
  <Td {...props}
  paddingLeft={"1px"}
  paddingRight={0}
  verticalAlign={"top"}
  wordBreak={"break-word"}
  borderBottomColor={"gray.200"}
  color={"sdblack"}
  // borderBottomWidth={".5px"}
  />
)
const TdText = (props: TextProps) => (
  <Text {...props}
  marginTop={".15rem"}
  marginBottom={".1rem"}
  fontSize={".6rem"}
  color={"sdblack"}
  wordBreak={"break-all"}
  />
)

const TdTextSmall = (props: TextProps) => (
  <Text {...props}
  marginTop={0}
  marginBottom={".1rem"}
  fontSize={"60%"}
  fontStyle={"italic"}
  color={"gray.500"}
  wordBreak={"break-word"}
  />
)
