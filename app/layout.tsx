import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NoBoxDev — We design products that understand people",
  description:
    "We build web and mobile applications shaped by psychology and enhanced by AI. From MVP to full product — designed for how people actually think.",
  openGraph: {
    title: "NoBoxDev — We design products that understand people",
    description:
      "Psychology-driven design meets modern engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
