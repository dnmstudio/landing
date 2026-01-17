export default function Footer() {
  return (
    <footer className="section section-surface border-t border-[var(--border-subtle)]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand */}
        <div>
          <h3 className="text-accent mb-2">DNM Studio</h3>
          <p className="micro text-secondary mb-4">Where systems flow</p>
          <p className="text-sm text-secondary">
            Soluciones digitales, automatizaciones inteligentes y servicios en
            la nube para empresas que quieren operar mejor hoy y crecer mañana.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="micro text-primary mb-4">Servicios</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#servicios"
                className="text-secondary text-sm hover:text-accent transition-colors"
              >
                Automatizaciones
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-secondary text-sm hover:text-accent transition-colors"
              >
                Desarrollo a la medida
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                className="text-secondary text-sm hover:text-accent transition-colors"
              >
                Servicios en la nube
              </a>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="micro text-primary mb-4">Contacto</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:hola@dnmstudio.io"
                className="text-secondary text-sm hover:text-accent transition-colors"
              >
                hola@dnmstudio.io
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-secondary text-sm hover:text-accent transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li className="text-secondary text-sm">Costa Rica</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="micro text-primary mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-secondary text-sm hover:text-accent transition-colors"
              >
                Política de privacidad
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-secondary text-sm hover:text-accent transition-colors"
              >
                Términos de servicio
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-8 border-t border-[var(--border-subtle)]">
        <p className="micro text-muted text-center md:text-left">
          © 2025 DNM Studio. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
