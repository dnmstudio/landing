import SectionLabel from "@/components/ui/SectionLabel";

export default function SobreNosotros() {
  return (
    <section className="section section-surface" id="sobre-nosotros">
      <SectionLabel>Sobre Nosotros</SectionLabel>
      <h2 className="mb-8">Construimos sistemas que funcionan y escalan</h2>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
        {/* Main Content */}
        <div className="space-y-4">
          <p className="text-secondary">
            En DNM Studio ayudamos a empresas costarricenses y emprendedores a
            transformar procesos manuales en soluciones digitales eficientes y
            automatizadas.
          </p>
          <p className="text-secondary">
            Entendemos tu negocio antes de escribir código, trabajamos con
            tecnologías modernas y diseñamos soluciones listas para producción
            real.
          </p>
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-4">
          <div className="border-l-2 border-accent pl-4">
            <p className="text-accent font-mono font-semibold text-2xl">+5 años</p>
            <p className="text-sm text-secondary">de experiencia</p>
          </div>
          <div className="border-l-2 border-accent pl-4">
            <p className="text-accent font-mono font-semibold text-2xl">+20 proyectos</p>
            <p className="text-sm text-secondary">entregados</p>
          </div>
          <div className="border-l-2 border-accent pl-4">
            <p className="text-accent font-mono font-semibold text-2xl">100%</p>
            <p className="text-sm text-secondary">Costa Rica</p>
          </div>
        </div>
      </div>
    </section>
  );
}
