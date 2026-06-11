import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ScaleIcon, TargetIcon, WrenchIcon, ClipboardIcon, MonitorIcon, BarChartIcon } from '../components/Icons';
import SplitText from '../components/SplitText';
import heroGif from '../assets/dd2f98f2-1161-11ee-9d60-9b7172fc3fd5.gif';
import './Home.css';

const courses = [
  {
    path: '/labour-laws',
    number: '01',
    title: 'Labour Laws',
    desc: 'Master EPF, ESI, Gratuity, Bonus, Professional Tax, and full payroll compliance for Indian businesses.',
    tags: ['EPF & ESI', 'Payroll', 'Gratuity', 'POSH'],
    duration: '2 Days',
    modules: 20,
  },
  {
    path: '/gst',
    number: '02',
    title: 'GST',
    desc: 'Understand the complete GST framework — registration, ITC, GSTR-1, GSTR-3B, e-invoicing, and annual returns.',
    tags: ['GSTR-1', 'GSTR-3B', 'ITC', 'E-Invoice'],
    duration: '2 Days',
    modules: 13,
  },
  {
    path: '/tds',
    number: '03',
    title: 'TDS',
    desc: 'Learn TDS deduction, deposit, return filing, and certificate issuance under all major sections of the Income-tax Act.',
    tags: ['Sec 194J', 'Form 16', 'TRACES', 'Returns'],
    duration: '1–2 Days',
    modules: 15,
  },
  {
    path: '/bookkeeping',
    number: '04',
    title: 'Bookkeeping in Tally',
    desc: 'Record transactions, manage GST and TDS accounting, generate financial reports, and handle year-end closing in Tally Prime.',
    tags: ['Tally Prime', 'GST Entries', 'Bank Recon', 'P&L'],
    duration: '3 Days',
    modules: 16,
  },
];

const stats = [
  { value: '4', label: 'Specialized Courses' },
  { value: '64+', label: 'Training Modules' },
  { value: '100%', label: 'Practical Focus' },
  { value: '8 Days', label: 'Total Training' },
];

const whyIAA = [
  {
    Icon: ScaleIcon,
    title: 'Current & Compliant',
    desc: 'Content aligned with the latest amendments — new Labour Codes, GST portal updates, revised TDS sections, and current Tally Prime workflows.',
  },
  {
    Icon: TargetIcon,
    title: 'Commerce Graduate Focus',
    desc: 'Every module is designed for freshers entering accounting, taxation, audit, or finance — with real-world examples and job-ready skills.',
  },
  {
    Icon: WrenchIcon,
    title: 'Hands-On Practice',
    desc: 'Each course includes practical exercises — from processing payroll and filing returns to recording entries in Tally Prime.',
  },
  {
    Icon: ClipboardIcon,
    title: 'Structured Curriculum',
    desc: 'Clear learning objectives, module-by-module content, and a skills checklist so you know exactly what you will be able to do.',
  },
  {
    Icon: MonitorIcon,
    title: 'Portal & Software Skills',
    desc: 'Hands-on navigation of government portals — GST Portal, TRACES, PF Portal, ESI Portal, and Income Tax Portal — alongside Tally Prime.',
  },
  {
    Icon: BarChartIcon,
    title: 'Audit & Compliance Ready',
    desc: 'Understand registers, records, reconciliation, and audit support — skills that employers in CA firms and corporates actively seek.',
  },
];

export default function Home() {
  const statsTrackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const track = statsTrackRef.current;
      if (!track) return;
      const section = track.closest('.stats-bar');
      const rect = section.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - rect.top) / (window.innerHeight + rect.height);
      track.style.transform = `translateX(${(progress - 0.5) * -220}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__heading">
              <SplitText
                text="Practical Training for"
                tag="span"
                className="hero__heading-line"
                delay={60}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="left"
              />
              <SplitText
                text="Commerce Graduates"
                tag="span"
                className="hero__heading-line"
                delay={60}
                duration={0.8}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="left"
              />
            </h1>
            <p className="hero__desc">
              <SplitText
                text="Job-ready courses in Labour Laws, GST, TDS, and Bookkeeping in Tally Prime. Learn what employers actually need — from payroll compliance to return filing to financial reporting."
                tag="span"
                splitType="words"
                delay={35}
                duration={0.55}
                ease="power2.out"
                from={{ opacity: 0, y: 14 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="left"
              />
            </p>
            <div className="hero__actions">
              <Link to="/bookkeeping" className="btn btn-primary">Explore Courses</Link>
              <Link to="/about" className="btn btn-outline">About IAA</Link>
            </div>
          </div>
          <div className="hero__visual">
            <img src={heroGif} alt="" className="hero__gif" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-bar">
        <div className="stats-bar__track" ref={statsTrackRef}>
          {[...stats, ...stats, ...stats, ...stats].map((s, i) => (
            <div key={i} className="stats-bar__item">
              <span className="stats-bar__value">{s.value}</span>
              <span className="stats-bar__label">{s.label}</span>
              <span className="stats-bar__sep" aria-hidden="true">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="section" id="courses">
        <div className="container">
          <div className="home-split">
            <div className="home-split__left">
              <span className="badge">Curriculum</span>
              <h2>Four Core Training Programs</h2>
              <p>Each program is structured as a standalone training with clear objectives, practical exercises, and a skills checklist.</p>
            </div>
            <div className="home-split__right">
              <div className="courses-grid">
                {courses.map(c => (
                  <Link to={c.path} key={c.path} className="course-card">
                    <div className="course-card__head">
                      <span className="course-card__number">{c.number}</span>
                      <div className="course-card__meta">
                        <span className="tag">{c.duration}</span>
                        <span className="tag">{c.modules} Modules</span>
                      </div>
                    </div>
                    <h3 className="course-card__title">{c.title}</h3>
                    <p className="course-card__desc">{c.desc}</p>
                    <div className="course-card__tags">
                      {c.tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <div className="course-card__arrow">
                      View Course →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Why IAA */}
      <section className="section" id="why">
        <div className="container">
          <div className="home-split">
            <div className="home-split__left">
              <span className="badge">Why IAA</span>
              <h2>Training Built Around Real Work</h2>
              <p>We focus on what you will actually do on the job — not theory for the sake of exams.</p>
            </div>
            <div className="home-split__right">
              <div className="grid-3 why-grid">
                {whyIAA.map(w => (
                  <div key={w.title} className="why-card">
                    <w.Icon size={22} className="why-card__icon" />
                    <h4>{w.title}</h4>
                    <p>{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Skills Preview */}
      <section className="section skills-section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Skills Gained</span>
            <h2>What You Will Be Able to Do</h2>
            <p>Across all four programs, you build a complete toolkit for accounting and compliance work.</p>
          </div>
          <div className="skills-columns">
            <div className="skills-col">
              <h4>Compliance</h4>
              <ul>
                {['PF Registration & ECR Filing','ESI Registration & Filing','GST Return Filing (GSTR-1 & 3B)','TDS Deduction & Return Filing','Professional Tax Compliance','Bonus & Gratuity Calculation','Labour Law Audit Support','Contract Labour Compliance'].map(s => (
                  <li key={s}><span className="check">✓</span> {s}</li>
                ))}
              </ul>
            </div>
            <div className="skills-col">
              <h4>Software & Portals</h4>
              <ul>
                {['Tally Prime — Full Bookkeeping','GST Portal Navigation','TRACES & Income Tax Portal','PF & ESI Portals','E-Invoice Portal (IRN)','E-Way Bill Portal','Excel for Payroll & Reconciliation','Challan 281 Preparation'].map(s => (
                  <li key={s}><span className="check">✓</span> {s}</li>
                ))}
              </ul>
            </div>
            <div className="skills-col">
              <h4>Accounting & Audit</h4>
              <ul>
                {['Journal Entries & Ledger Scrutiny','Trial Balance Preparation','P&L and Balance Sheet','Bank Reconciliation','GST Reconciliation (GSTR-2B)','TDS Reconciliation with Form 26AS','Year-End Accounting & Closing','Audit Documentation & Support'].map(s => (
                  <li key={s}><span className="check">✓</span> {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start?</h2>
          <p>Join the Indian Academy of Accounts and build the skills that every accounting employer is looking for.</p>
          <div className="cta-section__actions">
            <Link to="/contact" className="btn btn-primary">Enroll Now</Link>
            <Link to="/about" className="btn btn-outline cta-section__outline">Learn About IAA</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
