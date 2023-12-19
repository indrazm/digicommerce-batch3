import React from "react";
import { ProductCard } from "./productCard";

export const AllProducts = ({ productsData }) => {
  return (
    <section className="grid grid-cols-3 gap-12">
      {productsData.map(({ id, name, featuredImage, slug, price, user }) => {
        return <ProductCard key={id} id={id} featuredImage={featuredImage} name={name} slug={slug} price={price} username={user.username} />;
      })}
    </section>
  );
};
