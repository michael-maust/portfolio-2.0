import { useRef } from 'react';
import { Section } from 'components/Navigation/Header';

export function Experience() {
  const ref = useRef(null);

  return (
    <div ref={ref} id={Section.Experience} className="text-tan h-[1000px] p-3">
      Experience
    </div>
  );
}
