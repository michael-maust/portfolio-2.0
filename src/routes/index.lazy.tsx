import { createLazyFileRoute } from '@tanstack/react-router';
import { TransitionWords } from 'components/Base/TransitionWords.tsx';

const words = ['better', 'cute', 'beautiful', 'modern'];

function Index() {
  return (
    <div className="flex p-2 mb-[4000px]">
      <div className="h-[40rem] flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Build
          <TransitionWords words={words} /> <br />
          websites with Aceternity UI
        </div>
      </div>
    </div>
  );
}

export const Route = createLazyFileRoute('/')({
  component: Index,
});
