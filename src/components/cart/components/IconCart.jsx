"use client";

import { Badge } from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";
import { cartAtom } from "../atom/cartAtom";
import { useAtom } from "jotai";

export const IconCart = () => {
  const [cart, setCart] = useAtom(cartAtom);

  return (
    <Badge content={cart.length} color="danger">
      <ShoppingBag size={24} />
    </Badge>
  );
};
