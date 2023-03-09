import { Meta } from '@/components/Layout/Meta';
import { Main } from '@/components/Layout/Main';
import WelcomeSection from '@/components/sections/WelcomeSection';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Michael Maust's Portfolio"
          description=""
        />
      }
    >
      <WelcomeSection />
      <div id='about' className="bg-gray text-tan h-[1000px] mt-[500px] p-3">About</div>
      <div id='projects' className="bg-gray text-tan h-[1000px] mt-[500px] p-3">Projects</div>
      <div id='experience' className="bg-gray text-tan h-[1000px] mt-[500px] p-3">Experience</div>
      <div id='contact' className="bg-gray text-tan h-[1000px] mt-[500px] p-3">Contact</div>
    </Main>
  );
};

export default Index;
