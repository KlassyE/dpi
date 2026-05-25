import { quickFacts } from '../data/siteContent.js';

function QuickFacts() {
  return (
    <section className="quick-facts" aria-label="DPI Schools quick facts">
      {quickFacts.map((fact) => {
        const Icon = fact.icon;
        return (
          <div className="quick-fact" key={fact.text}>
            <Icon size={24} />
            <span>{fact.text}</span>
          </div>
        );
      })}
    </section>
  );
}

export default QuickFacts;