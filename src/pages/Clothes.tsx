import React, { FC } from 'react'; // Add import for React
import { FaTshirt } from 'react-icons/fa'; // Import the shirt icon

const Clothes: FC = () => {
  const clothesCategories = [
    { name: 'T-Shirts', link: '/clothes/t-shirts', icon: <FaTshirt className="shirt-icon" /> },
    { name: 'Sweaters', link: '#' },
    { name: 'Underwear', link: '#' },
    { name: 'Trousers', link: '#' },
    { name: 'Coats', link: '#' },
  ];

  return (
    <main className="container mx-auto px-6 py-12 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Clothes
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {clothesCategories.map((category) => (
            <a
              key={category.name}
              href={category.link}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all 
                       transform hover:-translate-y-1 flex items-center justify-center
                       border border-gray-100 min-h-[100px]"
            >
              <span className="text-gray-700 font-medium text-lg flex items-center">
                {category.name}
                <div className='ml-1'></div>{category.icon && category.icon} {/* Add the icon if it exists */}
              </span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Clothes;