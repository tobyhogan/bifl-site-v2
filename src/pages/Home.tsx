import React, { FC } from 'react';
import { FaTshirt } from 'react-icons/fa';
import { RiKnifeLine } from "react-icons/ri";
import { PiTShirtBold } from "react-icons/pi";
import { TbShoe } from "react-icons/tb";
import { LuDrill } from "react-icons/lu";
import { MdOutlineMouse } from "react-icons/md";
import { PiMouseBold } from "react-icons/pi";

const Home: FC = () => {
  const categories = [
    { name: 'Clothes', link: '/clothes', icon: <PiTShirtBold /> },
    { name: 'Kitchenware', link: '#', icon: <RiKnifeLine style = {{transform: 'rotate(90deg) scaleX(-1)' }} /> },
    { name: 'Electronics', link: '#', icon: <PiMouseBold style={{marginLeft: '-3px' }} />},
    { name: 'Footwear', link: '#', icon: <TbShoe /> },
    { name: 'Tools', link: '#', icon: <LuDrill /> },
  ];

  return (
    <main className="container mx-auto px-6 flex-grow">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mt-8">
          Welcome to <span className="bg-clip-text text-green-600">LifeBoughtFor</span>
        </h1>
        
        {/* Categories Section */}
        <div>
          <p className="text-xl text-gray-600 mt-6 leading-relaxed">
            Are you tired of stuff you own breaking due to poor quality or planned obsolescence from the manufacturers?
          </p>
          <p className="text-xl text-gray-600 mt-6 leading-relaxed">
            This website aims to be a repository of certified products from crowd-sourced, verified reviews and feedback, so you know they'll last.
          </p>
        </div>
        <div className="mt-8">
          <div className='flex flex-row'>
            <h2 className="text-2xl font-semibold text-gray-800 mr-2">Categories</h2>
            <p className='mt-[5px]'>(Listed A → Z)</p>
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
                {category.icon && <span className="ml-2 mt-0.5">{category.icon}</span>}
              </a>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default Home;