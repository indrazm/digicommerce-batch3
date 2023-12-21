"use client";

import React from "react";
import { imageUrl } from "@/config/apiUrl";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { cartAtom } from "../cart/atom/cartAtom";
import { useAtom } from "jotai";

export const ProductSingle = ({ data }) => {
  const [cart, setCart] = useAtom(cartAtom);

  function addToCart() {
    const cartData = [...cart]; // copy cart data
    cartData.push(data); // add new data to cart
    setCart(cartData);
  }

  return (
    <main className="space-y-12">
      <section className="flex justify-between">
        <div className="space-y-2">
          <h1>{data.name}</h1>
          <div className="flex gap-2 items-center">
            <div className="bg-zinc-100 text-black font-medium px-3 py-1 rounded-full">{data.user.username}</div>
            <div>{data.category}</div>
          </div>
        </div>
        <Button onClick={addToCart}>Add to cart - ${data.price}</Button>
      </section>

      <React.Suspense fallback={<div>Loading....</div>}>
        <section className="grid grid-cols-2 gap-6">
          <Image alt={data.name} src={`${imageUrl}/tr:h-500/${data.id}/${data.featuredImage}`} width={800} height={800} className="rounded-xl" />
          {data.images.map((image) => {
            return (
              <div key={image}>
                <Image alt={data.name} src={`${imageUrl}/tr:h-500/${data.id}/${image}`} width={800} height={800} className="rounded-xl" />
              </div>
            );
          })}
        </section>
      </React.Suspense>

      <section className="space-y-2">
        <h3>Description</h3>
        <p className="whitespace-pre-wrap">{data.description}</p>
      </section>
    </main>
  );
};
