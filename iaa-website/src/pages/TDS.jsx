import { Link } from 'react-router-dom';
import CourseHero from '../components/CourseHero';
import Reveal from '../components/Reveal';
import { CheckIcon, ArrowRightIcon } from '../components/Icons';
import './CoursePage.css';

const sections = [
  { sec: '192', nature: 'Salary', employee: 'Individual', rate: 'Slab Rate', threshold: 'Taxable income > basic exemption', notes: 'Average income tax rate on estimated annual income' },
  { sec: '194A', nature: 'Interest (other than securities)', employee: 'Any', rate: '10%', threshold: 'As prescribed', notes: 'Bank deposits, company deposits' },
  { sec: '194C', nature: 'Contractor / Sub-contractor', employee: 'Individual/HUF: 1% | Others: 2%', rate: '1% / 2%', threshold: '₹30,000 per payment or ₹1,00,000 per year', notes: 'Labour, work, transport contracts' },
  { sec: '194H', nature: 'Commission or Brokerage', employee: 'Any', rate: '2%', threshold: '₹15,000 p.a.', notes: 'Sales commission, brokerage' },
  { sec: '194I', nature: 'Rent — Land/Building/Furniture', employee: 'Any', rate: '10%', threshold: '₹2,40,000 p.a.', notes: '' },
  { sec: '194I', nature: 'Rent — Plant & Machinery', employee: 'Any', rate: '2%', threshold: '₹2,40,000 p.a.', notes: '' },
  { sec: '194J', nature: 'Professional / Technical Fees', employee: 'Any', rate: '10%', threshold: '₹30,000 p.a.', notes: 'CA, lawyers, architects, consultants, technical services' },
  { sec: '194Q', nature: 'Purchase of Goods', employee: 'Buyer', rate: '0.1%', threshold: 'Buyer turnover > ₹10 cr in preceding year; payment > ₹50 lakh', notes: '' },
];

const lifecycle = [
  { step: '1', title: 'Identify Nature of Payment', desc: 'Salary, professional fees, rent, interest, contractor payments, commission, etc.' },
  { step: '2', title: 'Determine Applicable Section', desc: 'Match the payment type to the correct TDS section under the Income-tax Act.' },
  { step: '3', title: 'Check Threshold Limit', desc: 'Verify whether the payment exceeds the prescribed threshold — TDS applies only above it.' },
  { step: '4', title: 'Deduct Tax', desc: 'Apply the prescribed TDS rate on the applicable amount (not on GST component).' },
  { step: '5', title: 'Deposit TDS', desc: 'Remit to government via Challan 281 within the prescribed due date.' },
  { step: '6', title: 'File TDS Return', desc: 'File quarterly TDS returns (24Q/26Q/27Q) with deductee details.' },
  { step: '7', title: 'Issue TDS Certificate', desc: 'Provide Form 16 (salary) or Form 16A (non-salary) to deductee.' },
];

const returns = [
  { form: '24Q', purpose: 'TDS on Salary', q: 'Q1: 31 Jul | Q2: 31 Oct | Q3: 31 Jan | Q4: 31 May' },
  { form: '26Q', purpose: 'TDS on Domestic Non-Salary Payments', q: 'Q1: 31 Jul | Q2: 31 Oct | Q3: 31 Jan | Q4: 31 May' },
  { form: '27Q', purpose: 'TDS on Payments to Non-Residents', q: 'Q1: 31 Jul | Q2: 31 Oct | Q3: 31 Jan | Q4: 31 May' },
  { form: '27EQ', purpose: 'TCS (Tax Collected at Source)', q: 'Q1: 15 Jul | Q2: 15 Oct | Q3: 15 Jan | Q4: 15 May' },
];

const penalties = [
  { type: 'Interest — Failure to Deduct', rate: '1% per month or part thereof', section: 'Section 201(1A)', note: 'From date TDS was deductible to date actually deducted' },
  { type: 'Interest — Failure to Deposit', rate: '1.5% per month or part thereof', section: 'Section 201(1A)', note: 'From date TDS was deducted to date actually deposited' },
  { type: 'Late Filing Fee', rate: '₹200 per day', section: 'Section 234E', note: 'Subject to the amount of TDS (cannot exceed TDS amount)' },
  { type: 'Penalty — Late/Incorrect Filing', rate: '₹10,000 to ₹1,00,000', section: 'Section 271H', note: 'For late filing or filing with incorrect information' },
];

const mistakes = [
  'Wrong section selection for the payment type',
  'Ignoring threshold limits — deducting when not required',
  'Deducting TDS on the GST component of invoice',
  'Late deposit of TDS — incurring interest',
  'Incorrect or missing PAN — resulting in 20% TDS',
  'Mismatch between TDS returns and books of accounts',
  'Failure to reconcile with Form 26AS / AIS',
  'Ignoring lower deduction certificates from deductees',
];

const nonResidentSections = [
  { sec: '195', desc: 'Payments to non-residents (other than salary)' },
  { sec: '194E', desc: 'Payments to non-resident sports associations' },
  { sec: '194LB', desc: 'Interest from infrastructure debt fund' },
  { sec: '194LC', desc: 'Interest on money borrowed in foreign currency' },
];

export default function TDS() {
  return (
    <div>
      <CourseHero
        badge="Course 03 of 04"
        title="TDS — Tax Deducted at Source"
        subtitle="Complete training on TDS provisions under the Income-tax Act — deduction, deposit, return filing, certificate issuance, and reconciliation across all major sections."
        tags={['Section 194J', 'Section 192', 'Form 16', 'TRACES', 'Challan 281', 'Quarterly Returns']}
        schedule="1–2 Day Program · 15 Sessions"
      />

      <div className="course-body">
        <div className="container">
          <div className="course-layout">

            <main className="course-main">

              {/* What is TDS */}
              <section className="course-section">
                <h2>What is TDS?</h2>
                <p>Tax Deducted at Source (TDS) is a mechanism under <strong>Chapter XVII-B of the Income-tax Act, 1961</strong> whereby the payer deducts tax at the time of making specified payments and remits it to the Government on behalf of the recipient.</p>
                <div className="grid-3" style={{gap:'12px',marginTop:'20px'}}>
                  {['Ensure regular tax collection','Prevent tax evasion','Widen the tax base','Steady government revenue flow','Advance collection of tax'].map(o => (
                    <div key={o} className="alert-box">{o}</div>
                  ))}
                </div>
                <div style={{marginTop:'16px'}} className="alert-box">
                  <strong>TAN:</strong> Every deductor must obtain a Tax Deduction and Collection Account Number (10-digit: e.g., ABCD12345E). Without PAN of deductee, TDS is deducted at 20% or the applicable rate, whichever is higher (Section 206AA).
                </div>
              </section>

              {/* TDS Lifecycle */}
              <section className="course-section">
                <h2>TDS Lifecycle — 7 Steps</h2>
                <Reveal stagger className="flow-steps">
                  {lifecycle.map(s => (
                    <div key={s.step} className="flow-step">
                      <div className="flow-step__num">{s.step}</div>
                      <div><h4>{s.title}</h4><p>{s.desc}</p></div>
                    </div>
                  ))}
                </Reveal>
              </section>

              {/* TDS Sections */}
              <section className="course-section">
                <h2>Important TDS Sections & Rates</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Section</th><th>Nature of Payment</th><th>Rate</th><th>Threshold</th></tr>
                    </thead>
                    <tbody>
                      {sections.map((s, i) => (
                        <tr key={i}>
                          <td><strong>{s.sec}</strong></td>
                          <td>
                            {s.nature}
                            {s.notes && <><br/><span style={{fontSize:'0.75rem',color:'var(--gray-400)'}}>{s.notes}</span></>}
                          </td>
                          <td><strong>{s.rate}</strong></td>
                          <td style={{fontSize:'0.8rem'}}>{s.threshold}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Time of Deduction */}
              <section className="course-section">
                <h2>Time of TDS Deduction</h2>
                <p>TDS must be deducted at the <strong>earlier of</strong> the following two events:</p>
                <div className="two-col-boxes" style={{marginTop:'16px'}}>
                  <div className="info-box">
                    <h4>Credit</h4>
                    <p style={{fontSize:'0.9rem',color:'var(--gray-700)'}}>When the expense is credited/booked in books of accounts.</p>
                  </div>
                  <div className="info-box">
                    <h4>Payment</h4>
                    <p style={{fontSize:'0.9rem',color:'var(--gray-700)'}}>When actual payment is made to the deductee.</p>
                  </div>
                </div>
                <div className="example-box" style={{marginTop:'16px'}}>
                  <h4>Example</h4>
                  <p>Professional fees booked on <strong>31 March</strong> → paid on <strong>20 April</strong></p>
                  <p>TDS must be deducted on <strong>31 March</strong> (date of booking, which is earlier).</p>
                </div>
              </section>

              {/* Deposit Due Dates */}
              <section className="course-section">
                <h2>TDS Deposit Due Dates</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Deductor Type</th><th>Month</th><th>Due Date</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>Non-Government</td><td>April – February</td><td><strong>7th of following month</strong></td></tr>
                      <tr><td>Non-Government</td><td>March</td><td><strong>30th April</strong></td></tr>
                      <tr><td>Government</td><td>All months (with challan)</td><td><strong>7th of following month</strong></td></tr>
                      <tr><td>Government</td><td>All months (without challan)</td><td><strong>Same day</strong></td></tr>
                    </tbody>
                  </table>
                </div>
                <div className="example-box" style={{marginTop:'16px'}}>
                  <h4>Example</h4>
                  <p>TDS deducted in June → Deposit by <strong>7th July</strong></p>
                  <p>TDS deducted in March → Deposit by <strong>30th April</strong></p>
                </div>
              </section>

              {/* TDS Returns */}
              <section className="course-section">
                <h2>TDS Returns</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Form</th><th>Purpose</th><th>Quarterly Due Dates</th></tr>
                    </thead>
                    <tbody>
                      {returns.map(r => (
                        <tr key={r.form + r.purpose}>
                          <td><strong>{r.form}</strong></td>
                          <td>{r.purpose}</td>
                          <td style={{fontSize:'0.8rem'}}>{r.q}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* TDS Certificates */}
              <section className="course-section">
                <h2>TDS Certificates</h2>
                <div className="two-col-boxes">
                  <div className="info-box">
                    <h4>Form 16</h4>
                    <ul className="detail-list">
                      <li><span>Issued for</span><strong>Salary Income</strong></li>
                      <li><span>Issued by</span><strong>Employer</strong></li>
                      <li><span>Due Date</span><strong>15th June</strong></li>
                      <li><span>Period</span><strong>Annual (April–March)</strong></li>
                    </ul>
                  </div>
                  <div className="info-box">
                    <h4>Form 16A</h4>
                    <ul className="detail-list">
                      <li><span>Issued for</span><strong>Non-Salary Payments</strong></li>
                      <li><span>Issued by</span><strong>Deductor</strong></li>
                      <li><span>Due Date</span><strong>15 days after return due date</strong></li>
                      <li><span>Period</span><strong>Quarterly</strong></li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Practical Examples */}
              <section className="course-section">
                <h2>Practical Examples</h2>

                <div className="example-box" style={{marginBottom:'16px'}}>
                  <h4>Example 1 — Professional Fees (Sec 194J)</h4>
                  <p>Invoice from CA Firm: ₹1,18,000 (Professional Fees ₹1,00,000 + GST ₹18,000)</p>
                  <p>TDS u/s 194J = ₹1,00,000 × 10% = <strong>₹10,000</strong></p>
                  <p>Amount Payable = ₹1,18,000 − ₹10,000 = <strong>₹1,08,000</strong></p>
                  <p style={{marginTop:'8px',fontSize:'0.8rem',color:'var(--gray-400)'}}>Note: TDS is deducted only on the base amount, NOT on the GST portion.</p>
                </div>

                <div className="example-box">
                  <h4>Example 2 — Rent (Sec 194I)</h4>
                  <p>Monthly Rent: ₹1,00,000 → Annual Rent: ₹12,00,000</p>
                  <p>TDS u/s 194I = ₹12,00,000 × 10% = <strong>₹1,20,000</strong></p>
                  <p>Monthly TDS deduction = <strong>₹10,000 per month</strong></p>
                </div>
              </section>

              {/* Consequences */}
              <section className="course-section">
                <h2>Consequences of Non-Compliance</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Default</th><th>Consequence</th><th>Section</th></tr>
                    </thead>
                    <tbody>
                      {penalties.map(p => (
                        <tr key={p.type}>
                          <td><strong>{p.type}</strong></td>
                          <td>{p.rate}<br/><span style={{fontSize:'0.75rem',color:'var(--gray-400)'}}>{p.note}</span></td>
                          <td>{p.section}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Common Mistakes */}
              <section className="course-section">
                <h2>Common Mistakes by Accountants</h2>
                <ul className="key-list">
                  {mistakes.map(m => <li key={m}>{m}</li>)}
                </ul>
              </section>

              {/* Non-Residents */}
              <section className="course-section">
                <h2>TDS on Non-Residents</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Section</th><th>Applicability</th></tr>
                    </thead>
                    <tbody>
                      {nonResidentSections.map(s => (
                        <tr key={s.sec}><td><strong>Sec {s.sec}</strong></td><td>{s.desc}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="alert-box" style={{marginTop:'16px'}}>
                  <strong>Important:</strong> DTAA (Double Tax Avoidance Agreement) and Tax Residency Certificates (TRC) can reduce withholding rates. Always verify applicable DTAA before deducting TDS on non-resident payments.
                </div>
              </section>

            </main>

            {/* Sidebar */}
            <aside className="course-sidebar">
              <div className="sidebar-card">
                <h4>Course Summary</h4>
                <ul className="sidebar-list">
                  <li><span>Duration</span><strong>1–2 Days</strong></li>
                  <li><span>Sessions</span><strong>15</strong></li>
                  <li><span>Focus</span><strong>TDS Compliance</strong></li>
                  <li><span>Level</span><strong>Beginner–Intermediate</strong></li>
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{width:'100%',justifyContent:'center',marginTop:'16px'}}>Enroll in This Course</Link>
              </div>

              <div className="sidebar-card">
                <h4>Skills Gained</h4>
                <ul className="skill-tags">
                  {['TAN Registration','TDS Deduction Workings','Challan 281 Preparation','TDS Return Filing','Form 16/16A Download','Form 26AS Reconciliation','Vendor Ledger Review','Handling TDS Notices'].map(s => (
                    <li key={s}><CheckIcon size={13} className="check" />{s}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Portals & Software</h4>
                <ul className="skill-tags">
                  {['TRACES Portal','Income Tax Portal','Tally Prime','Excel'].map(s => (
                    <li key={s}><span className="dot" aria-hidden="true" />{s}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Quick Rate Reference</h4>
                <ul className="sidebar-list">
                  <li><span>192 Salary</span><strong>Slab Rate</strong></li>
                  <li><span>194A Interest</span><strong>10%</strong></li>
                  <li><span>194C Contractor</span><strong>1%/2%</strong></li>
                  <li><span>194H Commission</span><strong>2%</strong></li>
                  <li><span>194I Rent</span><strong>10%/2%</strong></li>
                  <li><span>194J Professional</span><strong>10%</strong></li>
                  <li><span>194Q Goods</span><strong>0.1%</strong></li>
                </ul>
              </div>

              <div className="sidebar-nav">
                <p>Other Courses</p>
                <Link to="/labour-laws">Labour Laws <ArrowRightIcon size={13} /></Link>
                <Link to="/gst">GST <ArrowRightIcon size={13} /></Link>
                <Link to="/bookkeeping">Bookkeeping <ArrowRightIcon size={13} /></Link>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}
