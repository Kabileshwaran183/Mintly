
import Hero from "./components/Hero";
import CardsSection from "./components/CardsSection";
import TrustedBrands from "./components/TrustedBrands";
import GetOnGooglePay from "./components/GetOnGooglePay";
import About from "./components/About";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Hero />
      <CardsSection />
      <TrustedBrands />
      <GetOnGooglePay />
      <About />
    </>
  );
}
