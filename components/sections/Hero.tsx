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
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="fill" href="#contacto" className="w-full sm:w-auto">
          Agenda una consulta gratuita
        </Button>
        <Button variant="outline" href="#servicios" className="w-full sm:w-auto">
          Ver servicios
        </Button>
      </div>
    </section>
  );
}
