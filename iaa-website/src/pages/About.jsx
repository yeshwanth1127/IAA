import { Link } from 'react-router-dom';
import { BookIcon, ShieldIcon, LaptopIcon, TrendingUpIcon } from '../components/Icons';
import './About.css';

const pillars = [
  { Icon: BookIcon, title: 'Curriculum First', desc: 'Every course is built from the ground up around what employers actually test on the job — not textbook theory.' },
  { Icon: ShieldIcon, title: 'Compliance Focused', desc: 'We teach to the current legal framework — latest Labour Codes, updated GST portal workflows, revised TDS provisions.' },
  { Icon: LaptopIcon, title: 'Portal & Software Trained', desc: 'Students leave with hands-on experience across all government portals and Tally Prime — tools they will use from day one.' },
  { Icon: TrendingUpIcon, title: 'Exam + Job Ready', desc: 'Our courses prepare graduates for both professional exams and real accounting roles in CA firms, corporates, and industry.' },
];

const courses = [
  { num: '01', title: 'Labour Laws & Payroll Compliance', path: '/labour-laws', days: 2, modules: 20 },
  { num: '02', title: 'GST — Goods & Services Tax', path: '/gst', days: 2, modules: 13 },
  { num: '03', title: 'TDS — Tax Deducted at Source', path: '/tds', days: '1–2', modules: 15 },
  { num: '04', title: 'Bookkeeping in Tally Prime', path: '/bookkeeping', days: 3, modules: 16 },
];

export default function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <span className="badge">About Us</span>
          <h1>Indian Academy of Accounts</h1>
          <p>We train commerce graduates to be job-ready in accounting, taxation, and compliance — with practical curriculum aligned to real workplace requirements.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro__text">
              <h2>Our Mission</h2>
              <p>Indian Academy of Accounts (IAA) was founded with one goal: bridge the gap between commerce education and what employers need on day one.</p>
              <p style={{marginTop:'12px'}}>Commerce graduates often finish their degrees with strong theoretical knowledge but limited practical exposure to the tools and processes they will encounter immediately in the workplace — PF portals, GST returns, TDS sections, Tally Prime. IAA fills that gap.</p>
              <p style={{marginTop:'12px'}}>Our four specialized programs cover Labour Laws, GST, TDS, and Bookkeeping in Tally Prime — delivered by practitioners, structured around real workflows, and assessed through practical exercises.</p>
            </div>
            <div className="about-intro__stats">
              <div className="about-stat"><span className="about-stat__num">4</span><span>Specialized Courses</span></div>
              <div className="about-stat"><span className="about-stat__num">64+</span><span>Training Modules</span></div>
              <div className="about-stat"><span className="about-stat__num">8 Days</span><span>Total Training</span></div>
              <div className="about-stat"><span className="about-stat__num">100%</span><span>Practical Focus</span></div>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge">Our Approach</span>
            <h2>How We Teach</h2>
          </div>
          <div className="grid-2">
            {pillars.map(p => (
              <div key={p.title} className="pillar-card">
                <p.Icon size={22} className="pillar-card__icon" />
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section" style={{background:'var(--gray-50)'}}>
        <div className="container">
          <div className="section-header">
            <span className="badge">Programs</span>
            <h2>Our Four Courses</h2>
          </div>
          <div className="about-courses">
            {courses.map(c => (
              <Link key={c.path} to={c.path} className="about-course-row">
                <span className="about-course-num">{c.num}</span>
                <span className="about-course-title">{c.title}</span>
                <span className="tag">{c.days} Days</span>
                <span className="tag">{c.modules} Modules</span>
                <span className="about-course-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <h2>Start Your Training</h2>
          <p>Enroll in one or all four programs and build the skills that accounting employers are actively looking for.</p>
          <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
}
