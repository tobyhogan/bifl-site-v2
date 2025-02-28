import React, { FC } from 'react';

const Home: FC = () => {
  const categories = [
    { name: 'Clothes', link: '/clothes' },
    { name: 'Kitchenware', link: '#' },
    { name: 'Electronics', link: '#' },
    { name: 'Footwear', link: '#' },
    { name: 'Tools', link: '#' },
  ];

  return (
    <main className="container mx-auto px-6 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mt-8">
          Welcome to <span className="bg-clip-text text-green-600">Bifoli</span>
        </h1>
        
        {/* Categories Section */}
        <div>
          <p className="text-xl text-gray-600 mt-6 leading-relaxed">
            Are you tired of stuff you own breaking due to lack of care or planned obsolescence from the manufacturers?
          </p>
          <p className="text-xl text-gray-600 mt-6 leading-relaxed">
            This website aims to be a repository of certified products from crowd-sourced, verified reviews and feedback. 
          </p>
        </div>
        <div className="mt-8">
          <div className='flex flex-row'>
            <h2 className="text-2xl font-semibold text-gray-800 mr-2">Categories</h2>
            <p className='mt-[5px]'>(A -&gt; Z)</p>
          </div>
          <div className="mt-3 grid grid-cols-2 md:grid-cols-5 gap-4">
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

      </div>
    </main>
  );
};

export default Home;