function SectionIntro({ eyebrow, title, children }) {
  return (
    <div className="section-intro">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {children && <div className="section-intro__copy">{children}</div>}
    </div>
  );
}

export default SectionIntro;