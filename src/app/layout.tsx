import React, { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Mintly | Connecting Skilled Professionals with the Best Jobs",
  description:
    "Discover the top Hiring Marketplace and Job Placement resource for skilled professionals in the Gems, Jewellery, and Precious Metals Industry at Mintly.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
