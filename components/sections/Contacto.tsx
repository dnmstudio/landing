import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function Contacto() {
  return (
    <section className="section section-bg text-center" id="contacto">
      <SectionLabel>Contacto</SectionLabel>
      <h2 className="mb-4">¿Listo para automatizar y escalar?</h2>
      <p className="text-secondary max-w-2xl mx-auto mb-8">
        Agenda una consulta gratuita de 30 minutos y analicemos juntos cómo
        optimizar tus procesos y hacer crecer tu negocio.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button variant="fill" href="#contacto" className="w-full sm:w-auto">
          Agendar consulta gratuita
        </Button>
        <Button variant="outline" href="#contacto" className="w-full sm:w-auto">
          Contáctanos por WhatsApp
        </Button>
      </div>
    </section>
  );
}
