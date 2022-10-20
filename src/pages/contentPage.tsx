/* eslint-disable @typescript-eslint/no-var-requires */
import { Divider, Flex, FlexProps, ImageProps, Text, Image } from "@chakra-ui/react"
// import imageLoader from "features/imageLoader"
import { Layout } from "partials/Layout"
import { AboutUsSectionProps, ContentPageResults, SectionsProps, TeamMemberProps } from "types/content.model"
import { NextPage } from "next"

type contentPageProps = {
  contentPageResults: ContentPageResults
}

const ContentPage: NextPage<{ contentPageResults: ContentPageResults }> = ({ contentPageResults }: contentPageProps) => {
  const {
    Header,
    AboutUsSection,
    Articles,
    TeamMemberSection,
  } = contentPageResults

  return (
    <>
    <Layout>

      <FlexHeaderCntr>
          <FlexCol100 mb={8}>
          <Text as={"h1"} fontSize={"2rem"} fontWeight={"semibold"} marginTop={0} marginBottom={10}>
            {Header.Title}
        </Text>
            {/* <Text>{Header.Subheader}</Text> */}
          </FlexCol100>

          <FlexAboutUsArticle key={AboutUsSection.Id}>
            <AboutUsImgCntr>
                <AboutUsImg src={getAboutUsSectionImg(AboutUsSection)} alt={AboutUsSection.Title} />
            </AboutUsImgCntr>
            <FlexTxtCntr>
                <Text as={"h2"} fontSize={"1.75rem"} fontWeight={"semibold"} marginTop={0} marginBottom={0}>
                  {AboutUsSection.Title}
                </Text>
                <Flex w={"100%"} flexDir={"column"} dangerouslySetInnerHTML={{ __html: AboutUsSection.Body }} />
                {/* <Text w={"100%"}> {AboutUsSection.Body} </Text> */}
            </FlexTxtCntr>
          </FlexAboutUsArticle>
      </FlexHeaderCntr>

      {/* <Divider/> */}
{/*
       <FlexCol100 mb={"100px"} mt={"0px"}> */}
       <FlexWrapper mb={"150px"} mt={"50px"}>
        {/* <FlexCntr100> */}
          {Articles?.Sections?.map((article) => {
            return (
              <FlexArticle key={article.Id} >
                <ImgCntr>
                  <ArticleImg src={getArticlesSectionsImg(article)} alt={article.Title} />
                </ImgCntr>
                <Flex flexDir={"column"} paddingX={"5px"} paddingY={"10px"}>
                  <Text as={"h3"} fontSize={"1.2rem"} fontWeight={"semibold"} marginTop={0} marginBottom={2}>
                    {article.Title}
                  </Text>
                  <Flex w={"100%"} flexDir={"column"} dangerouslySetInnerHTML={{ __html: article.Body }} />
                  {/* <Text>
                    {article.Body}
                  </Text> */}
                </Flex>
              </FlexArticle>
            )
          })}
        {/* </FlexCntr100> */}
        </FlexWrapper>
      {/* </FlexCol100> */}

      <Divider mt={"150px"} mb={"150px"}/>

      <FlexColM>
        <FlexCol100 mt={8} mb={10}>
          <Text as={"h2"} fontSize={"1.75rem"} fontWeight={"semibold"} marginTop={0} marginBottom={0}>
            {TeamMemberSection.Header}
          </Text>
          <Text>{TeamMemberSection.Subheader}</Text>
        </FlexCol100>

        <FlexWrapper mb={50}>
          {TeamMemberSection.TeamMemberList.map((Member) => {
            return (
              <FlexMemberArticle key={Member.TeamMemberName}>
                <MemberImgCntr>
                  <MemberImg src={getTeamMemberImg(Member)} alt={Member.TeamMemberName} />
                </MemberImgCntr>
                <FlexColPad>
                  <Text as={"h3"} fontSize={"1.2rem"} fontWeight={"semibold"} marginTop={0} marginBottom={2}>
                    {Member.TeamMemberName}
                  </Text>
                  <Text fontWeight={"semibold"}>{Member.JobTitle}</Text>
                  {/* <Text>{Member.Description}</Text> */}
                  {/* <Flex w={"100%"} flexDir={"column"} dangerouslySetInnerHTML={{ __html: Member.Description }} /> */}
                </FlexColPad>
              </FlexMemberArticle>
            )
          })}
        </FlexWrapper>
      </FlexColM>

    </Layout>
    </>
  )
}

// Fetch data
export async function getServerSideProps () {
  const https = require("https")
  const httpsAgent = new https.Agent({ rejectUnauthorized: false })
  const data = await fetch("https://localhost:44395/Umbraco/api/Endpoint/GetContentPage", {
    method: "GET",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    agent: httpsAgent, // ignore error
  })
  const contentPageResults = await data.json()
  return { props: { contentPageResults } }
}

function getTeamMemberImg (Member: TeamMemberProps) {
  const url = ("https://localhost:44395/")
  const src = (Member.TeamMemberImage)
  return (
    [url, src].join("")
  )
}
function getArticlesSectionsImg (article: SectionsProps) {
  const url = ("https://localhost:44395/")
  const src = (article.ImageUrl)
  return (
    [url, src].join("")
  )
}
function getAboutUsSectionImg (AboutUsSection: AboutUsSectionProps) {
  const url = ("https://localhost:44395/")
  const src = (AboutUsSection.ImageUrl)
  return (
    [url, src].join("")
  )
}

export default ContentPage

// ----- General -----
const FlexColM = (props: FlexProps) => (
  <Flex {...props}
  mb={50}
  mt={50}
  flexDir={"column"}
  />
)
const FlexCol100 = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  flexDir={"column"}
  />
)

const FlexColPad = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  flexDir={"column"}
  paddingX={"5px"}
  paddingY={"10px"}
  />
)
const FlexWrapper = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  flexWrap={"wrap"}
  justifyContent={"space-around"}
  columnGap={"5px"}
  rowGap={"40px"}
  />
)

// ----- Header section -----
const FlexHeaderCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  paddingBottom={"50px"}
  marginTop={"10em"}
  flexDir={"column"}
  justifyContent={"center"}
  alignItems={"center"}
  />
)
// ----- Header / About article -----
const FlexAboutUsArticle = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  marginLeft={"auto"}
  marginRight={"auto"}
  flexDir={"row"}
  flexWrap={"wrap"}
  justifyContent={"space-evenly"}
  />
)
const FlexTxtCntr = (props: FlexProps) => (
  <Flex {...props}
  maxW={"48%"}
  minW={"300px"}
  flexDir={"column"}
  />
)
const AboutUsImgCntr = (props: FlexProps) => (
  <Flex {...props}
  minW={"300px"}
  maxW={"48%"}
  objectFit={"cover"}
  />
)
const AboutUsImg = (props: ImageProps) => (
  <Image {...props}
  // loader={ imageLoader }
  // unoptimized
  w={"100%"}
  height={"100%"}
  objectFit={"cover"}
  borderRadius={"5px"}
  />
)

// ----- Articles -----
const FlexArticle = (props: FlexProps) => (
  <Flex {...props}
  maxW={"30%"}
  minW={"300px"}
  flexDir={"column"}
  flexWrap={"wrap"}
  justifyContent={"flex-start"}
  bg={"truewhite"}
  color={"black"}
  borderRadius={"5"}
  boxShadow={"0px 2px 4px 2px rgba(0, 0, 0, 0.05), 1px 1px 2px 0px inset rgba(0, 0, 0, 0.02)"}
  overflow={"hidden"}
  />
)
const ImgCntr = (props: FlexProps) => (
  <Flex {...props}
  minW={"20%"}
  maxH={"200px"}
  objectFit={"cover"}
  objectPosition={"center"}
  overflow={"hidden"}
  />
)
const ArticleImg = (props: ImageProps) => (
  <Image {...props}
  // loader={ imageLoader }
  // unoptimized
  w={"100%"}
  h={"100%"}
  objectFit={"cover"}
  />
)

// ----- Teammember articles -----
const FlexMemberArticle = (props: FlexProps) => (
  <Flex {...props}
  maxW={"30%"}
  minW={"300px"}
  flexDir={"column"}
  gap={2}
  bgColor={""}
  borderRadius={"5px"}
  overflow={"hidden"}
  boxShadow={"2px 4px 7px 0px rgba(0, 0, 0, 0.08)"}
  />
)
const MemberImgCntr = (props: FlexProps) => (
  <Flex {...props}
  w={"100%"}
  maxH={"200px"}
  objectFit={"cover"}
  />
)
const MemberImg = (props: ImageProps) => (
  <Image {...props}
  // loader={ imageLoader }
  // unoptimized
  w={"100%"}
  h={"200px"}
  objectFit={"cover"}
  />
)
