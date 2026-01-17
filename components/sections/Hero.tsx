import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Hero() {
  return (
    <section className="section section-bg min-h-screen flex flex-col justify-center">
      <SectionLabel>DNM Studio</SectionLabel>
      <h1 className="hero-title text-primary mb-6">
        Where systems flow
      </h1>
      <p className="body-large text-secondary max-w-2xl mb-8">
        Automatizaciones inteligentes y sistemas digitales que escalan con tu
        negocio.
      </p>
      <div className="flex gap-4 flex-wrap">
        <Button variant="fill" href="#contacto">
          Agenda una consulta gratuita
        </Button>
        <Button variant="outline" href="#servicios">
          Ver servicios
        </Button>
      </div>
    </section>
  );
}
