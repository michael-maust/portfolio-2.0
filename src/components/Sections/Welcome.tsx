import { useRef } from 'react';
import { Section } from 'components/Navigation/Header';

export function Welcome() {
  const ref = useRef(null);

  return (
    <div ref={ref} id={Section.Welcome} className="text-tan h-[1000px] p-3">
      Welcome
    </div>
  );
}
