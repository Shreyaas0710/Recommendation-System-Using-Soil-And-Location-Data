import React, { useState } from 'react';
import { products } from '../data/products';
import { customerFaqs } from '../data/faqs';
import ProductCard from '../components/ui/ProductCard';
import Accordion from '../components/ui/Accordion';
import Button from '../components/ui/Button';

const StorePage: React.FC = () => {
  const [category, setCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = category === 'All' 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <div>
      <div className="bg-primary-700 text-white py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Farm Fresh Organic Produce
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Shop our selection of freshly harvested, 100% organic fruits, vegetables, and spices. 
            Delivered straight from our farms to your doorstep.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  category === cat 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Looking for more options or bulk orders?
            </p>
            <Button variant="primary">View All Products</Button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Subscription Boxes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary-100 p-6 text-center">
                  <h3 className="text-2xl font-bold text-primary-800">Weekly Essentials</h3>
                  <p className="text-primary-600 mt-2">Perfect for small families</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">₹699</span>
                    <span className="text-gray-600">/week</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center text-xs mr-3">✓</span>
                      <span>5-6 seasonal vegetables (3kg total)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center text-xs mr-3">✓</span>
                      <span>2-3 seasonal fruits (1kg total)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center text-xs mr-3">✓</span>
                      <span>Fresh greens (250g)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-primary-100 text-primary-800 flex items-center justify-center text-xs mr-3">✓</span>
                      <span>Free delivery</span>
                    </li>
                  </ul>
                  <Button variant="primary" fullWidth className="mt-6">
                    Subscribe Now
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-secondary-100 p-6 text-center">
                  <h3 className="text-2xl font-bold text-secondary-800">Family Box</h3>
                  <p className="text-secondary-600 mt-2">Perfect for larger families</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">₹1299</span>
                    <span className="text-gray-600">/week</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-secondary-100 text-secondary-800 flex items-center justify-center text-xs mr-3">✓</span>
                      <span>8-10 seasonal vegetables (6kg total)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-secondary-100 text-secondary-800 flex items-center justify-center text-xs mr-3">✓</span>
                      <span>4-5 seasonal fruits (2kg total)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-secondary-100 text-secondary-800 flex items-center justify-center text-xs mr-3">✓</span>
                      <span>Fresh greens (500g)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="w-5 h-5 rounded-full bg-secondary-100 text-secondary-800 flex items-center justify-center text-xs mr-3">✓</span>
                      <span>Free delivery + priority slot</span>
                    </li>
                  </ul>
                  <Button variant="secondary" fullWidth className="mt-6">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion faqs={customerFaqs} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StorePage;