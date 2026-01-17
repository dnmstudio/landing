import SectionLabel from "@/components/ui/SectionLabel";
import ServiceCard from "@/components/ui/ServiceCard";
import { ArrowRepeat, PuzzleFill, CloudFill } from "react-bootstrap-icons";

export default function Servicios() {
  return (
    <section className="section section-bg" id="servicios">
      <SectionLabel>Servicios</SectionLabel>
      <h2 className="mb-12">Lo que hacemos</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Service 1: Automatizaciones */}
        <ServiceCard
          icon={<ArrowRepeat size={32} />}
          title="Automatizaciones inteligentes"
          tagline="Menos tareas manuales. Más foco en lo importante."
          description="Diseñamos e implementamos automatizaciones que conectan tus sistemas, reducen errores y optimizan procesos internos."
          sections={[
            {
              title: "HERRAMIENTAS",
              items: [
                "n8n",
                "APIs y Webhooks",
                "Integraciones personalizadas",
              ],
            },
            {
              title: "QUÉ RESOLVEMOS",
              items: [
                "Automatización de procesos internos",
                "Integración entre sistemas",
                "Workflows con triggers y alertas",
                "Reducción de tareas repetitivas",
              ],
            },
            {
              title: "EJEMPLOS",
              items: [
                "Facturación automática",
                "Sincronización de datos",
                "Notificaciones inteligentes",
                "Automatización de reportes",
              ],
            },
          ]}
        />

        {/* Service 2: Soluciones Digitales */}
        <ServiceCard
          icon={<PuzzleFill size={32} />}
          title="Soluciones digitales a la medida"
          tagline="Software diseñado para tu negocio, no al revés."
          description="Desarrollamos sistemas personalizados según tus necesidades reales, desde la definición de requerimientos hasta el escalamiento del producto."
          sections={[
            {
              title: "TECNOLOGÍAS",
              items: [".NET", "Node.js", "Next.js", "SQL y NoSQL", "APIs REST"],
            },
            {
              title: "QUÉ CONSTRUIMOS",
              items: [
                "Sistemas a la medida",
                "Interfaces intuitivas",
                "MVPs para validar ideas",
                "Productos listos para escalar",
              ],
            },
            {
              title: "EJEMPLOS",
              items: [
                "Sistemas de gestión de inventarios",
                "Plataformas de reservas",
                "Dashboards con Power BI",
                "Aplicaciones móviles",
                "Portales web y e-commerce",
              ],
            },
          ]}
        />
      </div>

      {/* Service 3: Cloud - Full width */}
      <div className="grid grid-cols-1">
        <ServiceCard
          icon={<CloudFill size={32} />}
          title="Servicios en la nube"
          tagline="Tu producto, listo para producción y crecimiento."
          description="Implementamos y gestionamos soluciones en la nube para que tu sistema sea seguro, escalable y confiable."
          sections={[
            {
              title: "HERRAMIENTAS",
              items: [
                "Azure",
                "GitHub & GitHub Actions",
                "Azure DevOps",
                "CI/CD pipelines",
              ],
            },
            {
              title: "QUÉ OFRECEMOS",
              items: [
                "Deploys de sistemas en la nube",
                "Escalamiento automático",
                "Protección de datos",
                "Automatización de pipelines",
                "Monitoreo continuo",
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}
