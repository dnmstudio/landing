interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export default function ProcessStep({
  number,
  title,
  description,
  className = "",
}: ProcessStepProps) {
  return (
    <div className={className}>
      {/* Large number with accent color and reduced opacity */}
      <span className="text-accent hero-title opacity-30 block leading-none">
        {number}
      </span>

      {/* Step title */}
      <h3 className="mt-2 mb-2">{title}</h3>

      {/* Step description */}
      <p className="text-sm text-secondary">{description}</p>
    </div>
  );
}
