import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/experience')({
  component: Experience,
});

function Experience() {
  return <div className="p-2">Experience</div>;
}
