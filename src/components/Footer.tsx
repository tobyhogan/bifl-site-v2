import { FC } from 'react';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              &copy; 2024 My Website. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              GitHub
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 