import { Link } from 'react-router-dom';
import { ScaleIcon, TargetIcon, WrenchIcon, ClipboardIcon, MonitorIcon, BarChartIcon, CheckIcon, ArrowRightIcon } from '../components/Icons';
import Reveal from '../components/Reveal';
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
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <Reveal>
              <span className="kicker">Indian Academy of Accounts</span>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="hero__heading">Practical Training for<br />Commerce Graduates</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="hero__desc">
                Job-ready courses in Labour Laws, GST, TDS, and Bookkeeping in Tally Prime. Learn what employers actually need — from payroll compliance to return filing to financial reporting.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="hero__actions">
                <Link to="/bookkeeping" className="btn btn-primary">Explore Courses</Link>
                <Link to="/about" className="btn btn-outline">About IAA</Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <div className="hero__facts">
              {stats.map(s => (
                <div key={s.label} className="hero__fact">
                  <span className="hero__fact-value">{s.value}</span>
                  <span className="hero__fact-label">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Courses */}
      <section className="section" id="courses">
        <div className="container">
          <div className="home-split">
            <Reveal className="home-split__left">
              <span className="kicker">Curriculum</span>
              <h2>Four Core Training Programs</h2>
              <p>Each program is structured as a standalone training with clear objectives, practical exercises, and a skills checklist.</p>
            </Reveal>
            <div className="home-split__right">
              <Reveal stagger className="courses-grid">
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
                      View Course <ArrowRightIcon size={14} />
                    </div>
                  </Link>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Why IAA */}
      <section className="section" id="why">
        <div className="container">
          <div className="home-split">
            <Reveal className="home-split__left">
              <span className="kicker">Why IAA</span>
              <h2>Training Built Around Real Work</h2>
              <p>We focus on what you will actually do on the job — not theory for the sake of exams.</p>
            </Reveal>
            <div className="home-split__right">
              <Reveal stagger className="grid-3 why-grid">
                {whyIAA.map(w => (
                  <div key={w.title} className="why-card">
                    <w.Icon size={22} className="why-card__icon" />
                    <h4>{w.title}</h4>
                    <p>{w.desc}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* Skills Preview */}
      <section className="section skills-section">
        <div className="container">
          <Reveal className="section-header">
            <span className="kicker">Skills Gained</span>
            <h2>What You Will Be Able to Do</h2>
            <p>Across all four programs, you build a complete toolkit for accounting and compliance work.</p>
          </Reveal>
          <Reveal stagger className="skills-columns">
            <div className="skills-col">
              <h4>Compliance</h4>
              <ul>
                {['PF Registration & ECR Filing','ESI Registration & Filing','GST Return Filing (GSTR-1 & 3B)','TDS Deduction & Return Filing','Professional Tax Compliance','Bonus & Gratuity Calculation','Labour Law Audit Support','Contract Labour Compliance'].map(s => (
                  <li key={s}><CheckIcon size={14} className="check" /> {s}</li>
                ))}
              </ul>
            </div>
            <div className="skills-col">
              <h4>Software & Portals</h4>
              <ul>
                {['Tally Prime — Full Bookkeeping','GST Portal Navigation','TRACES & Income Tax Portal','PF & ESI Portals','E-Invoice Portal (IRN)','E-Way Bill Portal','Excel for Payroll & Reconciliation','Challan 281 Preparation'].map(s => (
                  <li key={s}><CheckIcon size={14} className="check" /> {s}</li>
                ))}
              </ul>
            </div>
            <div className="skills-col">
              <h4>Accounting & Audit</h4>
              <ul>
                {['Journal Entries & Ledger Scrutiny','Trial Balance Preparation','P&L and Balance Sheet','Bank Reconciliation','GST Reconciliation (GSTR-2B)','TDS Reconciliation with Form 26AS','Year-End Accounting & Closing','Audit Documentation & Support'].map(s => (
                  <li key={s}><CheckIcon size={14} className="check" /> {s}</li>
                ))}
              </ul>
            </div>
          </Reveal>
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
