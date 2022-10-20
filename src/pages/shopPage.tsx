// import Image from "next/image"
import NextLink from "next/link"
import { GetStaticProps } from "next"
import { ItemBags } from "@components/ItemBags"
import { itemData } from "mockData/itemsMock"
import Image from "next/image"
import { useBasket } from "contexts/basketContext"
import imageLoader from "features/imageLoader"
import { ShopPageType } from "../types/shoppage.model"
import { Button } from "@chakra-ui/react"
import { Nav } from "../components/Nav"

function ShopPage ({ shopPageData }: { shopPageData: ShopPageType }) {
  const { increaseItemQuantity } = useBasket()
  // console.log(shopPageData)
  const { TopSection, TrashBagSection, Weight } = shopPageData
  const weightDetails = Weight.Description.split(/\r?\n|\r|\n/g)

  return <main id="webshop-main">
    <header style={{ backgroundImage: `url(http://local.spacedebris.dk${TopSection.ImageUrl})` }} id="webshop-header">
      <div id="webshop-header-content">
        <h1>{TopSection.Textbox}</h1>
    <div className="btn-container">
          <NextLink href={TopSection.Button[0].BtnLink} passHref>
            <Button bgColor={`#${TopSection.Button[0].BtnColor}`} className="landing-btn">
            {TopSection.Button[0].BtnText}
        </Button>
      </NextLink>
          <NextLink href={TopSection.Button[1].BtnLink} passHref>
            <Button bgColor={`#${TopSection.Button[1].BtnColor}`} className="landing-btn orange">
              {TopSection.Button[1].BtnText}
        </Button>
      </NextLink>
    </div>
      </div>
    </header>
    <section id="webshop-first-section">
      <div className="textbox">
        <h2>{TrashBagSection.BagsHeader}</h2>
          <p>{TrashBagSection.BagsSubheader}</p>
      </div>
      <div className="bag-container">
        {TrashBagSection.Bags.map((b) => {
          return <ItemBags key={b.Id} {...b}></ItemBags>
        })}
      </div>
    </section>
    <section id="webshop-second-section">
      <div className="weight-text-con">
          <div>
          <h2>{Weight.Title} {Weight.Price},-</h2>
          <h3>{Weight.DescriptionTitle}</h3>
          </div>
          <div className="details-con">
            <ul className="details">
            {weightDetails.map((d) => {
              return <li key={d}>- {d}</li>
            })}
            </ul>
          </div>
        <div className="weight-btn-con">
          <Button className="buy-btn" onClick={() => increaseItemQuantity(Weight.Id, Weight.ItemType, Weight.Price, Weight.Title)} >Add to basket</Button>
          </div>
        </div>
      <div>
        <div className="weight-img-cont">
          <Image unoptimized={true} loader={imageLoader}
            width={"300rem"} height={"550rem"} src={`http://local.spacedebris.dk${Weight.WeightImageUrl}`}></Image>
        </div>
      </div>
    </section>
  </main>
}

export async function getFakeStaticProps () {
  // const json = { items: "hi" }

  return {
    props: { items: itemData },
    revalidate: 10,
  }
}
ShopPage.getNav = function getNav (page: typeof ShopPage) {
  return <Nav>{page}</Nav>
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://local.spacedebris.dk/umbraco/api/endpoint/GetWebshoppage")
  const data = await res.json()
  return { props: { shopPageData: data } }
}

export default ShopPage
