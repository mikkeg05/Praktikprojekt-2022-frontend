/* eslint-disable @typescript-eslint/no-var-requires */
import { GetStaticProps } from "next"
import { FrontPage } from "types/frontpage.model"
import NextLink from "next/link"
import { Button } from "@chakra-ui/react"
import { HowItWorksArticle } from "../components/HowItWorksArticle"
import { OurWayArticle } from "../components/OurWayArticle"
import { Nav } from "../components/Nav"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

/* type homeProps = {
  frontpageData: FrontPage
} */

/* function Home: NextPage<{ frontpageData: FrontPage }> = ({ frontpageData }: homeProps) => { */
function Home ({ frontpageData }: { frontpageData: FrontPage }) {
  const {
    TopSection, VideoUrl, HowItWorks, WhyOurWay, BottomSection,
  } = frontpageData
  const { Button: { BtnColor, BtnLink, BtnText } } = TopSection
  const btmSectionH = BottomSection.Textbox.split(/\r?\n|\r|\n/g)
  const btmSectionBtn = BottomSection.Button[0]

  //  const ChakraBtn = chakra(motion.div, { shouldForwardProp: isValidMotionProp })
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        staggerDirection: 1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
  const item2 = {
    hidden: { opacity: 0, y: "10%" },
    show: { opacity: 1, y: 0 },
  }

  const wayRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: wayRef,
    offset: ["-600px", "-50px"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["100%", 0])
  const opacity = useTransform(scrollYProgress, [
    0,
    0.5,
    1,
  ], [
    0,
    0.5,
    1,
  ])

  return (
    <main id="home-main">
    <header id="home-header">
        <div className="home-header-top">
        <video autoPlay muted loop id="landing-vid">
          <source src={`http://local.spacedebris.dk${VideoUrl}`} type="video/mp4"/>
        </video>
        </div>
        <div className="home-header-btm">
          <div>
        <h1>{TopSection.Title}</h1>
            <h2>{TopSection.Subheader}</h2></div>
            <div>
          <NextLink href={BtnLink} passHref>
            <Button className="cta-btn" bgColor={`#${BtnColor}`}>{BtnText}</Button>
          </NextLink>
          </div>
        </div>
      </header>
      <motion.div viewport={{ once: true, margin: "-200px" }}
        variants={container}
        initial="hidden"
        whileInView="show"
        className="home-first-section">
        <motion.h2
          variants={item}>
            {HowItWorks.Header}
          </motion.h2>
        <motion.div
          variants={item2}
       /*  initial={{
          opacity: 0, y: "10%",
        }} whileInView={{
          opacity: 1, y: "0",
        }} transition={{ duration: 0.5 }} */
            className="howitworks-articles">
            {HowItWorks.Sections.map(article => (<HowItWorksArticle key={article.Title} {...article}></HowItWorksArticle>))}
        </motion.div>
        <motion.div variants={item2}>
            <NextLink href={HowItWorks.Button.BtnLink} passHref>
            <Button className="cta-btn orange" bgColor={`#${HowItWorks.Button.BtnColor}`}>{HowItWorks.Button.BtnText}</Button>
            </NextLink>
        </motion.div>
      </motion.div>
      <section ref={wayRef} className="home-second-section">
        <motion.div style={{ y, opacity }} >
        <h2>{WhyOurWay.Header}</h2>
        <div className="our-way-articles">
            {WhyOurWay.Sections.map(article => (<OurWayArticle key={article.Title} {...article}></OurWayArticle>))}
        </div>
          <div className="our-way-cta">
              <NextLink href={WhyOurWay.Button.BtnLink} passHref>
              <Button className="cta-btn orange" bgColor={`#${WhyOurWay.Button.BtnColor}`}>{WhyOurWay.Button.BtnText}</Button>
              </NextLink>
        </div>
        </motion.div>
        </section>
      <section style={{ backgroundImage: `url(http://local.spacedebris.dk${BottomSection.ImageUrl})` }} className="home-third-section">
        {/* <Image loader={imageLoader} src={`http://local.spacedebris.dk${BottomSection.ImageUrl}`} layout="fill"
          objectFit="cover"
          quality={100}></Image> */}<div>
          {btmSectionH.map((h) => { return <h2 key={h}>{h}</h2> })}</div>
        <NextLink href={btmSectionBtn.BtnLink} passHref>
          <Button className="cta-btn" id="btm-btn" bgColor={`#${btmSectionBtn.BtnColor}`}>{btmSectionBtn.BtnText}</Button>
        </NextLink>
        </section>
    </main>
  )
}

Home.getNav = function getNav (page: typeof Home) {
  return <Nav>{page}</Nav>
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://local.spacedebris.dk/umbraco/api/endpoint/GetFrontpage")
  const data = await res.json()
  return { props: { frontpageData: data } }
}

export default Home
