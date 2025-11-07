import { ProductCard } from '../ProductCard';
import { LoadingSpinner } from '@/core/components/LoadingSpinner';
import type { ProductGridProps } from './types';

export const ProductGrid = ({
  products,
  isLoading,
  onAddToCart,
  onViewDetails,
}: ProductGridProps) => {
  if (isLoading) {
    return <LoadingSpinner size="lg" />;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
};
