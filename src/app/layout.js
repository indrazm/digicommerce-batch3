import { DM_Sans as FontSans } from "next/font/google";
import { Provider } from "@/components/provider";

import "@/styles/globals.css";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata = {
  title: "Digicommerce - devscale indonesia",
  description: "Batch 3 Demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
