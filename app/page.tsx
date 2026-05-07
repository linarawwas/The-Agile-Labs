import ASymbol from "@/components/ASymbol";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import Products from "@/components/Products";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ASymbol />
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <Products />
        <Process />
        <Team />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
