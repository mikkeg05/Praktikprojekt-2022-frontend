import Image from "next/image"
import imageLoader from "features/imageLoader"
import { Section } from "../types/frontpage.model"

export function HowItWorksArticle ({ ImageUrl, Title }: Section) {
  return <article className="howitworks-article">
      <div className="howitworks-img" style={{ position: "relative" }}>
          <Image unoptimized={true} loader={imageLoader} width="6rem" height="6rem"
          layout="responsive" src={`http://local.spacedebris.dk${ImageUrl}`}></Image>
      </div>
      <div className="howitworks-title">
           <h3>{Title}</h3>
    </div>
         </article>
}
