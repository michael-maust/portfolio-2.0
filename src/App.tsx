import { Header } from 'components/Navigation/Header';
import * as Sections from 'components/Sections';

function App() {
  return (
    <div className="flex flex-col items-center relative w-full">
      <Header />
      <div className="pt-72 px-12 max-w-screen-lg w-full">
        <Sections.Welcome />
        <Sections.About />
        <Sections.Experience />
        <Sections.Projects />
        <Sections.Contact />
      </div>
    </div>
  );
}

export default App;
