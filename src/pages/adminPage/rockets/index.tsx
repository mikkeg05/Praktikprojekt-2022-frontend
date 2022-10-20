/* eslint-disable react/no-children-prop */
import { useState } from "react"
import { Flex, Button, ButtonProps, FlexProps, Input, InputGroup, InputRightElement, InputProps, InputGroupProps, Box, Text } from "@chakra-ui/react"
import NextLink from "next/link"
import { SmallAddIcon, SearchIcon } from "@chakra-ui/icons"
import { Layout } from "partials/Layout"
import useSWR from "swr"
import { Rocket } from "types/rocket.model"
import RocketComponent from "@components/RocketComp"
import { Nav } from "@components/Nav"

// function RocketCard (props: { [x: string]: any; variant: any }) {
//   const { variant, ...rest } = props
//   const styles = useStyleConfig("RocketCard", { variant })
//   return <Flex __css={styles} {...rest} />
// }

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function RocketsPage () {
  const [searchValue, setSearchValue] = useState("")

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
        <AdminBtn as="a">Schedule</AdminBtn>
      </NextLink>
      <NextLink href="/adminPage/rockets" passHref>
        <AdminBtnActive as="a">Rockets</AdminBtnActive>
      </NextLink>
    </AdminBtnCntr>

        <Text as={"h1"} fontSize={"2rem"} fontWeight={"semibold"} marginTop={0} marginBottom={10}>
          Rockets
        </Text>
        <FlexSearchCntr>

          <NextLink href="/adminPage/rockets/add" passHref>
            <AddBtn as="a">Rocket</AddBtn>
          </NextLink>
          <InputGroupCntr>
            <InputSearch
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            />
            <InputRightElement children={<SearchIcon color={"gray.500"} />} />
          </InputGroupCntr>
        </FlexSearchCntr>

      <FlexCntr100>
        {data
          .sort((a: { name: string }, b: { name: string }) => a.name > b.name ? 1 : -1)
          .filter((p: Rocket) => p.name.toLowerCase().includes(searchValue) || p.available.toLowerCase().startsWith(searchValue))
          .map((p: Rocket) => (
            <RocketComponent key={p.id} rocket={p}/>
            // <UseRocketCard {...rocket}/>
          ))}
      </FlexCntr100>
      </Box>
      </Layout>
    </>
  )
}

RocketsPage.getNav = function getNav (page: typeof RocketsPage) {
  return <Nav>{page}</Nav>
}

export default RocketsPage

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

const FlexSearchCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  marginLeft={"auto"}
  marginRight={"auto"}
  mb={"20px"}
  flexDir={"row"}
  gap={"20px"}
  justifyContent={"space-between"}
  />
)
const InputGroupCntr = (props: InputGroupProps) => (
  <InputGroup {...props}
  maxW={"50%"}
  alignItems={"right"}
  />
)
const InputSearch = (props: InputProps) => (
  <Input {...props}
    type="text"
    placeholder="Search..."
    width={"100%"}
    focusBorderColor={"brand.500"}
    color={"gray.500"}
    fontSize={"1em"}
    fontWeight={"medium"}
    />
)

const AddBtn = (props: ButtonProps) => (
  <Button {...props}
  leftIcon={<SmallAddIcon/>}
  variant={"outline"}
  paddingLeft={".8rem"}
  paddingRight={"1rem"}
  color={"brand.600"}
  fontSize={"sm"}
  fontWeight={"semibold"}
  borderColor={"brand.600"}
  _hover={{
    color: "white",
    bg: "brand.600",
    borderColor: "brand.600",
  }}
  />
)
const FlexCntr100 = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  m={"auto auto"}
  p={0}
  justifyContent={"center"}
  rowGap={"100px"}
  columnGap={"48px"}
  flexWrap={"wrap"}
  />
)
