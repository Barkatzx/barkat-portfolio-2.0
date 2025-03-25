import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";
import "./globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Barkat Ullah - Portfolio</title>
      </head>
      <body data-new-gr-c-s-check-loaded="14.1228.0" data-gr-ext-installed="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
