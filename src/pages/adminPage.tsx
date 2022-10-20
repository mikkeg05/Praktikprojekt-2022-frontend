/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from "react"
// import { Box, Divider, Flex, FlexProps, Button, ButtonProps } from "@chakra-ui/react"
// import { Layout } from "partials/Layout"
// import { RocketsTab } from "./adminPage/RocketsTab"
// import SchedulesTab from "@components/SchedulesTab"
// import NextLink from "next/link"
import SalesPage from "./adminPage/sales"

function AdminPage () {
  return (
    <>
      <SalesPage/>
    </>
  )
}

export default AdminPage

// const AdminBtnCntr = (props: FlexProps) => (
//   <Flex {...props}
//   w={"100%"}
//   h={"100%"}
//   marginTop={20}
//   marginBottom={10}
//   paddingTop={"50px"}
//   justifyContent="space-between"
//   columnGap={2}
//   />
// )
// const AdminBtn = (props: ButtonProps) => (
//   <Button {...props}
//   w={"30%"}
//   boxShadow={"2px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px -1px 2px 0px inset rgba(0, 0, 0, 0.1)"}
//   borderRadius={"5"}
//   fontWeight={"normal"}
//   bg={"truewhite"}
//   _selected= { {
//     color: "white",
//     bg: "black",
//     fontWeight: "semibold",
//   } }
//   _hover= { {
//     color: "white",
//     bg: "black",
//     fontWeight: "normal",
//   } }
//   />
// )
// const AdminBtnActive = (props: ButtonProps) => (
//   <Button {...props}
//   w={"30%"}
//   boxShadow={"2px 2px 4px 1px rgba(0, 0, 0, 0.02), 0px -1px 2px 0px inset rgba(0, 0, 0, 0.1)"}
//   borderRadius={"5"}
//   color= "white"
//   bg= "black"
//   fontWeight= "semibold"
//   _hover= { {
//     color: "white",
//     bg: "black",
//     fontWeight: "semibold",
//   } }
//   />
// )

// const TabCntr = (props: FlexProps) => (
//   <Flex {...props}
//   w={"100%"}
//   h={"100%"}
//   marginTop={20}
//   marginBottom={10}
//   paddingTop={"50px"}
//   justifyContent="space-between"
//   />
// )
// const AdminTabs = (props: TabsProps) => (
//   <Tabs {...props}
//   variant={"unstyled"}
//   w={"100%"}
//   />
// )
// const AdminTabList = (props: TabListProps) => (
//   <TabList {...props}
//   display={"flex"}
//   flexDirection={"row"}
//   justifyContent={"space-between"}
//   gap={2}
//   />
// )
// const AdminTab = (props: TabProps) => (
//   <Tab {...props}
//   w={"100%"}
//   boxShadow={"-2px -2px 4px 1px rgba(0, 0, 0, 0.02), 1px 1px 2px 0px inset rgba(0, 0, 0, 0.1)"}
//   borderRadius={"5"}
//   fontWeight={"normal"}
//   _selected= { {
//     color: "white",
//     bg: "black",
//     fontWeight: "semibold",
//   } }
//   _hover= { {
//     color: "white",
//     bg: "black",
//     fontWeight: "normal",
//   } }
//   />
// )
