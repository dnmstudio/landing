export default function Home() {
  return (
    <main>
      {/* Hero Section - Background */}
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

      {/* About Section - Surface */}
      <section className="section section-surface">
        <span className="section-label">Sobre Nosotros</span>
        <h2 className="mb-6">Construimos sistemas que funcionan y escalan</h2>
        <p className="max-w-3xl mb-4">
          En DNM Studio ayudamos a empresas costarricenses y emprendedores a
          transformar procesos manuales en soluciones digitales eficientes y
          automatizadas.
        </p>
        <p className="max-w-3xl">
          Entendemos tu negocio antes de escribir codigo, trabajamos con
          tecnologias modernas y disenamos soluciones listas para produccion
          real.
        </p>
      </section>

      {/* Services Preview - Background */}
      <section className="section section-bg">
        <span className="section-label">Servicios</span>
        <h2 className="mb-8">Lo que hacemos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="mb-2">Automatizaciones inteligentes</h3>
            <p>
              Menos tareas manuales. Mas foco en lo importante.
            </p>
          </div>
          <div className="card">
            <h3 className="mb-2">Soluciones digitales a la medida</h3>
            <p>
              Software disenado para tu negocio, no al reves.
            </p>
          </div>
          <div className="card">
            <h3 className="mb-2">Servicios en la nube</h3>
            <p>
              Tu producto, listo para produccion y crecimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Process Preview - Surface */}
      <section className="section section-surface">
        <span className="section-label">Proceso</span>
        <h2 className="mb-8">Un enfoque claro y practico</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {["Entendemos", "Disenamos", "Construimos", "Desplegamos"].map(
            (step, i) => (
              <div key={step}>
                <span className="text-accent hero-title opacity-30">
                  {i + 1}
                </span>
                <h3 className="mt-2 mb-2">{step}</h3>
                <p className="text-sm">
                  Descripcion del paso {i + 1} del proceso.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Contact Preview - Background */}
      <section className="section section-bg text-center">
        <span className="section-label">Contacto</span>
        <h2 className="mb-4">Listo para automatizar y escalar?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          Agenda una consulta gratuita de 30 minutos y analicemos juntos como
          optimizar tus procesos.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn btn-fill">Agendar consulta</button>
          <button className="btn btn-outline">WhatsApp</button>
        </div>
      </section>

      {/* Footer - Surface */}
      <footer className="section section-surface border-t border-[var(--border-subtle)]">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="text-accent mb-2">DNM Studio</h3>
            <p className="micro text-secondary">Where systems flow</p>
          </div>
          <div className="flex gap-16 flex-wrap">
            <div>
              <h4 className="micro text-primary mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-secondary hover:text-accent">
                    Automatizaciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary hover:text-accent">
                    Desarrollo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary hover:text-accent">
                    Cloud
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="micro text-primary mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-secondary">hola@dnmstudio.io</li>
                <li className="text-secondary">Costa Rica</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--border-subtle)]">
          <p className="micro text-muted">
            2025 DNM Studio. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
