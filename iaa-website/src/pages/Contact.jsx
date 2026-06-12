import { useState } from 'react';
import { MailIcon, PhoneIcon, ClockIcon, CheckCircleIcon, ArrowRightIcon } from '../components/Icons';
import Reveal from '../components/Reveal';
import './Contact.css';

const courses = [
  'Labour Laws & Payroll Compliance',
  'GST — Goods & Services Tax',
  'TDS — Tax Deducted at Source',
  'Bookkeeping in Tally Prime',
  'All Four Courses',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <Reveal>
            <span className="kicker">Enroll / Contact</span>
            <h1>Get in Touch</h1>
          </Reveal>
          <Reveal delay={60}>
            <p>Interested in enrolling or have a question? Fill in the form and our team will get back to you.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">

            <Reveal className="contact-form-wrap">
              {submitted ? (
                <div className="success-box">
                  <span className="success-icon"><CheckCircleIcon size={28} /></span>
                  <h3>Thank you, {form.name}!</h3>
                  <p>We have received your enquiry and will contact you shortly at <strong>{form.email}</strong>.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h2>Enrollment Enquiry</h2>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name <span>*</span></label>
                      <input id="name" name="name" type="text" placeholder="Your full name" required value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address <span>*</span></label>
                      <input id="email" name="email" type="email" placeholder="you@email.com" required value={form.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="course">Course of Interest <span>*</span></label>
                      <select id="course" name="course" required value={form.course} onChange={handleChange}>
                        <option value="">Select a course</option>
                        {courses.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="4" placeholder="Any questions or details..." value={form.message} onChange={handleChange} />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{width:'100%',justifyContent:'center',padding:'14px'}}>Submit Enquiry</button>
                </form>
              )}
            </Reveal>

            <Reveal delay={80} className="contact-info">
              <div className="contact-info-card">
                <h4>Contact Details</h4>
                <ul>
                  <li>
                    <span className="ci-icon"><MailIcon size={16} /></span>
                    <div>
                      <strong>Email</strong>
                      <p>info@indianacademyofaccounts.com</p>
                    </div>
                  </li>
                  <li>
                    <span className="ci-icon"><PhoneIcon size={16} /></span>
                    <div>
                      <strong>Phone</strong>
                      <p>+91 98765 43210</p>
                    </div>
                  </li>
                  <li>
                    <span className="ci-icon"><ClockIcon size={16} /></span>
                    <div>
                      <strong>Training Hours</strong>
                      <p>Monday – Saturday, 9 AM – 6 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="contact-info-card">
                <h4>Available Courses</h4>
                <ul className="course-list">
                  {courses.slice(0, 4).map(c => (
                    <li key={c}><span><ArrowRightIcon size={12} /></span>{c}</li>
                  ))}
                </ul>
              </div>

              <div className="contact-info-card info-highlight">
                <p className="info-highlight__label">Training Format</p>
                <p>Classroom and online sessions available. Batch sizes kept small for maximum practical interaction.</p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
