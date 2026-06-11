import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">IAA</div>
          <p>Indian Academy of Accounts — empowering commerce graduates with practical skills in accounting, taxation, and compliance.</p>
        </div>

        <div className="footer__col">
          <h4>Courses</h4>
          <ul>
            <li><Link to="/labour-laws">Labour Laws</Link></li>
            <li><Link to="/gst">GST (Goods & Services Tax)</Link></li>
            <li><Link to="/tds">TDS (Tax Deducted at Source)</Link></li>
            <li><Link to="/bookkeeping">Bookkeeping in Tally Prime</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Institute</h4>
          <ul>
            <li><Link to="/about">About IAA</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact">Enroll Now</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li>info@indianacademyofaccounts.com</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Indian Academy of Accounts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
