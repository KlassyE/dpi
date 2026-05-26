import { CalendarDays, FileText, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { admissionSteps, siteContact } from '../data/siteContent.js';

function Admissions() {
  return (
    <>
      <PageHero eyebrow="Admissions" title="Admissions are open for 2026" image="/assets/outdoor-group-learning.webp">
        <p>Families are invited to contact the school offices for nursery, primary, and international section enquiries.</p>
      </PageHero>

      <section className="section admissions">
        <div className="section__inner two-column two-column--center">
          <div className="admissions__copy">
            <SectionIntro eyebrow="Registration" title="Start at the school office">
              <p>
                Admissions are available at the school offices from 5 January, Mondays to Fridays, with office time listed as 8:00 AM - 4:00 PM.
              </p>
            </SectionIntro>
            <div className="admission-details">
              <div>
                <CalendarDays size={24} />
                <span>Registration in progress</span>
              </div>
              <div>
                <Phone size={24} />
                <span>0776 587 792 / 0756 621 313</span>
              </div>
              <div>
                <MapPin size={24} />
                <span>{siteContact.address}</span>
              </div>
            </div>
            <div className="button-row">
              <a className="button button--primary" href={`tel:${siteContact.phones[0].href}`}>
                <Phone size={20} />
                Talk to Admissions
              </a>
              <a className="button button--outline" href="/documents/divine-schools-admission-2026.pdf">
                <FileText size={20} />
                Admission PDF
              </a>
            </div>
          </div>
          <figure className="admissions__image">
            <img src="/assets/student-leaders-conversation.webp" alt="DPI students speaking together outside class" />
          </figure>
        </div>
      </section>

      <section className="section section--light">
        <div className="section__inner">
          <SectionIntro eyebrow="Process" title="A clear path for new families">
            <p>The office team can guide each family through entry level, placement, and available support services.</p>
          </SectionIntro>
          <div className="highlight-grid">
            {admissionSteps.map((step) => (
              <article className="highlight-card" key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Admissions;