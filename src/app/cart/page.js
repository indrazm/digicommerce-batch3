"use client";

import { useAtom } from "jotai";
import { cartAtom } from "@/components/cart/atom/cartAtom";
import Image from "next/image";
import { imageUrl } from "@/config/apiUrl";
import { Button } from "@nextui-org/react";
import { X } from "lucide-react";

export default function Page() {
  const [cart, setCart] = useAtom(cartAtom);

  function removeItem(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  // reduce the cart array to get the total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0); // good practice

  return (
    <main className="space-y-8">
      <section>
        <h3>Cart</h3>
        <p>Here is all of your products in cart</p>
      </section>

      {cart.length === 0 ? (
        <div className="bg-zinc-800 p-5 text-center">No product in cart</div>
      ) : (
        <>
          <section className="space-y-8">
            {cart.map((item, index) => {
              return (
                <div key={index} className="flex justify-between gap-4 items-center">
                  <div className="flex gap-4 items-center">
                    <Image alt={item.name} src={`${imageUrl}/tr:h-90/${item.id}/${item.featuredImage}`} width={90} height={90} className="rounded-lg " />
                    <h3>{item.name}</h3>
                  </div>
                  <div className="flex gap-4">
                    <h4>${item.price}</h4>
                    <Button onClick={() => removeItem(index)} size="sm" color="danger" isIconOnly>
                      <X size={15} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="flex justify-between border-t-1 pt-8">
            <h4>Total</h4>
            <div className="space-y-4">
              <h3>$ {totalPrice}</h3>
              <Button>Checkout</Button>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
