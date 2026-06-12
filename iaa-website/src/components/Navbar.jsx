import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Indian acadamy of accounts.svg';
import './Navbar.css';

const courses = [
  { label: 'Labour Laws', path: '/labour-laws' },
  { label: 'GST', path: '/gst' },
  { label: 'TDS', path: '/tds' },
  { label: 'Bookkeeping in Tally', path: '/bookkeeping' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close menus when the route changes (state adjustment during render,
  // per https://react.dev/learn/you-might-not-need-an-effect)
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          <img src={logo} alt="Indian Academy of Accounts" className="navbar__logo" />
        </Link>

        <nav className={`navbar__nav${menuOpen ? ' navbar__nav--open' : ''}`}>
          <Link to="/" className={`navbar__link${location.pathname === '/' ? ' navbar__link--active' : ''}`}>Home</Link>

          <div
            className={`navbar__dropdown${dropdownOpen ? ' navbar__dropdown--open' : ''}`}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`navbar__link navbar__link--dropdown${courses.some(c => location.pathname === c.path) ? ' navbar__link--active' : ''}`}
              onClick={() => setDropdownOpen(v => !v)}
            >
              Courses
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="navbar__dropdown-menu">
              {courses.map(c => (
                <Link key={c.path} to={c.path} className={`navbar__dropdown-item${location.pathname === c.path ? ' active' : ''}`}>
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className={`navbar__link${location.pathname === '/about' ? ' navbar__link--active' : ''}`}>About</Link>
          <Link to="/contact" className={`navbar__link${location.pathname === '/contact' ? ' navbar__link--active' : ''}`}>Contact</Link>
        </nav>

        <Link to="/contact" className="btn btn-primary navbar__cta">Enroll Now</Link>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
