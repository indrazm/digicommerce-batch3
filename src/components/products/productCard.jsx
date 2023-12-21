"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, ShoppingBag } from "lucide-react";
import { imageUrl } from "@/config/apiUrl";
import { cartAtom } from "../cart/atom/cartAtom";
import { useAtom } from "jotai";

export const ProductCard = ({ id, username, slug, name, featuredImage, price }) => {
  const [cart, setCart] = useAtom(cartAtom);
  const data = { id, username, slug, name, featuredImage, price };

  function addToCart() {
    const cartData = [...cart]; // copy cart data
    cartData.push(data); // add new data to cart
    setCart(cartData);
  }

  return (
    <div className="relative">
      <div className="absolute z-10 flex justify-center items-center gap-4 opacity-0 hover:opacity-100 w-full h-full bg-black/40 transition duration-200">
        <Link href={`/${username}/${slug}`}>
          <Eye />
        </Link>
        <ShoppingBag onClick={addToCart} className="cursor-pointer" />
      </div>
      <Image alt={name} src={`${imageUrl}/tr:h-400/${id}/${featuredImage}`} width={400} height={400} className="rounded-lg " />
      <div className="flex justify-between mt-4">
        <div>{name}</div>
        <div>${price}</div>
      </div>
    </div>
  );
};
