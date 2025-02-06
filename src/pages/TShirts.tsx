import { FC, useState } from 'react';

type TShirt = {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  sizes: string[];
  color: string;
};

type SortOption = 'price-low' | 'price-high' | 'rating-low' | 'rating-high';

const TShirts: FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('price-low');
  const [selectedSizes, setSelectedSizes] = useState<Set<string>>(new Set());
  const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set());

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = ['White', 'Black', 'Navy', 'Red', 'Gray', 'Blue'];

  const tshirts: TShirt[] = [
    { id: 1, name: "Classic White Tee", price: 19.99, rating: 4.5, image: "white-tee.jpg", sizes: ['S', 'M', 'L', 'XL'], color: 'White' },
    { id: 2, name: "Black Cotton T-Shirt", price: 24.99, rating: 4.8, image: "black-tee.jpg", sizes: ['M', 'L', 'XL', 'XXL'], color: 'Black' },
    { id: 3, name: "Striped Navy Tee", price: 29.99, rating: 4.2, image: "striped-tee.jpg", sizes: ['XS', 'S', 'M'], color: 'Navy' },
    { id: 4, name: "Vintage Red T-Shirt", price: 22.99, rating: 4.6, image: "red-tee.jpg", sizes: ['S', 'M', 'L'], color: 'Red' },
    { id: 5, name: "Gray Melange Tee", price: 18.99, rating: 4.3, image: "gray-tee.jpg", sizes: ['M', 'L', 'XL'], color: 'Gray' },
    { id: 6, name: "Blue Basic T-Shirt", price: 21.99, rating: 4.7, image: "blue-tee.jpg", sizes: ['S', 'M', 'L', 'XL'], color: 'Blue' },
  ];

  const handleSizeToggle = (size: string) => {
    const newSizes = new Set(selectedSizes);
    if (newSizes.has(size)) {
      newSizes.delete(size);
    } else {
      newSizes.add(size);
    }
    setSelectedSizes(newSizes);
  };

  const handleColorToggle = (color: string) => {
    const newColors = new Set(selectedColors);
    if (newColors.has(color)) {
      newColors.delete(color);
    } else {
      newColors.add(color);
    }
    setSelectedColors(newColors);
  };

  const filteredAndSortedTshirts = [...tshirts]
    .filter(tshirt => {
      const sizeMatch = selectedSizes.size === 0 || tshirt.sizes.some(size => selectedSizes.has(size));
      const colorMatch = selectedColors.size === 0 || selectedColors.has(tshirt.color);
      return sizeMatch && colorMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating-low':
          return a.rating - b.rating;
        case 'rating-high':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <main className="container mx-auto px-6 py-12 flex-grow">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-6">T-Shirts</h1>
            
            {/* Filters */}
            <div className="flex flex-col gap-4">
              {/* Size Filters */}
              <div>
                <h2 className="font-semibold text-gray-700 mb-2">Sizes</h2>
                <div className="flex flex-wrap gap-2">
                  {sizes.map(size => (
                    <label
                      key={size}
                      className={`px-3 py-1 rounded-full cursor-pointer text-sm transition-colors
                        ${selectedSizes.has(size)
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedSizes.has(size)}
                        onChange={() => handleSizeToggle(size)}
                      />
                      {size}
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filters */}
              <div>
                <h2 className="font-semibold text-gray-700 mb-2">Colors</h2>
                <div className="flex flex-wrap gap-2">
                  {colors.map(color => (
                    <label
                      key={color}
                      className={`px-3 py-1 rounded-full cursor-pointer text-sm transition-colors
                        ${selectedColors.has(color)
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedColors.has(color)}
                        onChange={() => handleColorToggle(color)}
                      />
                      {color}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sort Options */}
          <div className="w-full md:w-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
            >
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating-low">Rating: Low to High</option>
              <option value="rating-high">Rating: High to Low</option>
            </select>
          </div>
        </div>

        {filteredAndSortedTshirts.length === 0 ? (
          <div className="text-center py-12 text-gray-600">
            No T-shirts found matching your filters.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedTshirts.map((tshirt) => (
              <div
                key={tshirt.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200">
                  {/* Image placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    T-Shirt Image
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{tshirt.name}</h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-purple-600 font-bold">${tshirt.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">★</span>
                      <span className="text-gray-600">{tshirt.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {tshirt.sizes.map(size => (
                      <span key={size} className="px-2 py-1 text-xs bg-gray-100 rounded-full text-gray-600">
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default TShirts; 