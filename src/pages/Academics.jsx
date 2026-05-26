import { FileText, ShieldCheck } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { academicMoments, curriculumHighlights, reasons } from '../data/siteContent.js';

function Academics() {
  return (
    <>
      <PageHero eyebrow="Academics" title="Excellent learning with character at the center" image="/assets/classroom-reading.webp">
        <p>The national curriculum is offered alongside the Accelerated Christian Education programme for disciplined, values-led, mastery-focused learning.</p>
      </PageHero>

      <section className="section section--light">
        <div className="section__inner two-column">
          <div>
            <SectionIntro eyebrow="Curriculum" title="Professional learning shaped by purpose">
              <p>
                DPI Schools combines structured instruction with biblical values, individualized support, and a stimulating environment where learners can grow in knowledge, responsibility, creativity, and faith.
              </p>
            </SectionIntro>
            <a className="text-link" href="/documents/dpi-schools-overview.pptx">
              <FileText size={20} />
              Download school overview
            </a>
          </div>
          <div className="reason-list">
            {reasons.map((reason) => (
              <div className="reason-item" key={reason}>
                <ShieldCheck size={22} />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionIntro eyebrow="Academic Model" title="Clear pathways for measurable growth">
            <p>Learning is organized around mastery, responsibility, and steady progress rather than disconnected activity.</p>
          </SectionIntro>
          <div className="highlight-grid">
            {curriculumHighlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="media-grid media-grid--three" aria-label="Academic life at DPI">
            {academicMoments.map((mediaItem) => (
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

export default Academics;