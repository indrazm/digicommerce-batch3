import { Header } from "@/components/sharedUI/header";
import React from "react";

export default function Layout({ children }) {
  return (
    <main className="max-w-5xl m-auto py-8 space-y-20">
      <Header />
      <div>{children}</div>
    </main>
  );
}
