export default function Hero() {
  return (
    <section className="section section-bg min-h-screen flex flex-col justify-center">
      <span className="section-label">DNM Studio</span>
      <h1 className="hero-title mb-4">Where systems flow</h1>
      <p className="body-large max-w-2xl mb-8">
        Automatizaciones inteligentes y sistemas digitales que escalan con tu
        negocio.
      </p>
      <div className="flex gap-4 flex-wrap">
        <button className="btn btn-fill">Agenda consulta gratuita</button>
        <button className="btn btn-outline">Ver servicios</button>
      </div>
    </section>
  );
}
