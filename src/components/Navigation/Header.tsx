import logo from 'assets/logo.svg';
import { cn } from 'utils/cn';
import { useScroll } from 'framer-motion';

export enum Section {
  Welcome = 'welcome',
  About = 'about',
  Projects = 'projects',
  Experience = 'experience',
  Contact = 'contact',
}

export function Header() {
  const controls = useScroll();

  return (
    <header className="fixed flex justify-center items-center top-3 inset right-auto w-full p-4">
      <nav className="flex justify-between items-center p-3 bg-gray max-w-screen-xl w-full border-2 border-gray-900 shadow-lg rounded-[20px]">
        <a href={`#${Section.Welcome}`} className="cursor-pointer">
          <img src={logo} alt="Logo" className="min-h-10 min-w-20" />
        </a>

        <ul className="flex flex-wrap text-xl gap-3">
          {Object.entries(Section).map(([key, value]) => (
            <li key={key}>
              <a
                href={`#${value}`}
                className={cn(
                  'border-none text-tan hover:text-primary font-medium cursor-pointer transition-colors duration-300',
                )}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>

        <button className="shadow-sm flex gap-2 px-3 py-2 rounded-xl text-tan font-bold bg-green w-fit hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-green-400">
          Resume
        </button>
      </nav>
    </header>
  );
}
