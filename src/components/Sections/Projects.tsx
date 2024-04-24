import { useRef } from 'react';
import { Section } from 'components/Navigation/Header';

export function Projects() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      id={Section.Projects}
      className="bg-gray text-tan h-[1000px] mt-[500px] p-3"
    >
      Projects
    </div>
  );
}
