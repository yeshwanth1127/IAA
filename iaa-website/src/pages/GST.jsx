import { Link } from 'react-router-dom';
import CourseHero from '../components/CourseHero';
import ModuleTimeline from '../components/ModuleTimeline';
import Reveal from '../components/Reveal';
import { CheckIcon, ArrowRightIcon } from '../components/Icons';
import './CoursePage.css';

const gstTypes = [
  { type: 'CGST', full: 'Central GST', when: 'Intra-state supply' },
  { type: 'SGST', full: 'State GST', when: 'Intra-state supply' },
  { type: 'IGST', full: 'Integrated GST', when: 'Inter-state supply' },
  { type: 'UTGST', full: 'Union Territory GST', when: 'Supply within Union Territories' },
];

const gstRates = [
  { rate: '0%', applies: 'Essential items — food grains, fresh vegetables, milk' },
  { rate: '5%', applies: 'Necessities — edible oils, sugar, spices, tea, coffee' },
  { rate: '12%', applies: 'Standard goods/services — computers, processed foods' },
  { rate: '18%', applies: 'Most goods and services — professional services, IT, hotels' },
  { rate: '28%', applies: 'Luxury and demerit goods — automobiles, pan masala, tobacco' },
];

const keyTerms = [
  { term: 'GST', meaning: 'Goods and Services Tax' },
  { term: 'ITC', meaning: 'Input Tax Credit' },
  { term: 'HSN', meaning: 'Harmonized System of Nomenclature (goods classification)' },
  { term: 'SAC', meaning: 'Service Accounting Code (services classification)' },
  { term: 'GSTIN', meaning: 'GST Identification Number (15-digit)' },
  { term: 'IRN', meaning: 'Invoice Reference Number (e-invoicing)' },
  { term: 'EWB', meaning: 'E-Way Bill (for goods movement)' },
  { term: 'GSTR-2B', meaning: 'Auto-drafted ITC statement from supplier filings' },
];

const modulesDay1 = [
  { n: '01', title: 'Fundamentals of GST', desc: 'Destination-based indirect tax replacing VAT, Excise, and Service Tax. Introduced 1 July 2017. Objectives: eliminate cascading, create unified market, improve compliance.' },
  { n: '02', title: 'GST Portal Navigation', desc: 'Home page, login, dashboard, User Services menu, Services menu structure — complete portal orientation.' },
  { n: '03', title: 'GST Registration', desc: 'New registration application, TRN generation, PAN validation, Aadhaar authentication, ARN tracking, certificate download.' },
  { n: '04', title: 'Profile Management', desc: 'View GSTIN profile, amendment application, additional place of business, authorized signatory details.' },
  { n: '05', title: 'Invoicing & E-Invoicing', desc: 'E-Invoice portal login, IRN generation, IRN cancellation, QR code display, invoice upload process. Mandatory above notified turnover.' },
  { n: '06', title: 'E-Way Bill', desc: 'Portal home, generate new EWB, update vehicle number, consolidated EWB, EWB reports. Required for goods movement above ₹50,000.' },
];

const modulesDay2 = [
  { n: '07', title: 'GSTR-1 — Outward Supplies', desc: 'Prepare online, upload B2B invoices, B2CL/B2CS screens, credit note reporting, summary generation, file GSTR-1.' },
  { n: '08', title: 'GSTR-3B — Summary Return', desc: 'Tax liability screen, ITC claim screen, offset liability, file return with DSC/EVC. Monthly self-assessment return.' },
  { n: '09', title: 'ITC Reconciliation', desc: 'GSTR-2B download, auto-drafted ITC statement, supplier-wise reconciliation, mismatch analysis and resolution.' },
  { n: '10', title: 'Electronic Ledgers', desc: 'Electronic Cash Ledger, Electronic Credit Ledger, Electronic Liability Register — understand and navigate each.' },
  { n: '11', title: 'Refunds', desc: 'Refund application process, export refund, LUT filing for zero-rated supplies, refund status tracking.' },
  { n: '12', title: 'Notices & Litigation', desc: 'View notices and orders, reply to notices, DRC-01, DRC-03 (voluntary payment), appeal filing screens.' },
  { n: '13', title: 'Annual Compliance — GSTR-9', desc: 'Annual return dashboard, GSTR-9 preparation, reconciliation statement overview, common discrepancies.' },
];

const complianceCycle = [
  { step: 'Registration', desc: 'Obtain GSTIN from GST Portal' },
  { step: 'Tax Invoice', desc: 'Issue compliant tax invoices with HSN/SAC' },
  { step: 'E-Invoice', desc: 'Generate IRN for applicable turnover' },
  { step: 'E-Way Bill', desc: 'Generate EWB for goods movement' },
  { step: 'GSTR-1', desc: 'File outward supply details monthly/quarterly' },
  { step: 'GSTR-3B', desc: 'File summary return and pay tax liability' },
  { step: 'Annual Return', desc: 'File GSTR-9 reconciling the entire year' },
];

const itcFlow = [
  { step: '1', title: 'Purchase from Vendor', desc: 'You pay GST on your purchases' },
  { step: '2', title: 'Vendor Files GSTR-1', desc: 'Vendor uploads invoice in their GSTR-1' },
  { step: '3', title: 'Reflects in GSTR-2B', desc: 'System auto-populates your ITC statement' },
  { step: '4', title: 'Reconciliation', desc: 'Match your books with GSTR-2B data' },
  { step: '5', title: 'ITC Availment', desc: 'Claim eligible ITC in GSTR-3B' },
];

export default function GST() {
  return (
    <div>
      <CourseHero
        badge="Course 02 of 04"
        title="GST — Goods & Services Tax"
        subtitle="Comprehensive training on GST fundamentals, portal navigation, registration, ITC, return filing, e-invoicing, e-way bills, and annual compliance."
        tags={['Registration', 'GSTR-1 & 3B', 'ITC Reconciliation', 'E-Invoice', 'E-Way Bill', 'GSTR-9']}
        schedule="2-Day Program · 13 Modules"
      />

      <div className="course-body">
        <div className="container">
          <div className="course-layout">

            <main className="course-main">

              {/* What is GST */}
              <section className="course-section">
                <h2>What is GST?</h2>
                <p>GST (Goods and Services Tax) is a <strong>destination-based indirect tax</strong> levied on the supply of goods and services in India. Introduced on <strong>1 July 2017</strong>, it replaced multiple indirect taxes including VAT, Excise Duty, Central Sales Tax, and Service Tax — simplifying India's tax structure into one unified framework.</p>
                <div className="alert-box" style={{marginTop:'16px'}}>
                  <strong>Key Principle:</strong> Tax revenue goes to the state where goods or services are <em>consumed</em>, not where they are produced.
                </div>
              </section>

              {/* Types of GST */}
              <section className="course-section">
                <h2>Types of GST</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Type</th><th>Full Form</th><th>Applicable When</th></tr>
                    </thead>
                    <tbody>
                      {gstTypes.map(g => (
                        <tr key={g.type}>
                          <td><strong>{g.type}</strong></td>
                          <td>{g.full}</td>
                          <td>{g.when}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="example-box" style={{marginTop:'16px'}}>
                  <h4>Examples</h4>
                  <p>Sale within Maharashtra → <strong>CGST + SGST</strong></p>
                  <p>Sale from Maharashtra to Karnataka → <strong>IGST</strong></p>
                </div>
              </section>

              {/* GST Rates */}
              <section className="course-section">
                <h2>GST Rate Structure</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Rate</th><th>Applies To</th></tr>
                    </thead>
                    <tbody>
                      {gstRates.map(r => (
                        <tr key={r.rate}>
                          <td><strong>{r.rate}</strong></td>
                          <td>{r.applies}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* ITC */}
              <section className="course-section">
                <h2>Input Tax Credit (ITC)</h2>
                <p>ITC is the mechanism that prevents double taxation. A registered taxpayer can claim credit for GST paid on purchases and use it to offset GST payable on sales.</p>
                <div className="formula-box">
                  <p className="formula-label">GST Payable to Government</p>
                  <p className="formula-text">GST on Sales − GST Paid on Purchases (ITC)</p>
                </div>
                <div className="example-box">
                  <h4>Example</h4>
                  <p>GST paid on purchases: ₹10,000</p>
                  <p>GST collected on sales: ₹15,000</p>
                  <p><strong>GST payable = ₹15,000 − ₹10,000 = ₹5,000</strong></p>
                </div>
                <div style={{marginTop:'24px'}}>
                  <h3 style={{marginBottom:'16px',fontSize:'1rem'}}>ITC Flow</h3>
                  <Reveal stagger className="flow-steps">
                    {itcFlow.map(s => (
                      <div key={s.step} className="flow-step">
                        <div className="flow-step__num">{s.step}</div>
                        <div><h4>{s.title}</h4><p>{s.desc}</p></div>
                      </div>
                    ))}
                  </Reveal>
                </div>
              </section>

              {/* GST Formula */}
              <section className="course-section">
                <h2>GST Calculation Formula</h2>
                <div className="formula-box">
                  <p className="formula-label">GST Amount</p>
                  <p className="formula-text">= Taxable Value × GST Rate</p>
                </div>
                <div className="example-box">
                  <h4>Example — 18% GST</h4>
                  <p>Taxable Value: ₹10,000</p>
                  <p>GST = ₹10,000 × 18% = <strong>₹1,800</strong></p>
                  <p>Total Invoice Value = ₹10,000 + ₹1,800 = <strong>₹11,800</strong></p>
                </div>
              </section>

              {/* All 13 Modules */}
              <section className="course-section">
                <h2>All 13 Modules</h2>
                <ModuleTimeline modules={[...modulesDay1, ...modulesDay2]} />
              </section>

              {/* Compliance Cycle */}
              <section className="course-section">
                <h2>GST Compliance Cycle</h2>
                <div className="compliance-cycle">
                  {complianceCycle.map((c, i) => (
                    <div key={c.step} className="cycle-step">
                      <div className="cycle-step__arrow">
                        <span className="cycle-step__num">{i + 1}</span>
                        <div>
                          <h4>{c.step}</h4>
                          <p>{c.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Key Terms */}
              <section className="course-section">
                <h2>Key Terms</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Term</th><th>Meaning</th></tr>
                    </thead>
                    <tbody>
                      {keyTerms.map(k => (
                        <tr key={k.term}>
                          <td><strong>{k.term}</strong></td>
                          <td>{k.meaning}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

            </main>

            {/* Sidebar */}
            <aside className="course-sidebar">
              <div className="sidebar-card">
                <h4>Course Summary</h4>
                <ul className="sidebar-list">
                  <li><span>Duration</span><strong>2 Days</strong></li>
                  <li><span>Modules</span><strong>13</strong></li>
                  <li><span>Focus</span><strong>GST Compliance</strong></li>
                  <li><span>Level</span><strong>Beginner–Intermediate</strong></li>
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{width:'100%',justifyContent:'center',marginTop:'16px'}}>Enroll in This Course</Link>
              </div>

              <div className="sidebar-card">
                <h4>Skills Gained</h4>
                <ul className="skill-tags">
                  {['GST Registration & Amendments','GSTR-1 Filing (B2B/B2CS)','GSTR-3B Filing & Tax Payment','ITC Reconciliation (GSTR-2B)','E-Invoice (IRN Generation)','E-Way Bill Generation','Refund Application','Reply to GST Notices','GSTR-9 Annual Return'].map(s => (
                    <li key={s}><CheckIcon size={13} className="check" />{s}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Portals Covered</h4>
                <ul className="skill-tags">
                  {['GST Portal (gst.gov.in)','E-Invoice Portal','E-Way Bill Portal'].map(s => (
                    <li key={s}><span className="dot" aria-hidden="true" />{s}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-nav">
                <p>Other Courses</p>
                <Link to="/labour-laws">Labour Laws <ArrowRightIcon size={13} /></Link>
                <Link to="/tds">TDS <ArrowRightIcon size={13} /></Link>
                <Link to="/bookkeeping">Bookkeeping <ArrowRightIcon size={13} /></Link>
              </div>
            </aside>

          </div>
        </div>
      </div>

      <style>{`
        .compliance-cycle {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: var(--gray-200);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }
        .cycle-step { background: var(--white); padding: 14px 20px; transition: background 0.15s; }
        .cycle-step:hover { background: var(--gray-50); }
        .cycle-step__arrow { display: flex; align-items: flex-start; gap: 14px; }
        .cycle-step__num {
          width: 24px; height: 24px; border-radius: 50%;
          background: var(--gray-900); color: var(--white);
          font-size: 0.7rem; font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 2px;
        }
        .cycle-step h4 { font-size: 0.9rem; margin-bottom: 2px; }
        .cycle-step p { font-size: 0.8rem; color: var(--gray-500); }
      `}</style>
    </div>
  );
}
