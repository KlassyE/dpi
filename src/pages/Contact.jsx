import { CalendarDays, Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { siteContact } from '../data/siteContent.js';

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Speak with DPI Schools" image="/assets/divine-schools-2025-registration.webp">
        <p>Contact the admissions office for school visits, registration enquiries, placement guidance, and document requests.</p>
      </PageHero>

      <section className="section section--light">
        <div className="section__inner">
          <SectionIntro eyebrow="Reach Us" title="Admissions and school office">
            <p>The team is available during office hours to help parents choose the right section and next step.</p>
          </SectionIntro>
          <div className="contact-grid">
            {siteContact.phones.map((phone) => (
              <a className="contact-card" href={`tel:${phone.href}`} key={phone.href}>
                <Phone size={26} />
                <span>Phone</span>
                <strong>{phone.display}</strong>
              </a>
            ))}
            <a className="contact-card" href={`mailto:${siteContact.email}`}>
              <Mail size={26} />
              <span>Email</span>
              <strong>{siteContact.email}</strong>
            </a>
            <div className="contact-card">
              <CalendarDays size={26} />
              <span>Office Hours</span>
              <strong>{siteContact.officeHours}</strong>
            </div>
            <div className="contact-card contact-card--wide">
              <MapPin size={26} />
              <span>Location</span>
              <strong>{siteContact.address}</strong>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;