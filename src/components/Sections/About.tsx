import { useRef } from 'react';
import { Section } from 'components/Navigation/Header';

export function About() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      id={Section.About}
      className="bg-gray text-tan h-[1000px] mt-[500px] p-3"
    >
      About
    </div>
  );
}
