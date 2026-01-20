import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  tagline: string;
  description?: string;
  sections?: {
    title: string;
    items: string[];
  }[];
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  tagline,
  description,
  sections,
  className = "",
}: ServiceCardProps) {
  return (
    <div className={`card ${className}`}>
      {/* Icon */}
      <div className="text-accent mb-4" style={{ fontSize: "2rem" }}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="mb-2">{title}</h3>

      {/* Tagline */}
      <p className="text-secondary mb-4">{tagline}</p>

      {/* Description (optional) */}
      {description && <p className="mb-6">{description}</p>}

      {/* Sections (HERRAMIENTAS, QUÉ RESOLVEMOS, etc.) */}
      {sections &&
        sections.map((section) => (
          <div key={section.title} className="mb-6 last:mb-0">
            <h4 className="micro text-primary mb-3">{section.title}</h4>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="text-secondary text-sm flex gap-2">
                  <span className="text-accent">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}
