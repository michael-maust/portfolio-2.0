import logo from 'assets/logo.svg';
import { cn } from 'utils/cn';

export enum Section {
  Welcome = 'welcome',
  About = 'about',
  Projects = 'projects',
  Experience = 'experience',
  Contact = 'contact',
}

export function Header() {
  return (
    <header className="fixed flex justify-center items-center top-3 inset right-auto w-full p-4 ">
      <nav className="flex justify-between items-center p-3 px-6 bg-gray max-w-screen-xl w-full border-2 border-gray-900 shadow-lg rounded-[20px] backdrop-filter backdrop-blur-[10px] bg-opacity-50 gray">
        <a href={`#${Section.Welcome}`} className="cursor-pointer">
          <img src={logo} alt="Logo" className="min-h-10 min-w-20" />
        </a>

        <ul className="flex flex-wrap text-xl gap-4">
          {Object.entries(Section).map(([key, value]) => (
            <li key={key}>
              <a
                href={`#${value}`}
                className={cn(
                  'border-none capitalize text-tan hover:text-primary font-light cursor-pointer transition-colors duration-300',
                )}
              >
                {value}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
