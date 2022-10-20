/* eslint-disable @typescript-eslint/no-var-requires */
import { Flex, Link, Text, Image, FlexProps, Icon, IconProps, TextProps } from "@chakra-ui/react"
import { TbCopyright } from "react-icons/tb"

export const Footer = () => {
// function Footer ({ footerResults }: footerProps) {
  // const {
  //   NavigationSection,
  //   AdressSection,
  //   FollowUsSection,
  // } = footerResults

  return (
    <>
      <FooterCntr>
        <FooterInnerCntr>

        <Link href="/" display={"flex"} w={"max-content"} flexDir={"row"} alignItems={"center"} mb={"40px"} gap={2} _hover={{ color: "brand.600" }}>
          <Image src="/sdLogo.svg" h={"30px"} w={"30px"} />
          <Text fontSize={"18px"} fontWeight={"semibold"}>
            Space Debris inc.
          </Text>
        </Link>

        <InnerCntr>
            <FooterNav>
              <Link href="/" fontWeight={"semibold"} fontSize={"14px"} minW={"100px"} maxW={"100%"} h={"25px"} _hover={{ color: "brand.600" }}>
                Home
              </Link>
              <Link href="/shopPage" fontWeight={"semibold"} fontSize={"14px"} minW={"100px"} maxW={"100%"} h={"25px"} _hover={{ color: "brand.600" }}>
                Webshop
              </Link>
              <Link href="/contentPage" fontWeight={"semibold"} fontSize={"14px"} minW={"100px"} maxW={"100%"} h={"25px"} _hover={{ color: "brand.600" }}>
                Content
              </Link>
              <Link href="/adminPage" fontWeight={"semibold"} fontSize={"14px"} minW={"100px"} maxW={"100%"} h={"25px"} _hover={{ color: "brand.600" }}>
                Login
              </Link>
            </FooterNav>

          <FlexSections>
            <InfoSections>
              <Section>
                <SectionHeading>Adress</SectionHeading>
                <Link href="https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/" target={"_blank"} fontWeight={"normal"} fontSize={"14px"} w={"max-content"} _hover={{ color: "brand.600" }}>
                  Solar System <br/>
                  Pluto <br/>
                  RA 19H 54m 35s | De -23° 3′ 34&#34;
                </Link>
              </Section>

              <Section>
                <SectionHeading>Contact</SectionHeading>
                <Text marginBottom={0} fontWeight={"normal"} fontSize={"14px"} w={"max-content"} _hover={{ color: "brand.600", cursor: "pointer" }}>
                  SDI@spacedebrisinc.com
                </Text>
                <Text fontWeight={"normal"} fontSize={"14px"} w={"max-content"} _hover={{ color: "brand.600", cursor: "pointer" }}>
                  888-888-888-888
                </Text>
              </Section>
            </InfoSections>

            <FollowSection>
              <FbIcon height={"2em"} width={"2em"} fill={"brand.600"} _hover={{ fill: "brand.500", cursor: "pointer" }}/>
              <InstaIcon height={"2em"} width={"2em"} fill={"brand.600"} _hover={{ fill: "brand.500", cursor: "pointer" }}/>
              <TwitterIcon height={"2em"} width={"2em"} fill={"brand.600"} _hover={{ fill: "brand.500", cursor: "pointer" }}/>
            </FollowSection>
          </FlexSections>

          <FooterBtm>
            <Flex flexDir={"row"} gap={1} justifyContent={"left"} minW={"180px"} _hover={{ color: "brand.600", cursor: "pointer" }}>
              <Text>Space Debris Incorporated </Text>
              <TbCopyright/>
            </Flex>
            <Flex flexDir={"row"}gap={4}>
              <Text _hover={{ color: "brand.600", cursor: "pointer" }}>Privacy policy</Text>
              <Text _hover={{ color: "brand.600", cursor: "pointer" }}>Terms of use</Text>
            </Flex>
          </FooterBtm>

        </InnerCntr>
        </FooterInnerCntr>
      </FooterCntr>
    </>
  )
}

// Fetch data
export async function GetStaticProps () {
  const data = await fetch("https://localhost:44395/Umbraco/api/Endpoint/GetFooter")
  const footerResults = await data.json()
  return { props: { footerResults } }
}

export default Footer

const FooterCntr = (props: FlexProps) => (
  <Flex {...props}
  h={"100%"}
  w={"100%"}
  marginTop={"200px"}
  marginX={"auto"}
  paddingY={"1rem"}
  paddingX={"2rem"}
  position={"relative"}
  bottom={0}
  flexDir={"column"}
  flexWrap={"wrap"}
  />
)

const FooterInnerCntr = (props: FlexProps) => (
  <Flex {...props}
  h={"100%"}
  w={"100%"}
  flexDir={"column"}
  flexWrap={"wrap"}
  />
)

const InnerCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  flexDir={"row"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  gap={4}
  />
)

const FooterNav = (props: FlexProps) => (
  <Flex {...props}
  maxWidth={"250px"}
  mb={4}
  flexDir={"row"}
  flexWrap={"wrap"}
  columnGap={0}
  rowGap={0}
  />
)

const FlexSections = (props: FlexProps) => (
  <Flex {...props}
  w={"auto"}
  flexWrap={"wrap"}
  flexDir={"row"}
  justifyContent={"space-between"}
  gap={8}
  />
)
const SectionHeading = (props: TextProps) => (
  <Text {...props}
  // as={"h6"}
  fontSize={"lg"}
  fontWeight={"semibold"}
  />
)
const InfoSections = (props: FlexProps) => (
  <Flex {...props}
  w={"auto"}
  mb={4}
  flexWrap={"wrap"}
  flexDir={"row"}
  justifyContent={"space-between"}
  gap={4}
  />
)
const Section = (props: FlexProps) => (
  <Flex {...props}
  maxW={"50%"}
  minW={"250px"}
  flexDir={"column"}
  />
)

const FollowSection = (props: FlexProps) => (
  <Flex {...props}
  minWidth={"150px"}
  mb={4}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  alignItems={"center"}
  />
)

const FooterBtm = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  mt={20}
  flexDir={"row"}
  flexWrap={"wrap"}
  justifyContent={"space-between"}
  color={"gray.500"}
  gap={2}
  />
)

const FbIcon = (props: IconProps) => (
  <Icon viewBox="0 0 34.875 34.664" {...props}>
  <path id="Icon_awesome-facebook" data-name="Icon awesome-facebook" d="M35.438,18A17.438,17.438,0,1,0,15.275,35.227V23.041h-4.43V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.52,2.52,0,0,0-2.841,2.723V18h4.836l-.773,5.041H20.725V35.227A17.444,17.444,0,0,0,35.438,18Z" transform="translate(-0.563 -0.563)"/>
  </Icon>
)

const InstaIcon = (props: IconProps) => (
  <Icon viewBox="0 0 34.524 34.524" {...props}>
  <path id="Icon_simple-instagram" data-name="Icon simple-instagram" d="M17.262,0c-4.689,0-5.275.022-7.116.1a12.728,12.728,0,0,0-4.19.8A8.453,8.453,0,0,0,2.9,2.9,8.422,8.422,0,0,0,.906,5.955a12.691,12.691,0,0,0-.8,4.19C.017,11.987,0,12.572,0,17.262s.022,5.275.1,7.116a12.736,12.736,0,0,0,.8,4.19A8.465,8.465,0,0,0,2.9,31.627a8.441,8.441,0,0,0,3.058,1.991,12.744,12.744,0,0,0,4.19.8c1.841.086,2.427.1,7.116.1s5.275-.022,7.116-.1a12.774,12.774,0,0,0,4.19-.8,8.822,8.822,0,0,0,5.049-5.049,12.736,12.736,0,0,0,.8-4.19c.086-1.841.1-2.427.1-7.116s-.022-5.275-.1-7.116a12.766,12.766,0,0,0-.8-4.19A8.472,8.472,0,0,0,31.627,2.9,8.411,8.411,0,0,0,28.568.906a12.7,12.7,0,0,0-4.19-.8C22.537.017,21.951,0,17.262,0Zm0,3.107c4.607,0,5.157.023,6.977.1a9.511,9.511,0,0,1,3.2.6,5.681,5.681,0,0,1,3.277,3.275,9.531,9.531,0,0,1,.594,3.2c.082,1.821.1,2.368.1,6.977s-.022,5.157-.106,6.977a9.714,9.714,0,0,1-.606,3.2,5.481,5.481,0,0,1-1.293,1.988,5.385,5.385,0,0,1-1.985,1.289,9.6,9.6,0,0,1-3.215.594c-1.833.082-2.372.1-6.99.1s-5.158-.022-6.99-.106A9.788,9.788,0,0,1,7.013,30.7a5.346,5.346,0,0,1-1.984-1.293,5.241,5.241,0,0,1-1.295-1.985,9.8,9.8,0,0,1-.6-3.215c-.065-1.812-.088-2.372-.088-6.968s.023-5.158.088-6.992a9.785,9.785,0,0,1,.6-3.214A5.117,5.117,0,0,1,5.029,5.048,5.106,5.106,0,0,1,7.013,3.756a9.554,9.554,0,0,1,3.195-.606c1.834-.065,2.373-.086,6.99-.086l.065.043Zm0,5.291a8.864,8.864,0,1,0,8.864,8.864A8.863,8.863,0,0,0,17.262,8.4Zm0,14.618a5.754,5.754,0,1,1,5.754-5.754A5.752,5.752,0,0,1,17.262,23.016ZM28.548,8.048a2.071,2.071,0,1,1-2.071-2.07A2.073,2.073,0,0,1,28.548,8.048Z"/>
  </Icon>
)
const TwitterIcon = (props: IconProps) => (
  <Icon viewBox="0 0 35 35" {...props}>
    <circle id="Ellipse_1" data-name="Ellipse 1" cx="17.5" cy="17.5" r="17.5" fill="brand.600"/>
    <path id="Icon_metro-twitter" data-name="Icon metro-twitter" d="M26.123,7.083a9.661,9.661,0,0,1-2.775.761,4.847,4.847,0,0,0,2.125-2.673A9.673,9.673,0,0,1,22.4,6.343,4.837,4.837,0,0,0,14.17,10.75,13.718,13.718,0,0,1,4.21,5.7a4.837,4.837,0,0,0,1.5,6.451,4.812,4.812,0,0,1-2.189-.6c0,.02,0,.04,0,.061a4.835,4.835,0,0,0,3.876,4.738,4.84,4.84,0,0,1-2.182.083,4.837,4.837,0,0,0,4.514,3.356,9.7,9.7,0,0,1-6,2.069,9.8,9.8,0,0,1-1.153-.068,13.677,13.677,0,0,0,7.407,2.171A13.654,13.654,0,0,0,23.726,10.209q0-.314-.014-.625a9.816,9.816,0,0,0,2.411-2.5Z" transform="translate(3.639 4.077)" fill="white"/>
  </Icon>
)
