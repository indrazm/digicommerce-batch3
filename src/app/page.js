import { AllProducts } from "@/components/products/allProducts";
import { ProductCard } from "@/components/products/productCard";
import { Header } from "@/components/sharedUI/header";
import { apiUrl, imageUrl } from "@/config/apiUrl";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch(`${apiUrl}/products`);
  const data = await res.json();
  return data;
}

export default async function Home() {
  const { data } = await getData();

  return (
    <main className="max-w-5xl m-auto py-8 space-y-20">
      <Header />

      <section className="text-center w-[700px] m-auto space-y-2">
        <h1>8,186 curated design resources to speed up your creative workflow.</h1>
        <p>Join a growing family of 723,787 designers and makers from around the world.</p>
      </section>

      <AllProducts productsData={data} />
    </main>
  );
}
