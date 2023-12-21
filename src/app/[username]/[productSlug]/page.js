import { ProductSingle } from "@/components/products/productSingle";
import { apiUrl, imageUrl } from "@/config/apiUrl";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

async function getData(productSlug) {
  const res = await fetch(`${apiUrl}/products?slug=${productSlug}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const { username, productSlug } = params;
  const { data } = await getData(productSlug);

  return <ProductSingle data={data} />;
}
