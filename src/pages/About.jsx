import PageHero from '../components/PageHero.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { pillars } from '../data/siteContent.js';

function About() {
  return (
    <>
      <PageHero eyebrow="About DPI Schools" title="A school family with a clear mandate">
        <p>Divine Purpose Investments Schools exists to raise Christ-like, servant leaders who can transform families, communities, and nations.</p>
      </PageHero>

      <section className="section section--light">
        <div className="section__inner two-column two-column--center">
          <div>
            <SectionIntro eyebrow="Who We Are" title="Purpose-led education in Kampala">
              <p>
                Divine Purpose Investments Ltd serves families through Christian schools at nursery, primary, and international levels. The mandate is discipleship: shepherding young people into responsible agents of transformation with strong character, professional learning, and a sense of purpose.
              </p>
            </SectionIntro>
            <blockquote>They will rebuild the ancient ruins, raise up the foundations of many generations, and be called repairers of broken walls.</blockquote>
          </div>
          <div className="mission-panel">
            <p className="mission-panel__label">Vision</p>
            <h3>Christ-like, servant leaders transforming nations.</h3>
            <p className="mission-panel__label">Mission</p>
            <p>
              To bring up godly and responsible individuals through biblical values, excellent and professional learning, and a friendly, stimulating environment where learners discover purpose and develop creative, intellectual, and spiritual capacities.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="section__inner">
          <SectionIntro eyebrow="Strategic Pillars" title="Built on Kingdom principles">
            <p>The 2025-2031 strategic plan positions DPI as a school family and community digital hub with formation, excellence, and service at its center.</p>
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
    </>
  );
}

export default About;