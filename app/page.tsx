import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Work from "@/components/Work";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Nav />
      <Hero />
      <Programs />
      <Work />
      <Philosophy />
      <Contact />
      <Footer />
    </>
  );
}
