export default function Footer() {
  return (
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
  );
}
