import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Image from "next/image";

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});
}

const Product = ({ product: { image, name, slug, price } }) => {
  const { asPath } = useRouter();
  let seoProductSlug = asPath.split("/")[2];
  let seoProductName = "";
  if (seoProductSlug != null) {
    seoProductName = seoProductSlug.replace("-", " ");
    if (seoProductSlug === slug.current) {
      seoProductName = toTitleCase(seoProductSlug.replace("-", " "));
  }
  }
  return (
    <>
    <NextSeo
      title={`${toTitleCase(seoProductName)} - Macaron Magic`}
      description="Great tasting home-made macarons"
    />
  <div>
    <Link href={`/product/${slug.current}`}>
  <div className="product-card">
  <figure className="fliptile">
    <Image
          src={urlFor(image && image[0])}
          width={250}
          height={250}
          className="product-image"
          alt={`Image of products`}
    />
    <figcaption>
      <p className="product-name">{name}</p>
    </figcaption>
    </figure>
    <p className="product-price">
    $
    {price.toLocaleString("en-US", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })}
    </p>
  </div>
</Link>
</div>
</>
);
};

export default Product;