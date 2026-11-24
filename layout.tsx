import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HALLO LAUNDRY | Bersih, Wangi, Rapi",
  description: "Laundry kiloan, karpet, selimut, dan bedcover di Botania 1, Batam.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
