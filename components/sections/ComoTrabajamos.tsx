export default function ComoTrabajamos() {
  const steps = [
    { title: "Entendemos", description: "Descripcion del paso 1 del proceso." },
    { title: "Disenamos", description: "Descripcion del paso 2 del proceso." },
    { title: "Construimos", description: "Descripcion del paso 3 del proceso." },
    { title: "Desplegamos", description: "Descripcion del paso 4 del proceso." },
  ];

  return (
    <section className="section section-surface">
      <span className="section-label">Proceso</span>
      <h2 className="mb-8">Un enfoque claro y practico</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={step.title}>
            <span className="text-accent hero-title opacity-30">{i + 1}</span>
            <h3 className="mt-2 mb-2">{step.title}</h3>
            <p className="text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
