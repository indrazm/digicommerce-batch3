"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button, Input } from "@nextui-org/react";
import Link from "next/link";
import { IconCart } from "../cart/components/IconCart";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  function setThemeMode(value) {
    if (value) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function queryHandler(e) {
    e.preventDefault();
    const query = e.target.query.value;
    router.push(`?q=${query}`);
  }

  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <Link href="/">
          <div className="font-bold tracking-tight">Digicommerce</div>
        </Link>
        <div>
          <form onSubmit={queryHandler}>
            <Input name="query" placeholder="Search" size="small" />
          </form>
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <div>Featured</div>
        <div>Most downloaded</div>
        <Button size="sm">Join as Creator</Button>
        <Link href="/cart">
          <IconCart />
        </Link>
        {/* <Switch size="sm" onChange={(e) => setThemeMode(e.target.checked)} /> */}
      </div>
    </header>
  );
};
