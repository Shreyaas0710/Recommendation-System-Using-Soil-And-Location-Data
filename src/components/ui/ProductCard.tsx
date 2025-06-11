import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { ProductType } from '../../types';
import Button from './Button';

interface ProductCardProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-gray-900">
            ₹{product.price}
            <span className="text-sm text-gray-500 font-normal">/{product.unit}</span>
          </p>
          <Button size="sm" className="gap-1">
            <ShoppingCart size={16} />
            <span>Add</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;