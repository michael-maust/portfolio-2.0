import { useRef } from 'react';
import { Section } from 'components/Navigation/Header';

export function Projects() {
  const ref = useRef(null);

  return (
    <div ref={ref} id={Section.Projects} className="text-tan h-[1000px] p-3">
      Projects
    </div>
  );
}
