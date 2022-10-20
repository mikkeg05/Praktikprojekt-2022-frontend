// import { GetStaticProps } from "next"
import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Text, TextProps, TableColumnHeaderProps, TableCellProps, TableRowProps } from "@chakra-ui/react"
import { orders } from "mockData/ordersMock"
// import { GetStatResults } from "types/sales.model"

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch("/mockData/salesMock.json")
//   const { results }: GetStatResults = await res.json()
//   return { props: { sales: results } }
// }

export const Orders = () => {
  return (
    <>
      <TableContainer maxW={"100%"} overflow={"auto"}>
        <Table variant='simple' w={"100%"} padding={0} m={0} size={"sm"}>

          <Thead w={"100%"}>
            <Tr w={"100%"}>
              <Theader width={"20%"} paddingLeft={0}>
                <TheadText>
                  Name
                </TheadText>
              </Theader>

              <Theader width={"25%"}>
                <TheadText>
                  Date
                </TheadText>
              </Theader>

              <Theader width={"20%"}>
                <TheadText>
                  order
                </TheadText>
              </Theader>

              <Theader width={"20%"} isNumeric>
                <TheadText>
                  Status
                </TheadText>
              </Theader>
            </Tr>
          </Thead>

          <Tbody w={"100%"}>
          {orders
            .sort((a: { date: string }, b: { date: string }) => a.date > b.date ? 1 : -1)
            .map((data) => {
              return (
              <TrItem w={"100%"} h={"100%"} key={data.id}>
              <TdCell w={"20%"} textOverflow={"ellipsis"} borderRightWidth={".5px"} borderRightStyle={"dotted"} borderRightColor={"gray.100"}>
                <TdText fontWeight={"medium"} marginTop={".1rem"}>
                  {data.name}
                </TdText>
              </TdCell>

              <TdCell width={"25%"} textOverflow={"ellipsis"} borderRightWidth={".5px"} borderRightStyle={"dotted"} borderRightColor={"gray.100"}>
                <TdText marginLeft={".2rem"}>
                  {data.date}
                </TdText>
              </TdCell>

              <TdCell width={"20%"} textOverflow={"ellipsis"} borderRightWidth={".5px"} borderRightStyle={"dotted"} borderRightColor={"gray.100"}>
                <TdText marginLeft={".2rem"}>
                  {data.order}
                  <span> (kg/m
                    <span style={ {
                      fontSize: "6px",
                      textAlign: "start",
                      verticalAlign: "top",
                    }}>3</span>)
                  </span>
                </TdText>
                {/* <TdTextSmall marginLeft={".2rem"}>
                  {data.orderSize}
                </TdTextSmall> */}
              </TdCell>

              <TdCell width={"20%"} isNumeric>
                <TdText>
                  {data.status}
                </TdText>
              </TdCell>
            </TrItem>
              )
            })}
          </Tbody>

        </Table>
      </TableContainer>
    </>
  )
}

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
  wordBreak={"break-word"}
  />
)

const TdCell = (props: TableCellProps) => (
  <Td {...props}
  paddingLeft={"1px"}
  paddingRight={0}
  verticalAlign={"top"}
  wordBreak={"break-word"}
  color={"sdblack"}
  />
)
const TdText = (props: TextProps) => (
  <Text {...props}
  marginTop={".15rem"}
  marginBottom={".1rem"}
  fontSize={".6rem"}
  wordBreak={"break-all"}
  color={"sdblack"}
  borderBottomColor={"gray.200"}
  />
)

// const TdTextSmall = (props: TextProps) => (
//   <Text {...props}
//   marginTop={0}
//   marginBottom={".1rem"}
//   fontSize={"60%"}
//   fontStyle={"italic"}
//   color={"gray.500"}
//   wordBreak={"break-word"}
//   />
// )
