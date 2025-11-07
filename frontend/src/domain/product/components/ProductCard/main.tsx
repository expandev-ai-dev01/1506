import { cn } from '@/core/utils';
import type { ProductCardProps } from './types';

export const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(product.id);
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart && product.available) {
      onAddToCart(product.id);
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ⯨
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return (
    <div
      className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer relative"
      onClick={handleCardClick}
    >
      {product.discountPercentage && (
        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded z-10">
          -{product.discountPercentage}%
        </div>
      )}

      <div className="aspect-square bg-gray-100 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23f3f4f6" width="300" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3ESem imagem%3C/text%3E%3C/svg%3E';
          }}
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        <p className="text-xs text-gray-600 mb-3 line-clamp-2 min-h-[32px]">
          {product.shortDescription}
        </p>

        <div className="flex items-center gap-1 mb-3">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="text-xs text-gray-600 ml-1">
            {product.rating.toFixed(1)} ({product.reviewCount})
          </span>
        </div>

        <div className="mb-3">
          {product.originalPrice && (
            <div className="text-xs text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2)}
            </div>
          )}
          <div className="text-xl font-bold text-gray-900">R$ {product.price.toFixed(2)}</div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.available}
          className={cn(
            'w-full py-2 px-4 rounded-md font-medium text-sm transition-colors',
            product.available
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          )}
        >
          {product.available ? 'Adicionar ao Carrinho' : 'Indisponível'}
        </button>
      </div>
    </div>
  );
};
