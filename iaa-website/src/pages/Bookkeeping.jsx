import { Link } from 'react-router-dom';
import CourseHero from '../components/CourseHero';
import ModuleTimeline from '../components/ModuleTimeline';
import { CheckIcon, ArrowRightIcon } from '../components/Icons';
import './CoursePage.css';

const accountTypes = [
  { type: 'Personal Account', rule: 'Debit the Receiver, Credit the Giver', examples: 'Debtors, Creditors, Partners' },
  { type: 'Real Account', rule: 'Debit What Comes In, Credit What Goes Out', examples: 'Cash, Furniture, Machinery' },
  { type: 'Nominal Account', rule: 'Debit All Expenses and Losses, Credit All Incomes and Gains', examples: 'Salary, Rent, Commission, Interest Received' },
];

const vouchers = [
  { key: 'F4', type: 'Contra Voucher', use: 'Cash deposits into bank, cash withdrawals from bank. Entry: Dr Bank / Cr Cash (or reverse).' },
  { key: 'F5', type: 'Payment Voucher', use: 'Payments made — rent, salary, electricity charges, vendor payments.' },
  { key: 'F6', type: 'Receipt Voucher', use: 'Money received — collection from customers, interest received, rent received.' },
  { key: 'F7', type: 'Journal Voucher', use: 'Adjustments, depreciation entries, provisions, TDS, opening balances.' },
  { key: 'F8', type: 'Sales Voucher', use: 'Sale of goods or services. Creates receivable in customer ledger.' },
  { key: 'F9', type: 'Purchase Voucher', use: 'Purchase of goods or services. Creates payable in supplier ledger.' },
];

const modules = [
  { n: '01', title: 'Introduction to Bookkeeping', desc: 'Systematic recording of financial transactions. Objectives: accurate records, profit/loss, track assets and liabilities, statutory compliance.' },
  { n: '02', title: 'Accounting Basics', desc: 'Accounting equation (Assets = Liabilities + Capital), Golden Rules for Personal, Real, and Nominal accounts.' },
  { n: '03', title: 'Introduction to Tally Prime', desc: 'Bookkeeping, GST compliance, payroll, inventory, MIS, financial statements. Features: user-friendly, multi-user, GST and TDS ready.' },
  { n: '04', title: 'Company Creation in Tally', desc: 'Gateway → Create Company. Enter name, address, financial year, books beginning date, GST details. Alter and Shut company.' },
  { n: '05', title: 'Understanding Groups and Ledgers', desc: 'Groups classify accounts: Cash-in-Hand, Bank Accounts, Fixed Assets, Sundry Creditors, Duties & Taxes, Sales, Salary, Rent.' },
  { n: '06', title: 'Creation of Masters', desc: 'Create party ledgers (customers, vendors), expense ledgers (salary, rent, printing), income ledgers (sales, service income).' },
  { n: '07', title: 'Voucher Types', desc: 'Contra (F4), Payment (F5), Receipt (F6), Journal (F7), Sales (F8), Purchase (F9) — when and how to use each.' },
  { n: '08', title: 'Recording Business Transactions', desc: 'Capital introduction, furniture purchase, credit purchase of goods, sale of goods — all with journal entries and Tally posting.' },
  { n: '09', title: 'GST Accounting in Tally', desc: 'Enable GST (F11), create CGST/SGST/IGST ledgers, record purchase and sales entries with auto GST computation.' },
  { n: '10', title: 'TDS Accounting', desc: 'Professional fees entry with TDS deduction, TDS payable ledger, deposit of TDS — full accounting cycle.' },
  { n: '11', title: 'Bank Reconciliation', desc: 'Match bank book with bank statement. Handle cheques in transit, bank charges, interest credited.' },
  { n: '12', title: 'Inventory Accounting', desc: 'Stock groups (Raw Materials, Finished Goods), stock items, purchase/sales of inventory, closing stock valuation.' },
  { n: '13', title: 'Reports in Tally', desc: 'Day Book, Ledger Report, Cash Book, Bank Book, Trial Balance, Profit & Loss Account, Balance Sheet.' },
  { n: '14', title: 'Common Errors', desc: 'Wrong ledger, duplicate ledger, wrong GST classification, incorrect voucher type, unreconciled bank accounts.' },
  { n: '15', title: 'Year-End Accounting', desc: 'Verify ledgers, reconcile bank and GST, verify TDS, check debtors/creditors, pass depreciation and provision entries.' },
  { n: '16', title: 'Practical Exercises', desc: '8 exercises: create company, 20 ledgers, 50 transactions, trial balance, P&L, balance sheet, GST entries, TDS entries, bank reconciliation.' },
];

const transactions = [
  { desc: 'Capital introduced ₹5,00,000', debit: 'Cash ₹5,00,000', credit: 'Capital ₹5,00,000' },
  { desc: 'Purchased furniture ₹50,000 cash', debit: 'Furniture ₹50,000', credit: 'Cash ₹50,000' },
  { desc: 'Purchased goods on credit ₹1,00,000', debit: 'Purchases ₹1,00,000', credit: 'Supplier ₹1,00,000' },
  { desc: 'Sold goods to customer ₹2,00,000', debit: 'Customer ₹2,00,000', credit: 'Sales ₹2,00,000' },
];

const gstEntries = [
  { type: 'Purchase — 18% GST', entries: ['Dr Purchases ₹1,00,000', 'Dr Input CGST ₹9,000', 'Dr Input SGST ₹9,000', 'Cr Supplier ₹1,18,000'] },
  { type: 'Sales — 18% GST', entries: ['Dr Customer ₹2,36,000', 'Cr Sales ₹2,00,000', 'Cr Output CGST ₹18,000', 'Cr Output SGST ₹18,000'] },
  { type: 'TDS on Professional Fees', entries: ['Dr Professional Fees ₹1,00,000', 'Cr Vendor ₹90,000', 'Cr TDS Payable ₹10,000'] },
];

const reports = [
  { report: 'Day Book', purpose: 'All transactions recorded on a given day — complete audit trail.' },
  { report: 'Ledger Report', purpose: 'Account-wise details — every debit/credit movement for a ledger.' },
  { report: 'Cash Book', purpose: 'All cash receipts and payments with running balance.' },
  { report: 'Bank Book', purpose: 'All bank transactions — basis for bank reconciliation.' },
  { report: 'Trial Balance', purpose: 'Checks arithmetical accuracy. All debit totals = All credit totals.' },
  { report: 'Profit & Loss Account', purpose: 'Income minus expenses = net profit or loss for the period.' },
  { report: 'Balance Sheet', purpose: 'Shows assets, liabilities, and capital at a point in time.' },
];

const schedule = [
  { day: 'Day 1', topics: ['Accounting Fundamentals & Golden Rules', 'Company Creation in Tally Prime', 'Ledgers & Groups', 'Voucher Entry (Contra, Payment, Receipt)'] },
  { day: 'Day 2', topics: ['GST Accounting in Tally', 'TDS Accounting Entries', 'Inventory Management', 'Bank Reconciliation'] },
  { day: 'Day 3', topics: ['Financial Reports (P&L, Balance Sheet)', 'Error Detection & Correction', 'Year-End Accounting & Closing', 'Practical Case Study & Mock Assignment'] },
];

export default function Bookkeeping() {
  return (
    <div>
      <CourseHero
        badge="Course 04 of 04"
        title="Bookkeeping in Tally Prime"
        subtitle="Hands-on training on recording transactions, GST and TDS accounting, inventory management, bank reconciliation, financial reporting, and year-end closing in Tally Prime."
        tags={['Tally Prime', 'GST Entries', 'TDS Accounting', 'Bank Recon', 'P&L & Balance Sheet', 'Inventory']}
        schedule="3-Day Program · 16 Modules"
      />

      <div className="course-body">
        <div className="container">
          <div className="course-layout">

            <main className="course-main">

              {/* What is Bookkeeping */}
              <section className="course-section">
                <h2>What is Bookkeeping?</h2>
                <p>Bookkeeping is the <strong>systematic recording of financial transactions</strong> of a business. It forms the foundation of all accounting and compliance work — without accurate books, you cannot file returns, prepare financials, or support audits.</p>
                <div className="grid-3" style={{gap:'12px',marginTop:'20px'}}>
                  {['Maintain accurate financial records','Determine profit or loss','Track assets and liabilities','Comply with statutory requirements','Support business decision-making'].map(o => (
                    <div key={o} className="alert-box">{o}</div>
                  ))}
                </div>
              </section>

              {/* Accounting Basics */}
              <section className="course-section">
                <h2>Accounting Fundamentals</h2>
                <div className="formula-box" style={{marginBottom:'16px'}}>
                  <p className="formula-label">The Accounting Equation</p>
                  <p className="formula-text">Assets = Liabilities + Capital</p>
                </div>
                <div className="example-box" style={{marginBottom:'24px'}}>
                  <h4>Example</h4>
                  <p>Cash ₹1,00,000 = Nil Liabilities + Capital ₹1,00,000</p>
                </div>
                <h3 style={{fontSize:'1rem',marginBottom:'12px'}}>Golden Rules of Accounting</h3>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Account Type</th><th>Debit</th><th>Credit</th><th>Examples</th></tr>
                    </thead>
                    <tbody>
                      {accountTypes.map(a => (
                        <tr key={a.type}>
                          <td><strong>{a.type}</strong></td>
                          <td>{a.rule.split(',')[0].replace('Debit ','')}</td>
                          <td>{a.rule.split(',')[1].trim().replace('Credit ','')}</td>
                          <td style={{fontSize:'0.8rem',color:'var(--gray-500)'}}>{a.examples}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Tally Prime */}
              <section className="course-section">
                <h2>Tally Prime — Overview</h2>
                <p>Tally Prime is India's most widely used accounting software in small and medium businesses, CA firms, and corporates.</p>
                <div className="grid-3" style={{gap:'12px',marginTop:'20px'}}>
                  {[
                    {feat:'Bookkeeping',desc:'Full double-entry accounting'},
                    {feat:'GST Ready',desc:'Auto GST computation in all vouchers'},
                    {feat:'TDS Ready',desc:'TDS deduction and accounting'},
                    {feat:'Inventory',desc:'Stock management with costing'},
                    {feat:'Multi-User',desc:'Concurrent access in a network'},
                    {feat:'MIS Reports',desc:'Day book, ledgers, P&L, Balance Sheet'},
                  ].map(f => (
                    <div key={f.feat} className="info-box" style={{padding:'16px 18px'}}>
                      <h4 style={{marginBottom:'4px',fontSize:'0.9rem'}}>{f.feat}</h4>
                      <p style={{fontSize:'0.8rem'}}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Voucher Types */}
              <section className="course-section">
                <h2>Voucher Types in Tally Prime</h2>
                <div className="modules-grid">
                  {vouchers.map(v => (
                    <div key={v.type} className="module-card">
                      <span className="module-card__num" style={{background:'var(--gray-900)',color:'var(--white)',borderRadius:'4px',padding:'2px 6px',fontSize:'0.7rem'}}>{v.key}</span>
                      <div><h4>{v.type}</h4><p>{v.use}</p></div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Sample Transactions */}
              <section className="course-section">
                <h2>Sample Journal Entries</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Transaction</th><th>Debit</th><th>Credit</th></tr>
                    </thead>
                    <tbody>
                      {transactions.map(t => (
                        <tr key={t.desc}>
                          <td style={{fontSize:'0.85rem'}}>{t.desc}</td>
                          <td style={{color:'var(--gray-800)',fontWeight:'500',fontSize:'0.85rem'}}>{t.debit}</td>
                          <td style={{color:'var(--gray-800)',fontWeight:'500',fontSize:'0.85rem'}}>{t.credit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* GST & TDS Entries */}
              <section className="course-section">
                <h2>GST & TDS Accounting Entries</h2>
                <div className="schedule-grid">
                  {gstEntries.map(g => (
                    <div key={g.type} className="schedule-card">
                      <div className="schedule-card__day">{g.type}</div>
                      <ul>
                        {g.entries.map(e => <li key={e}><span className="bullet">›</span>{e}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* All 16 Modules */}
              <section className="course-section">
                <h2>All 16 Modules</h2>
                <ModuleTimeline modules={modules} />
              </section>

              {/* Reports */}
              <section className="course-section">
                <h2>Reports Generated in Tally Prime</h2>
                <div className="table-wrap">
                  <table className="data-table">
                    <thead>
                      <tr><th>Report</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                      {reports.map(r => (
                        <tr key={r.report}>
                          <td><strong>{r.report}</strong></td>
                          <td>{r.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 3-Day Schedule */}
              <section className="course-section">
                <h2>3-Day Training Schedule</h2>
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
                  <li><span>Duration</span><strong>3 Days</strong></li>
                  <li><span>Modules</span><strong>16</strong></li>
                  <li><span>Software</span><strong>Tally Prime</strong></li>
                  <li><span>Level</span><strong>Beginner</strong></li>
                </ul>
                <Link to="/contact" className="btn btn-primary" style={{width:'100%',justifyContent:'center',marginTop:'16px'}}>Enroll in This Course</Link>
              </div>

              <div className="sidebar-card">
                <h4>Accounting Skills</h4>
                <ul className="skill-tags">
                  {['Journal Entries','Ledger Scrutiny','Trial Balance Preparation','P&L Statement Reading','Balance Sheet Analysis'].map(s => (
                    <li key={s}><CheckIcon size={13} className="check" />{s}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Tally Skills</h4>
                <ul className="skill-tags">
                  {['Company Creation','Ledger Creation','Voucher Posting','GST Setup & Entries','TDS Accounting','Bank Reconciliation','GST Return Data Verification'].map(s => (
                    <li key={s}><CheckIcon size={13} className="check" />{s}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card">
                <h4>Professional Skills</h4>
                <ul className="skill-tags">
                  {['Excel for Accounts','GST Portal Navigation','Vendor Reconciliation','Audit Support','Documentation & Records'].map(s => (
                    <li key={s}><CheckIcon size={13} className="check" />{s}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-nav">
                <p>Other Courses</p>
                <Link to="/labour-laws">Labour Laws <ArrowRightIcon size={13} /></Link>
                <Link to="/gst">GST <ArrowRightIcon size={13} /></Link>
                <Link to="/tds">TDS <ArrowRightIcon size={13} /></Link>
              </div>
            </aside>

          </div>
        </div>
      </div>
    </div>
  );
}
