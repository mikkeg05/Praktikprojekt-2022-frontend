/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonProps, Button, Flex, FlexProps, Heading, Box, TableContainer, Table, Thead, Tr, Th, Tbody, TableColumnHeaderProps, TextProps, Text } from "@chakra-ui/react"
import { Nav } from "@components/Nav"
import { Orders } from "@components/Orders"
import RocketScheduleItem from "@components/RocketsScheduleItem"
import NextLink from "next/link"
import { Layout } from "partials/Layout"
import useSWR from "swr"
import { Rocket } from "types/rocket.model"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

// function FormatDate () {
//   return (
//     moment(nextLaunch).format("YYYY-MM-DD HH:mm:ssZ")
//   )
// }

// const format = "yyy/mm/ddThh:mm"
// const parseDate = d => parse(d, format, new Date())

function SchedulesPage () {
  const { data, error } = useSWR("/api/rockets", fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
    <Layout>
     <Box>
         <AdminBtnCntr>
      <NextLink href="/adminPage/sales" passHref>
        <AdminBtn as="a">Sales</AdminBtn>
      </NextLink>
      <NextLink href="/adminPage/schedule" passHref>
        <AdminBtnActive as="a">Schedule</AdminBtnActive>
      </NextLink>
      <NextLink href="/adminPage/rockets" passHref>
        <AdminBtn as="a">Rockets</AdminBtn>
      </NextLink>
    </AdminBtnCntr>

      <Text as={"h1"} fontSize={"2rem"} fontWeight={"semibold"} marginTop={0} marginBottom={10}>
        Schedule
      </Text>

      <FlexCntrFullCenter>
        <FlexCntr>
          <TableContainer maxW={"100%"} overflow={"auto"}>
            <Text as={"h3"} fontSize={"1rem"} fontWeight={"semibold"} marginTop={0} marginBottom={5}>
              Rocket launch schedule
            </Text>

            <Table variant='simple' w={"100%"} padding={0} m={0} size={"sm"}>

              <Thead w={"100%"}>
                <Tr w={"100%"}>

                  <Theader width={"30%"} paddingLeft={0}>
                    <TheadText>
                      Rocket
                    </TheadText>
                  </Theader>

                  <Theader width={"30%"} isNumeric>
                    <TheadText>
                      Next launch
                    </TheadText>
                  </Theader>

                  <Theader width={"30%"} isNumeric>
                    <TheadText>
                      Capacity
                    </TheadText>
                  </Theader>

                </Tr>
              </Thead>

              <Tbody w={"100%"}>
                  {data
                    .sort((a: { nextLaunch: number }, b: { nextLaunch: number }) => a.nextLaunch > b.nextLaunch ? 1 : -1)
                    .map((p: Rocket) => {
                      return (
                        <RocketScheduleItem key={p.id} rocket={p} />
                      )
                    })}
              </Tbody>

            </Table>
          </TableContainer>
        </FlexCntr>

        <FlexCntr>
        <Heading as={"h3"} fontSize={"1rem"} marginTop={0} marginBottom={5}>
          Orders
        </Heading>
          <Orders/>
        </FlexCntr>

      </FlexCntrFullCenter>
      </Box>
    </Layout>
    </>
  )
}

SchedulesPage.getNav = function getNav (page: typeof SchedulesPage) {
  return <Nav>{page}</Nav>
}

export default SchedulesPage

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
    bg: "black",
    fontWeight: "semibold",
  } }
  _hover= { {
    color: "sdblack",
    // bg: "black",
    borderColor: "sdblack",
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

const FlexCntrFullCenter = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  m={"auto auto"}
  p={0}
  flexDir={"column"}
  justifyContent={"center"}
  gap={"100px"}
  alignItems={"center"}
  />
)

const FlexCntr = (props: FlexProps) => (
  <Flex {...props}
  minW={"280px"}
  w={"80%"}
  flexDir={"column"}
  />
)

const Theader = (props: TableColumnHeaderProps) => (
  <Th {...props}
  paddingLeft={"1px"}
  paddingRight={0}
  overflow={"break-word"}
  color={"sdblack"}
  borderColor={"gray.400"}
  borderBottomWidth={"2px"}
  />
)
const TheadText = (props: TextProps) => (
  <Text {...props}
  fontSize={".6rem"}
  fontWeight={"bold"}
  marginBottom={".2rem"}
  color={"sdblack"}
  wordBreak={"break-word"}
  />
)
