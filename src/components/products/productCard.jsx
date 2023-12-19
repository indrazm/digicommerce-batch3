import React from "react";
import Link from "next/link";
import Image from "next/image";
import { imageUrl } from "@/config/apiUrl";

export const ProductCard = ({ id, username, slug, name, featuredImage, price }) => {
  return (
    <div className="space-y-2">
      <Link href={`/${username}/${slug}`}>
        <Image
          alt={name}
          src={`${imageUrl}/tr:h-320/${id}/${featuredImage}`}
          width={400}
          height={400}
          className="rounded-lg cursor-pointer hover:scale-[1.02] transition duration-200"
        />
      </Link>
      <div className="flex justify-between">
        <div>{name}</div>
        <div>${price}</div>
      </div>
    </div>
  );
};
