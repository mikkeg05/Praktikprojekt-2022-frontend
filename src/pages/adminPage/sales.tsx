import { useState } from "react"
import { Flex, Stat, StatLabel, StatNumber, StatGroup, StatHelpText, StatArrow, TabList, Tab, Tabs, TabProps, TabListProps, FlexProps, StatProps, StatLabelProps, StatNumberProps, StatHelpTextProps, StatArrowProps, Text, Box, Button, ButtonProps } from "@chakra-ui/react"
import { salestats, dayRevPercent, dayRevTotal, monthRevTotal, weekRevTotal, weekRevPercent, monthRevPercent } from "mockData/salesMock"
// import { SalesChartDay, SalesChartMonth, SalesChartWeek } from "@components/SalesChart"
import { Orders } from "../../components/Orders"
import { FormatTodaysDate } from "utils/getdatetime"
import { Layout } from "partials/Layout"
import NextLink from "next/link"
import { Nav } from "@components/Nav"

function SalesPage () {
  const [selected, setSelected] = useState("day")

  return (
    <>
     <Layout>
     <Box>
         <AdminBtnCntr>
      <NextLink href="/adminPage/sales" passHref>
        <AdminBtnActive as="a">Sales</AdminBtnActive>
      </NextLink>
      <NextLink href="/adminPage/schedule" passHref>
        <AdminBtn as="a">Schedule</AdminBtn>
      </NextLink>
      <NextLink href="/adminPage/rockets" passHref>
        <AdminBtn as="a">Rockets</AdminBtn>
      </NextLink>
    </AdminBtnCntr>

{/* <FlexCntr> */}
          <Text as={"h1"} fontSize={"2rem"} fontWeight={"semibold"} marginTop={0} marginBottom={5}>
            Sales
          </Text>
          <Text marginBottom={10} fontWeight={"semibold"}>
            {FormatTodaysDate()}
          </Text>
          <FlexCol>
            <StatGroup gap={"6px"} w={"100%"} justifyContent={"space-evenly"} marginLeft={"auto"} marginRight={"auto"} alignItems={"center"}>
              {salestats?.map((data) => {
                return (
                <StatBox key={data.id}>
                  <StatBoxLabel>
                    <Text fontSize={"xs"}>{data.label}</Text>
                  </StatBoxLabel>
                  <StatFlex>
                    <Number>
                      <Text fontSize={"100%"} fontWeight={"semibold"}>
                      { selected === "day" && (<>{data.character} {data.numDay}</>) }
                      { selected === "week" && (<>{data.character} {data.numWeek}</>) }
                      { selected === "month" && (<>{data.character[1]} {data.numMonth}</>) }
                      </Text>
                    </Number>
                    <HelpTxt>
                      <Text fontSize={"xs"}>
                      <Arrow type="increase" w={"6px"} />
                      { selected === "day" && (<>{data.difDay}</>) }
                      { selected === "week" && (<>{data.difWeek}</>) }
                      { selected === "month" && (<>{data.difMonth}</>) }
                      {data.percent}
                      </Text>
                    </HelpTxt>
                  </StatFlex>
                </StatBox>
                )
              })}
            </StatGroup>

            <FlexSpaced>
              <Text as={"h4"} fontSize={"1.1rem"} fontWeight={"bold"} marginTop={"4px"}>
                Statistic
              </Text>
              <Flex justifyContent={"space-between"} gap={4}>
                <Tabs variant={"unstyled"}>
                  <SubTabList>
                    <SubTab onClick= { () => setSelected("day") } className={selected === "day" ? "active" : ""} >
                      Day
                    </SubTab>
                    <SubTab onClick= { () => setSelected("week") } className={selected === "week" ? "active" : ""} >
                      Week
                    </SubTab>
                    <SubTab onClick= { () => setSelected("month") } className={selected === "month" ? "active" : ""}>
                      Month
                    </SubTab>
                  </SubTabList>
                </Tabs>
              </Flex>
            </FlexSpaced>

            <FlexChartCntr>
              <ChartStat>
                <StatLabel fontSize={"xl"}>
                  Revenue
                </StatLabel>
                <StatNumber fontSize={"3xl"}>
                  { selected === "day" && (<>${dayRevTotal.toFixed(2)}</>) }
                  { selected === "week" && (<>${weekRevTotal.toFixed(2)}</>) }
                  { selected === "month" && (<>${monthRevTotal.toFixed(2)}</>) }
                </StatNumber>
                <StatHelpText fontSize={"lg"}>
                  <StatArrow type="increase" w={"6px"}/>
                  { selected === "day" && (<> {dayRevPercent} %</>) }
                  { selected === "week" && (<> {weekRevPercent} % </>) }
                  { selected === "month" && (<> {monthRevPercent} %</>) }
                </StatHelpText>
                <StatHelpText fontSize={"lg"}>
                  Total revenue in
                  { selected === "day" && (<> Day</>) }
                  { selected === "week" && (<> Week</>) }
                  { selected === "month" && (<> Month</>) }
                </StatHelpText>
              </ChartStat>

              <Flex80Center>
                {/* { selected === "day" && (<SalesChartDay/>) }
                { selected === "week" && (<SalesChartWeek/>) }
                { selected === "month" && (<SalesChartMonth/>) } */}
              </Flex80Center>
            </FlexChartCntr>

          </FlexCol>
        {/* </FlexCntr> */}

        <FlexCol>
          <FlexCntr>
          <Text as={"h3"} fontSize={"1rem"} fontWeight={"semibold"} marginTop={0} marginBottom={5}>
              Orders
            </Text>
              <Orders/>
            </FlexCntr>
          </FlexCol>

        </Box>
    </Layout>
    </>
  )
}

SalesPage.getNav = function getNav (page: typeof SalesPage) {
  return <Nav>{page}</Nav>
}

export default SalesPage

const AdminBtnCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  h={"100%"}
  marginTop={"80px"}
  marginBottom={"80px"}
  paddingTop={"50px"}
  justifyContent="space-between"
  columnGap={2}
  />
)
const AdminBtn = (props: ButtonProps) => (
  <Button {...props}
  w={"30%"}
  // boxShadow={"2px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px -1px 2px 0px inset rgba(0, 0, 0, 0.1)"}
  borderRadius={"5"}
  fontWeight={"medium"}
  borderWidth={"1px"}
  color={"gray.500"}
  borderColor={"gray.200"}
  bg={"transparent"}
  _selected= { {
    color: "white",
    bg: "sdblack",
    fontWeight: "semibold",
  } }
  _hover= { {
    color: "sdblack",
    // bg: "black",
    borderColor: "black",
    fontWeight: "medium",
  } }
  />
)
const AdminBtnActive = (props: ButtonProps) => (
  <Button {...props}
  w={"30%"}
  // boxShadow={"2px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px -1px 2px 0px inset rgba(0, 0, 0, 0.1)"}
  borderRadius={"5"}
  color= "white"
  bg= "sdblack"
  borderWidth={"1px"}
  borderColor={"sdblack"}
  fontWeight= "semibold"
  _hover= { {
    color: "white",
    bg: "sdblack",
    fontWeight: "semibold",
  } }
  />
)

const SubTab = (props: TabProps) => (
  <Tab {...props}
  h={"30px"}
  paddingX={"10px"}
  bg={"transparent"}
  borderColor={"transparent"}
  borderWidth={"1px"}
  borderRadius={5}
  fontWeight={"semibold"}
  _selected={ { borderColor: "black", bg: "transparent" } }
  />
)
const SubTabList = (props: TabListProps) => (
  <TabList {...props}
  display={"flex"}
  flexDirection={"row"}
  gap={2}
  />
)
const StatBox = (props: StatProps) => (
  <Stat {...props}
  // minW={"85px"}
  minW={"30%"}
  maxWidth={"33%"}
  minH={"100px"}
  marginLeft={"auto"}
  marginRight={"auto"}
  paddingX={1}
  paddingY={2}
  bg={"#e9e9e9"}
  borderRadius={4}
  />
)
const StatBoxLabel = (props: StatLabelProps) => (
  <StatLabel {...props}
  maxW={"160px"}
  m={" auto"}
  fontSize={"xs"}
  />
)
const StatFlex = (props: FlexProps) => (
  <Flex {...props}
  minW={"max-content"}
  maxW={"160px"}
  m={["0", "auto"]}
  flexDir={"column"}
  justifyContent={"space-between"}
  verticalAlign={"middle"}
  />
)
const Number = (props: StatNumberProps) => (
  <StatNumber {...props}
  fontSize={"1rem"}
  fontWeight={"semibold"}
  />
)
const HelpTxt = (props: StatHelpTextProps) => (
  <StatHelpText {...props}
  m={0}
  fontSize={"s"}
  fontWeight={"semibold"}
  />
)
const Arrow = (props: StatArrowProps) => (
  <StatArrow {...props}
  w={"6px"}
  type={"increase"}
  />
)

const FlexCol = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  flexDir={"column"}
  />
)
const FlexSpaced = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  marginTop={"2em"} marginBottom={"0.5em"}
  justifyContent={"space-between"}
  />
)

const Flex80Center = (props: FlexProps) => (
  <Flex {...props}
  w={"80%"}
  m={["auto", "auto"]}
  justifyContent={"center"}
  />
)

const FlexChartCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  marginTop={"1em"} marginBottom={"4em"}
  flexWrap={"wrap"}
  />
)
const ChartStat = (props: StatProps) => (
  <Stat {...props}
  minW={"max-content"}
  paddingX={0} paddingBottom={2}
  />
)

const FlexCntr = (props: FlexProps) => (
  <Flex {...props}
  minW={"280px"}
  w={"80%"}
  marginLeft={"auto"}
  marginRight={"auto"}
  flexDir={"column"}
  />
)
