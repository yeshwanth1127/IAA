import Reveal from './Reveal';
import './ModuleTimeline.css';

export default function ModuleTimeline({ modules }) {
  return (
    <Reveal stagger className="module-list">
      {modules.map(m => (
        <div key={m.n} className="module-row">
          <span className="module-row__num">{String(m.n).padStart(2, '0')}</span>
          <div className="module-row__body">
            <h4>{m.title}</h4>
            <p>{m.desc}</p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
