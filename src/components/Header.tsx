import { FC } from 'react';

const Header: FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-600 text-white shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="text-2xl font-bold tracking-tight text-green-200 hover:text-green-300 transition-colors cursor-pointer"
          >
            BoughtForLiving
          </a>
          <ul className="flex items-center space-x-8">
            <li>
              <a href="/" className="text-sm font-medium hover:text-green-200 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-sm font-medium hover:text-green-200 transition-colors">
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