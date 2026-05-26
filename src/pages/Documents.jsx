import { ArrowRight, FileText } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionIntro from '../components/SectionIntro.jsx';
import { downloads } from '../data/siteContent.js';

function Documents() {
  return (
    <>
      <PageHero eyebrow="Documents" title="School information for families" image="/assets/library-reading.webp">
        <p>Download the core DPI materials used to prepare admissions information, school overview, nursery guidance, and community updates.</p>
      </PageHero>

      <section className="section downloads">
        <div className="section__inner">
          <SectionIntro eyebrow="Downloads" title="Current school materials">
            <p>These files are organized with clear public filenames so families can open and share the right information quickly.</p>
          </SectionIntro>
          <div className="download-grid">
            {downloads.map((download) => (
              <a className="download-card" href={download.href} key={download.href}>
                <FileText size={28} />
                <h3>{download.title}</h3>
                <p>{download.description}</p>
                <span>
                  Open document
                  <ArrowRight size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Documents;