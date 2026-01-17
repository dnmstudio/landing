import SectionLabel from "@/components/ui/SectionLabel";
import ProcessStep from "@/components/ui/ProcessStep";

export default function ComoTrabajamos() {
  const steps = [
    {
      number: 1,
      title: "Entendemos",
      description:
        "Analizamos tus procesos, objetivos y contexto real.",
    },
    {
      number: 2,
      title: "Diseñamos",
      description:
        "Arquitectura, flujos y tecnología adecuada para tu negocio.",
    },
    {
      number: 3,
      title: "Construimos",
      description:
        "Código limpio, workflows automatizados y sistemas conectados.",
    },
    {
      number: 4,
      title: "Desplegamos",
      description:
        "Tu sistema en la nube, listo para escalar sin fricción.",
    },
  ];

  return (
    <section className="section section-surface" id="proceso">
      <SectionLabel>Proceso</SectionLabel>
      <h2 className="mb-12">Un enfoque claro y práctico</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <ProcessStep
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}
