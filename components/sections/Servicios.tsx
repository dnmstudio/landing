export default function Servicios() {
  return (
    <section className="section section-bg">
      <span className="section-label">Servicios</span>
      <h2 className="mb-8">Lo que hacemos</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="mb-2">Automatizaciones inteligentes</h3>
          <p>Menos tareas manuales. Mas foco en lo importante.</p>
        </div>
        <div className="card">
          <h3 className="mb-2">Soluciones digitales a la medida</h3>
          <p>Software disenado para tu negocio, no al reves.</p>
        </div>
        <div className="card">
          <h3 className="mb-2">Servicios en la nube</h3>
          <p>Tu producto, listo para produccion y crecimiento.</p>
        </div>
      </div>
    </section>
  );
}
