import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="text-2xl font-bold tracking-tight hover:text-blue-200 transition-colors cursor-pointer"
          >
            Bifoli
          </a>
          <ul className="flex items-center space-x-8">
            <li>
              <a href="/" className="text-sm font-medium hover:text-blue-200 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm font-medium hover:text-blue-200 transition-colors">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 