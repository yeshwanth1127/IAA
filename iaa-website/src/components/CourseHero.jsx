import { ClockIcon } from './Icons';
import Reveal from './Reveal';
import './CourseHero.css';

export default function CourseHero({ badge, title, subtitle, tags, schedule }) {
  return (
    <section className="course-hero">
      <div className="container">
        <Reveal>
          <span className="kicker">{badge}</span>
          <h1 className="course-hero__title">{title}</h1>
        </Reveal>
        <Reveal delay={60}>
          <p className="course-hero__subtitle">{subtitle}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="course-hero__meta">
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
            {schedule && (
              <span className="course-hero__schedule">
                <ClockIcon size={14} />
                {schedule}
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
