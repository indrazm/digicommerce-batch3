"use client";

import { NextUIProvider } from "@nextui-org/react";

export const Provider = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
