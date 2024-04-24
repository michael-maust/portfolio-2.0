export function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 md:flex md:justify-between">
      <div className="mb-4 md:mb-0">
        <h1 className="text-xl font-bold">My Website</h1>
      </div>
      <nav className="md:flex space-x-4">
        <a href="#" className="block py-2 px-4 hover:bg-blue-700">
          Home
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-blue-700">
          About
        </a>
        <a href="#" className="block py-2 px-4 hover:bg-blue-700">
          Contact
        </a>
      </nav>
    </header>
  );
}
