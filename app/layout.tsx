import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NyaVista — Every story. A clearer view.",
  description: "A first-pass demo of NyaVista, the global AI-powered news intelligence and multimedia platform from E-DEAL EXPRESS LLC.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
