import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import { navigationItems, siteContact } from '../data/siteContent.js';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="DPI Schools home">
        <img src="/assets/dpi-schools-logo.webp" alt="DPI Schools" />
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((currentState) => !currentState)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Primary navigation">
        {navigationItems.map((item) => (
          <NavLink key={item.path} to={item.path}>
            {item.label}
          </NavLink>
        ))}
        <a className="nav-call" href={`tel:${siteContact.phones[0].href}`}>
          <Phone size={18} />
          Admissions
        </a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <Link to="/" aria-label="DPI Schools home">
            <img src="/assets/dpi-schools-logo.webp" alt="DPI Schools" />
          </Link>
          <p>Divine Purpose Investments Schools forms godly, responsible learners for purpose-driven leadership and community transformation.</p>
        </div>
        <address>
          <strong>Contact</strong>
          {siteContact.phones.map((phone) => (
            <a href={`tel:${phone.href}`} key={phone.href}>
              <Phone size={18} />
              {phone.display}
            </a>
          ))}
          <a href={`mailto:${siteContact.email}`}>
            <Mail size={18} />
            {siteContact.email}
          </a>
          <span>
            <MapPin size={18} />
            {siteContact.address}
          </span>
        </address>
      </div>
    </footer>
  );
}

function SiteLayout() {
  return (
    <div className="app">
      <Header />
      <main className="page-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default SiteLayout;