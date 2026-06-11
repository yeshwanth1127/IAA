import { ClockIcon } from './Icons';
import './CourseHero.css';

export default function CourseHero({ badge, title, subtitle, tags, schedule }) {
  return (
    <section className="course-hero">
      <div className="container">
        <span className="badge">{badge}</span>
        <h1 className="course-hero__title">{title}</h1>
        <p className="course-hero__subtitle">{subtitle}</p>
        <div className="course-hero__meta">
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
          {schedule && <span className="tag course-hero__schedule"><ClockIcon size={12} />{schedule}</span>}
        </div>
      </div>
    </section>
  );
}
