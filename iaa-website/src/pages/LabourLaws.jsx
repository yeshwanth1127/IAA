import { Link } from 'react-router-dom';
import CourseHero from '../components/CourseHero';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';
import './CoursePage.css';

const objectives = [
  'Understand the basic framework of Labour Laws in India',
  'Comply with employment-related statutory requirements',
  'Process payroll compliances accurately',
  'Calculate and deposit PF, ESI, Bonus, and Gratuity',
  'Maintain statutory registers and records',
  'Handle labour law inspections and audits',
  'Assist HR and Accounts teams in compliance',
];

const modules = [
  { n: '01', title: 'Introduction to Labour Laws', desc: 'Employer-employee-government relationship, objectives: fair wages, social security, safe working conditions.' },
  { n: '02', title: 'Labour Law Framework', desc: 'Overview of 29 traditional laws and the 4 new Labour Codes — Wages, Industrial Relations, OHS, and Social Security.' },
  { n: '03', title: 'Employee Classification', desc: 'Permanent, Probationer, Temporary, Contract Labour, and Trainee — definitions and implications.' },
  { n: '04', title: 'Employment Documentation', desc: 'Appointment letters, employee files, PAN, Aadhaar, bank details, PF nomination, ESI details.' },
  { n: '05', title: 'Payroll Fundamentals', desc: 'Earnings (Basic, HRA, Conveyance, Allowances) and deductions (PF, ESI, PT, TDS, Loan Recovery).' },
  { n: '06', title: 'EPF — Employees\' Provident Fund', desc: '12%+12% on Basic+DA, ECR filing, UAN generation, KYC update, PF returns. Deposit by 15th.' },
  { n: '07', title: 'ESI — Employees\' State Insurance', desc: '0.75% employee + 3.25% employer. Medical, sickness, maternity, disability benefits. Deposit by 15th.' },
  { n: '08', title: 'Payment of Bonus Act', desc: '8.33% minimum to 20% maximum bonus for establishments with 20+ employees within eligible salary limits.' },
  { n: '09', title: 'Payment of Gratuity Act', desc: 'Formula: (Last Drawn Salary × 15 × Years) ÷ 26. Minimum 5 years service. Exceptions for death/disability.' },
  { n: '10', title: 'Professional Tax', desc: 'State-specific levy. Employer must register, deduct monthly, pay, and file returns. Common in MH, KA, WB, TN.' },
  { n: '11', title: 'Shops & Establishments Act', desc: 'Working hours, weekly holiday, leave, overtime, and employee records for offices and commercial establishments.' },
  { n: '12', title: 'Maternity Benefits', desc: 'Up to 26 weeks paid leave for eligible women employees. No termination during maternity leave.' },
  { n: '13', title: 'POSH — Sexual Harassment Prevention', desc: 'Internal Committee (IC) mandatory for eligible establishments, regular awareness programs, defined complaint process.' },
  { n: '14', title: 'Contract Labour Compliance', desc: 'Labour license, wage monitoring, attendance records, PF and ESI compliance for principal employer and contractor.' },
  { n: '15', title: 'Registers and Records', desc: 'Employee Master, Attendance, Leave, Salary, Overtime, PF, ESI, Bonus, and Gratuity registers.' },
  { n: '16', title: 'Labour Law Audit', desc: 'Areas checked: employee files, payroll records, PF/ESI compliance, bonus payment, gratuity provision, contractor compliance.' },
  { n: '17', title: 'Payroll Compliance Calendar', desc: 'PF deposit: 15th. ESI deposit: 15th. PT: state-specific. TDS deposit: 7th. TDS returns: quarterly.' },
  { n: '18', title: 'Common Non-Compliance Issues', desc: 'Delayed PF/ESI deposits, incorrect UAN mapping, non-maintenance of registers, improper documentation.' },
  { n: '19', title: 'Practical Payroll Example', desc: 'Gross ₹50,000 (Basic ₹25K + HRA ₹10K + SA ₹15K). PF ₹3,000. PT ₹200. TDS as applicable. Net computed.' },
  { n: '20', title: 'Skills for Commerce Graduates', desc: 'PF/ESI filing, payroll processing, Tally Prime, portals (PF, ESI, IT), payroll verification, reconciliation, audit support.' },
];

const labourCodes = [
  { code: 'Labour Code on Wages, 2019', covers: 'Minimum wages, payment of wages, equal remuneration, bonus' },
  { code: 'Industrial Relations Code, 2020', covers: 'Trade unions, industrial disputes, standing orders' },
  { code: 'Occupational Safety, Health & Working Conditions Code, 2020', covers: 'Safety, health, working conditions across establishments' },
  { code: 'Social Security Code, 2020', covers: 'EPF, ESI, gratuity, maternity benefits, unorganised workers' },
];

const contributions = [
  { scheme: 'EPF', employee: '12% of Basic + DA', employer: '12% of Basic + DA', dueDate: '15th of following month' },
  { scheme: 'ESI', employee: '0.75% of wages', employer: '3.25% of wages', dueDate: '15th of following month' },
];

const schedule = [
  {
    day: 'Day 1',
    topics: ['Introduction to Labour Laws', 'Employee Lifecycle & Classification', 'Payroll Structure', 'EPF Compliance & Filing', 'ESI Compliance & Filing', 'Professional Tax'],
  },
  {
    day: 'Day 2',
    topics: ['Bonus Act & Calculation', 'Gratuity Act & Formula', 'Shops & Establishments Act', 'POSH Compliance', 'Contract Labour Compliance', 'Labour Law Audit & Payroll Case Studies'],
  },
];

export default function LabourLaws() {
  return (
    <div>
      <CourseHero
        badge="Course 01 of 04"
        title="Labour Laws & Payroll Compliance"
        subtitle="A complete practical training on Indian labour laws, payroll processing, EPF, ESI, Bonus, Gratuity, and statutory compliance for commerce graduates."
        tags={['EPF & ESI', 'Payroll', 'Bonus & Gratuity', 'Professional Tax', 'POSH', 'Contract Labour']}
        schedule="2-Day Program · 20 Modules"
      />

      <div className="course-body">
        <div className="container">
          <div className="course-layout">

            {/* Main Content */}
            <main className="course-main">

              {/* Objectives */}
              <section className="course-section">
                <h2>Training Objectives</h2>
                <p>At the end of this training, participants will be able to:</p>
                <ul className="checklist">
                  {objectives.map(o => <li key={o}><span className="check">✓</span>{o}</li>)}
                </ul>
              </section>

              {/* New Labour Codes */}
              <section className="course-section">
                <h2>New Labour Codes</h2>
                <p>The Government has consolidated 29 traditional labour laws into four comprehensive Labour Codes. Full implementation is awaited; many establishments continue to comply under the existing framework.</p>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Labour Code</th><th>Key Areas Covered</th></tr>
                    </thead>
                    <tbody>
                      {labourCodes.map(l => (
                        <tr key={l.code}><td><strong>{l.code}</strong></td><td>{l.covers}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* All 20 Modules */}
              <section className="course-section">
                <h2>All 20 Modules</h2>
                <ScrollStack
                  className="window-mode"
                  useWindowScroll={true}
                  itemDistance={80}
                  itemScale={0.018}
                  itemStackDistance={20}
                  stackPosition="18%"
                  scaleEndPosition="12%"
                  baseScale={0.9}
                  blurAmount={0.6}
                >
                  {modules.map(m => (
                    <ScrollStackItem key={m.n}>
                      <div className="mod-stack-inner">
                        <span className="mod-stack-num">{m.n}</span>
                        <div className="mod-stack-divider" />
                        <h4 className="mod-stack-title">{m.title}</h4>
                        <p className="mod-stack-desc">{m.desc}</p>
                      </div>
                    </ScrollStackItem>
                  ))}
                </ScrollStack>
              </section>

              {/* Contribution Rates */}
              <section className="course-section">
                <h2>EPF & ESI Contribution Rates</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Scheme</th><th>Employee</th><th>Employer</th><th>Deposit Due Date</th></tr>
                    </thead>
                    <tbody>
                      {contributions.map(c => (
                        <tr key={c.scheme}>
                          <td><strong>{c.scheme}</strong></td>
                          <td>{c.employee}</td>
                          <td>{c.employer}</td>
                          <td>{c.dueDate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Gratuity Formula */}
              <section className="course-section">
                <h2>Gratuity Formula</h2>
                <div className="formula-box">
                  <p className="formula-label">Gratuity =</p>
                  <p className="formula-text">( Last Drawn Salary × 15 × Years of Service ) ÷ 26</p>
                </div>
                <div className="example-box">
                  <h4>Example</h4>
                  <p>Last Drawn Salary: ₹50,000 &nbsp;|&nbsp; Service: 10 Years</p>
                  <p><strong>Gratuity = ₹50,000 × 15 × 10 ÷ 26 = ₹2,88,462</strong></p>
                </div>
              </section>

              {/* Practical Payroll Example */}
              <section className="course-section">
                <h2>Practical Payroll Example</h2>
                <div className="two-col-boxes">
                  <div className="info-box">
                    <h4>Earnings</h4>
                    <ul className="detail-list">
                      <li><span>Basic Salary</span><strong>₹25,000</strong></li>
                      <li><span>HRA</span><strong>₹10,000</strong></li>
                      <li><span>Special Allowance</span><strong>₹15,000</strong></li>
                      <li className="total"><span>Gross Salary</span><strong>₹50,000</strong></li>
                    </ul>
                  </div>
                  <div className="info-box">
                    <h4>Deductions</h4>
                    <ul className="detail-list">
                      <li><span>PF (Employee 12%)</span><strong>₹3,000</strong></li>
                      <li><span>Professional Tax</span><strong>₹200</strong></li>
                      <li><span>TDS (Income Tax)</span><strong>As applicable</strong></li>
                      <li className="total"><span>Net Salary</span><strong>Gross − Deductions</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 2-Day Schedule */}
              <section className="course-section">
                <h2>2-Day Training Schedule</h2>
                <div className="schedule-grid">
                  {schedule.map(d => (
                    <div key={d.day} className="schedule-card">
                      <div className="schedule-card__day">{d.day}</div>
                      <ul>
                        {d.topics.map(t => <li key={t}><span className="bullet">›</span>{t}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

            </main>

            {/* Sidebar */}
            <aside className="course-sidebar">
              <div className="sidebar-card">
                <h4>Course Summary</h4>
                <ul className="sidebar-list">
                  <li><span>Duration</span><strong>2 Days</strong></li>
                  <li><span>Modules</span><strong>20</strong></li>
                  <li><span>Focus</span><strong>Labour Law Compliance</strong></li>
                  <li><span>Level</span><strong>Beginner–Intermediate</strong></li>
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{width:'100%',justifyContent:'center',marginTop:'16px'}}>Enroll in This Course</Link>
              </div>

              <div className="sidebar-card">
                <h4>Skills Gained</h4>
                <ul className="skill-tags">
                  {['PF Registration & ECR Filing','ESI Registration & Filing','Payroll Processing','Bonus Calculation','Gratuity Calculation','Professional Tax Compliance','Labour Law Audit Support','Payroll Verification','PF Reconciliation','ESI Reconciliation'].map(s => (
                    <li key={s}><span className="check">✓</span>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Software Covered</h4>
                <ul className="skill-tags">
                  {['Excel','Tally Prime','Payroll Software','PF Portal','ESI Portal','Income Tax Portal'].map(s => (
                    <li key={s}><span className="dot">·</span>{s}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-nav">
                <p>Other Courses</p>
                <Link to="/gst">GST →</Link>
                <Link to="/tds">TDS →</Link>
                <Link to="/bookkeeping">Bookkeeping →</Link>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}
