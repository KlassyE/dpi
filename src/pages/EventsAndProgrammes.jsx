import PageHero from '../components/PageHero.jsx';
import { eventProgrammes } from '../data/siteContent.js';

function EventsAndProgrammes() {
  return (
    <>
      <PageHero eyebrow="Events & Programmes" title="Third term highlights for families and learners" image="/assets/dpi-campus-community.webp">
        <p>From the opening of Term 3 to the anniversary celebration and youth camp, these are the key programme moments families can look forward to this term.</p>
      </PageHero>

      <section className="section downloads">
        <div className="section__inner">
          <div className="event-grid event-grid--image-only">
            {eventProgrammes.map((item) => (
              <article className={`event-card ${item.image ? 'event-card--image-only' : 'event-card--text-only'}`} key={item.title} aria-label={item.title}>
                {item.image ? (
                  <>
                    <img className="event-card__image" src={item.image} alt={item.title} title={item.title} />
                    <div className="event-card__caption">
                      <span className="event-card__tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p className="event-card__date">{item.date}</p>
                      <p>{item.description}</p>
                    </div>
                  </>
                ) : (
                  <div className="event-card__content">
                    <span className="event-card__tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p className="event-card__date">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default EventsAndProgrammes;
