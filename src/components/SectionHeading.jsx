export default function SectionHeading({ eyebrow, title, text, center = false }) {
  return <div className={`section-heading ${center ? "center" : ""}`}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {text && <p className="section-copy">{text}</p>}
  </div>;
}