import { useRef } from 'react';
import { Section } from 'components/Navigation/Header';

export function Contact() {
  const ref = useRef(null);

  return (
    <div ref={ref} id={Section.Contact} className="text-tan h-[1000px] p-3">
      Contact
    </div>
  );
}
