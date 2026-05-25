import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { mediaItems, schools } from '../data/siteContent.js';

function Schools() {
  return (
    <>
      <PageHero eyebrow="Our Schools" title="Three learning pathways, one DPI standard" image="/assets/shekinah-admissions-overview.webp">
        <p>DPI Schools supports children from early childhood into primary and international study with continuity of biblical values, professional care, and purposeful formation.</p>
      </PageHero>

      <section className="section">
        <div className="section__inner">
          <SectionIntro eyebrow="Learning Pathways" title="Choose the section that fits your child">
            <p>Each school has a distinct age focus while sharing DPI's commitment to excellence, safety, character, and family partnership.</p>
          </SectionIntro>
          <div className="school-grid">
            {schools.map((schoolItem) => {
              const Icon = schoolItem.icon;
              return (
                <article className="school-card" key={schoolItem.title}>
                  <Icon size={30} />
                  <p>{schoolItem.years}</p>
                  <h3>{schoolItem.title}</h3>
                  <span>{schoolItem.text}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="section__inner school-detail-grid">
          {schools.map((schoolItem) => (
            <article className="school-detail" key={schoolItem.title}>
              <p>{schoolItem.years}</p>
              <h2>{schoolItem.title}</h2>
              <span>{schoolItem.detail}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionIntro eyebrow="Admissions" title="Talk with the school before placement">
            <p>The admissions team can help parents confirm the appropriate section, level, and available support services before registration.</p>
          </SectionIntro>
          <div className="button-row">
            <Link className="button button--primary" to="/admissions">
              Go to admissions
              <ArrowRight size={20} />
            </Link>
          </div>
          <div className="media-grid media-grid--three" aria-label="School brochures and highlights">
            {mediaItems.slice(0, 3).map((mediaItem) => (
              <figure className="media-card" key={mediaItem.src}>
                <img src={mediaItem.src} alt={mediaItem.alt} loading="lazy" />
                <figcaption>{mediaItem.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Schools;