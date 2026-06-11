import { useEffect, useRef, useState } from 'react';
import './ModuleTimeline.css';

export default function ModuleTimeline({ modules }) {
  const itemRefs = useRef([]);
  const [visible, setVisible] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.dataset.idx);
            setVisible(prev => new Set([...prev, idx]));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    itemRefs.current.forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [modules]);

  return (
    <div className="mod-timeline">
      {modules.map((m, i) => (
        <div
          key={m.n}
          className={`mod-timeline__item${visible.has(i) ? ' mod-visible' : ''}`}
          ref={el => (itemRefs.current[i] = el)}
          data-idx={i}
        >
          {/* Left column: dot + connector line */}
          <div className="mod-timeline__left">
            <div className="mod-timeline__dot">
              <span>{m.n}</span>
            </div>
            {i < modules.length - 1 && (
              <div className={`mod-timeline__line${visible.has(i) ? ' mod-line-grow' : ''}`} />
            )}
          </div>

          {/* Right column: card */}
          <div className="mod-timeline__card">
            <h4 className="mod-timeline__title">{m.title}</h4>
            <p className="mod-timeline__desc">{m.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
