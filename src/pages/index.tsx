import { Meta } from '@/components/Layout/Meta';
import { Main } from '@/components/Layout/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div id='home' className="bg-lightgray text-tan h-[1000px] mt-[1000px]">Home</div>
      <div id='about' className="bg-lightgray text-tan h-[1000px] mt-[1000px]">About</div>
      <div id='github' className="bg-lightgray text-tan h-[1000px] mt-[1000px]">Github</div>
      <div id='blog' className="bg-lightgray text-tan h-[1000px] mt-[1000px]">Blog</div>
    </Main>
  );
};

export default Index;
