import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SobreNosotros from "@/components/sections/SobreNosotros";
import Servicios from "@/components/sections/Servicios";
import ComoTrabajamos from "@/components/sections/ComoTrabajamos";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreNosotros />
        <Servicios />
        <ComoTrabajamos />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
