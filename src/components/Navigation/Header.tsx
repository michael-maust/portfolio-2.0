import logo from 'assets/logo.svg';
import { NavLink } from 'components/Navigation/NavLink.tsx';
import { Link } from '@tanstack/react-router';

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
      <nav className="flex justify-between items-center p-3 pl-4 pr-6 bg-gray max-w-screen-xl w-full border-2 border-gray-900 shadow-lg rounded-full backdrop-filter backdrop-blur-[10px] bg-opacity-50 gray">
        <Link to="/">
          <img src={logo} alt="Logo" className="min-h-10 min-w-20" />
        </Link>

        <ul className="hidden flex-wrap text-xl gap-4 md:flex">
          <NavLink to="/">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </ul>
      </nav>
    </header>
  );
}
