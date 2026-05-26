import PageHero from '../components/PageHero.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { activities, schoolLifeGallery } from '../data/siteContent.js';

function LifeAtDpi() {
  return (
    <>
      <PageHero eyebrow="Life at DPI" title="Learning that grows the whole child" image="/assets/music-drums.webp">
        <p>Students are encouraged to discover gifts, strengthen confidence, build friendships, serve responsibly, and enjoy a balanced school experience.</p>
      </PageHero>

      <section className="section section--light">
        <div className="section__inner">
          <SectionIntro eyebrow="Activities" title="A complete school rhythm">
            <p>DPI school life includes classroom learning, devotion, creative expression, sport, technology, service, and practical support for families.</p>
          </SectionIntro>
          <div className="activity-grid">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div className="activity-pill" key={activity.label}>
                  <Icon size={22} />
                  <span>{activity.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__inner">
          <SectionIntro eyebrow="Highlights" title="School life in motion">
            <p>These moments show classroom learning, friendship, mentorship, music, practical skills, and the everyday rhythm of DPI campus life.</p>
          </SectionIntro>
          <div className="media-grid" aria-label="DPI Schools media highlights">
            {schoolLifeGallery.map((mediaItem) => (
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

export default LifeAtDpi;