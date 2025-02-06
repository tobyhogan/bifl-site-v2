import { FC } from 'react';

const Home: FC = () => {
  const categories = [
    { name: 'Clothes', link: '/clothes' },
    { name: 'Kitchenware', link: '#' },
    { name: 'Electronics', link: '#' },
    { name: 'Footwear', link: '#' },
    { name: 'Tools', link: '#' },
  ];

  return (
    <main className="container mx-auto px-6 py-12 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Bifoli</span>
        </h1>
        
        {/* Categories Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => (
              <a
                key={category.name}
                href={category.link}
                className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all 
                         transform hover:-translate-y-1 flex items-center justify-center
                         border border-gray-100"
              >
                <span className="text-gray-700 font-medium">{category.name}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          This is a modern website built with React, Vite, and Tailwind CSS. Experience seamless design and powerful functionality.
        </p>
      </div>
    </main>
  );
};

export default Home; 