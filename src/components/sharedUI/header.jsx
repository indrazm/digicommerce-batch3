"use client";

import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
export const Header = () => {
  const { theme, setTheme } = useTheme();

  function setThemeMode(value) {
    if (value) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <header className="flex justify-between">
      <div>Digicommerce</div>
      <Switch onChange={(e) => setThemeMode(e.target.checked)} />
    </header>
  );
};
