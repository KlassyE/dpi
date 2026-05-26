import { ArrowRight, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuickFacts from '../components/QuickFacts.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { homeMoments, pillars, schools, siteContact } from '../data/siteContent.js';

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="hero__eyebrow">Nursery, primary, and international Christian education in Kampala</p>
          <h1 id="hero-title">DPI Schools</h1>
          <p className="hero__lead">Christ-like, servant leaders transforming nations.</p>
          <p className="hero__body">
            Divine Purpose Investments Schools brings together Divine Kids Nursery School, Divine Purpose Junior School, and Shekinah Christian International School for values-led learning from the earliest years through K-12.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href={`tel:${siteContact.phones[0].href}`}>
              <Phone size={20} />
              Call Admissions
            </a>
            <Link className="button button--secondary" to="/admissions">
              View Admissions
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <QuickFacts />

      <section className="section section--light">
        <div className="section__inner two-column two-column--center">
          <div>
            <SectionIntro eyebrow="About DPI Schools" title="A school family with a clear mandate">
              <p>
                DPI Schools serves families through Christian education at nursery, primary, and international levels. The school family is shaped by purposeful discipleship, excellent learning, and a responsible sense of service.
              </p>
            </SectionIntro>
            <blockquote>Christ-like, servant leaders transforming nations.</blockquote>
          </div>
          <div className="mission-panel">
            <p className="mission-panel__label">Mission</p>
            <h3>Godly and responsible individuals formed through biblical values and professional learning.</h3>
            <p>
              Learners are supported in a friendly, stimulating environment where they discover purpose and grow creatively, intellectually, and spiritually.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionIntro eyebrow="Our Schools" title="Three pathways under one DPI umbrella">
            <p>DPI Schools supports children from early childhood into primary and international study, with continuity of values and care across each stage.</p>
          </SectionIntro>
          <div className="school-grid">
            {schools.map((schoolItem) => {
              const Icon = schoolItem.icon;
              return (
                <article className="school-card" key={schoolItem.title}>
                  <img className="school-card__image" src={schoolItem.image} alt={schoolItem.imageAlt} loading="lazy" />
                  <div className="school-card__body">
                    <Icon size={30} />
                    <p>{schoolItem.years}</p>
                    <h3>{schoolItem.title}</h3>
                    <span>{schoolItem.text}</span>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="button-row">
            <Link className="button button--outline" to="/schools">
              Explore the schools
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="section__inner">
          <SectionIntro eyebrow="Strategic Pillars" title="Built on Kingdom principles">
            <p>The 2025-2031 strategic plan frames DPI as an education and community digital hub committed to formation beyond exam results.</p>
          </SectionIntro>
          <div className="pillar-grid">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article className="pillar-card" key={pillar.title}>
                  <Icon size={28} />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="section__inner">
          <SectionIntro eyebrow="Campus Moments" title="A living school community">
            <p>Across classrooms, outdoor learning, creative activity, and performance, learners are formed in spaces that feel active, safe, and purposeful.</p>
          </SectionIntro>
          <div className="media-grid" aria-label="DPI campus moments">
            {homeMoments.map((mediaItem) => (
              <figure className="media-card" key={mediaItem.src}>
                <img src={mediaItem.src} alt={mediaItem.alt} loading="lazy" />
                <figcaption>{mediaItem.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section admissions-callout">
        <div className="section__inner two-column two-column--center">
          <div>
            <SectionIntro eyebrow="Admissions" title="Admissions are open for 2026">
              <p>Families can contact the school offices for nursery, primary, and international section enquiries.</p>
            </SectionIntro>
            <div className="button-row">
              <Link className="button button--primary" to="/admissions">
                Admissions details
                <ArrowRight size={20} />
              </Link>
              <a className="button button--outline" href="/documents/divine-schools-admission-2026.pdf">
                <FileText size={20} />
                Admission PDF
              </a>
            </div>
          </div>
          <figure className="admissions__image">
            <img src="/assets/dpi-campus-community.webp" alt="DPI students, staff, and families gathered on campus" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Home;