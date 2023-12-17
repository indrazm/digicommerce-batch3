"use client";

import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import React from "react";
import { useRouter } from "next/navigation";

export const CreateProduct = () => {
  const router = useRouter();

  async function handleCreateProduct(event) {
    event.preventDefault();
    const formData = new FormData();

    const name = event.target.name.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const featuredImage = event.target.featuredImage.files[0];
    const images = event.target.images.files; // plural
    const category = event.target.category.value;

    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("featuredImage", featuredImage);
    formData.append("category", category);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    if (res.status === 201) {
      router.push("/dashboard/products");
    }
  }

  return (
    <main className="space-y-8">
      <section>
        <div>
          <h3>Create new Product</h3>
          <p>Here you can create a new product.</p>
        </div>
      </section>
      <form onSubmit={handleCreateProduct}>
        <section className="space-y-4">
          <Input name="name" label="Name" />
          <Textarea name="description" label="Description" />
          <Input name="price" label="Price" type="number" />
          <Input name="featuredImage" type="file" />
          <Input name="images" type="file" multiple />
          <Select name="category">
            <SelectItem key="fonts">Fonts</SelectItem>
            <SelectItem key="illustration">Illustration</SelectItem>
            <SelectItem key="figma">Figma</SelectItem>
            <SelectItem key="3d-assets">3D Assets</SelectItem>
            <SelectItem key="templates">Templates</SelectItem>
            <SelectItem key="mockups">Mockups</SelectItem>
          </Select>
          <Button type="submit">Create Product</Button>
        </section>
      </form>
    </main>
  );
};
