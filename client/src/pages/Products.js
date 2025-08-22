import React, { useState, useEffect } from 'react';

// Mock products data
const mockProducts = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    price: 19.99,
    image: "https://via.placeholder.com/300x400?text=T-Shirt",
    category: "T-Shirts",
    rating: 4.5
  },
  {
    id: 2,
    name: "Denim Jeans",
    price: 49.99,
    image: "https://via.placeholder.com/300x400?text=Jeans",
    category: "Jeans",
    rating: 4.2
  },
  {
    id: 3,
    name: "Casual Hoodie",
    price: 39.99,
    image: "https://via.placeholder.com/300x400?text=Hoodie",
    category: "Hoodies",
    rating: 4.7
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 29.99,
    image: "https://via.placeholder.com/300x400?text=Dress",
    category: "Dresses",
    rating: 4.3
  },
  {
    id: 5,
    name: "Sneakers",
    price: 79.99,
    image: "https://via.placeholder.com/300x400?text=Sneakers",
    category: "Shoes",
    rating: 4.6
  },
  {
    id: 6,
    name: "Winter Jacket",
    price: 89.99,
    image: "https://via.placeholder.com/300x400?text=Jacket",
    category: "Jackets",
    rating: 4.8
  }
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Our Products</h1>
          <p className="mt-2 text-gray-600">Discover our collection of affordable fashion</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">${product.price}</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
