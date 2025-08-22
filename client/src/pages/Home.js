import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20 lg:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                THRIFTY
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Discover affordable fashion that doesn't compromise on style. 
              Quality clothing for everyone, every budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products" className="btn-primary text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100">
                🛍️ Shop Now
              </Link>
              <Link to="/about" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Choose Thrifty Clothings?</h2>
            <p className="section-subtitle">
              We're committed to providing the best shopping experience with quality products and exceptional service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="card p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Affordable Prices</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality clothing at budget-friendly prices. We believe everyone deserves to look great without breaking the bank.
              </p>
            </div>
            
            <div className="card p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick and reliable shipping nationwide. Get your favorite styles delivered to your doorstep in no time.
              </p>
            </div>
            
            <div className="card p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Guarantee</h3>
              <p className="text-gray-600 leading-relaxed">
                Premium materials and craftsmanship. Every item is carefully selected to meet our high standards.
              </p>
            </div>
            
            <div className="card p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Easy Returns</h3>
              <p className="text-gray-600 leading-relaxed">
                Not satisfied? No problem! Our hassle-free return policy ensures you're always happy with your purchase.
              </p>
            </div>
            
            <div className="card p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our friendly customer service team is always here to help you with any questions or concerns.
              </p>
            </div>
            
            <div className="card p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Sustainable fashion choices that are good for you and the planet. Shop responsibly with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Shop by Category</h2>
            <p className="section-subtitle">
              Explore our wide range of fashion categories designed for every style and occasion.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Link to="/products" className="group">
              <div className="card p-8 text-center h-full group-hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">👔</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Men's Fashion</h3>
                <p className="text-gray-600 text-sm">Trendy styles for the modern man</p>
              </div>
            </Link>
            
            <Link to="/products" className="group">
              <div className="card p-8 text-center h-full group-hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">👗</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Women's Fashion</h3>
                <p className="text-gray-600 text-sm">Elegant designs for every woman</p>
              </div>
            </Link>
            
            <Link to="/products" className="group">
              <div className="card p-8 text-center h-full group-hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">👶</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Kids' Fashion</h3>
                <p className="text-gray-600 text-sm">Adorable styles for little ones</p>
              </div>
            </Link>
            
            <Link to="/products" className="group">
              <div className="card p-8 text-center h-full group-hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏠</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Home & Living</h3>
                <p className="text-gray-600 text-sm">Comfort and style for your home</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-400">10K+</div>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-green-400">50K+</div>
              <p className="text-gray-300">Products Sold</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-purple-400">99%</div>
              <p className="text-gray-300">Satisfaction Rate</p>
            </div>
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-orange-400">24/7</div>
              <p className="text-gray-300">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-shadow">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Join thousands of satisfied customers who trust Thrifty Clothings for their fashion needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register" className="btn-primary text-lg px-8 py-4 bg-white text-blue-600 hover:bg-gray-100">
                🚀 Get Started Today
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-blue-600">
                📞 Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
