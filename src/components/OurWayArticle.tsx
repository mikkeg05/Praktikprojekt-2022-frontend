import Image from "next/image"
import imageLoader from "features/imageLoader"
import { Section } from "../types/frontpage.model"

export function OurWayArticle ({ ImageUrl, Title, Body }: Section) {
  return <article className="our-way-article">
      <div className="our-way-img"><Image unoptimized={true} loader={imageLoader} layout="fill" src={`http://local.spacedebris.dk${ImageUrl}`}></Image></div>
        <h3>{Title}</h3>
          <p>{Body}</p>
        </article>
}
