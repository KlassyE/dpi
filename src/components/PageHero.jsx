function PageHero({ eyebrow, title, children, image = '/assets/divine-schools-objectives.webp' }) {
  return (
    <section className="page-hero" style={{ '--page-hero-image': `url(${image})` }} aria-labelledby="page-title">
      <div className="page-hero__content">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        {children && <div className="page-hero__body">{children}</div>}
      </div>
    </section>
  );
}

export default PageHero;