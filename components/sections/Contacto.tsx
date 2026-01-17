export default function Contacto() {
  return (
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
  );
}
