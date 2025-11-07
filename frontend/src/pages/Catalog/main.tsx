import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductList } from '@/domain/product/hooks/useProductList';
import { ProductGrid } from '@/domain/product/components/ProductGrid';
import { ProductControls } from '@/domain/product/components/ProductControls';
import { CartNotification } from '@/domain/cart/components/CartNotification';
import { useCartStore } from '@/domain/cart/stores/cartStore';
import { ErrorMessage } from '@/core/components/ErrorMessage';
import type { Product } from '@/domain/product/types';

export const CatalogPage = () => {
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [notification, setNotification] = useState<Product | null>(null);

  const {
    products,
    total,
    page,
    limit,
    totalPages,
    isLoading,
    error,
    setPage,
    setLimit,
    setSortBy,
  } = useProductList();

  const [sortBy, setSortByState] = useState('relevance');

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product && product.available) {
      addItem({
        productId: product.id,
        productName: product.name,
        productImage: product.image,
        price: product.price,
      });
      setNotification(product);
    }
  };

  const handleViewDetails = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleSortChange = (newSortBy: string) => {
    setSortByState(newSortBy);
    setSortBy(newSortBy as any);
  };

  if (error) {
    return (
      <ErrorMessage
        title="Erro ao carregar produtos"
        message="Não foi possível carregar o catálogo de produtos. Por favor, tente novamente."
        onRetry={() => window.location.reload()}
      />
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Catálogo de Bolos</h2>
        <p className="text-gray-600">Explore nossa seleção de bolos deliciosos!</p>
      </div>

      <ProductControls
        total={total}
        page={page}
        limit={limit}
        totalPages={totalPages}
        sortBy={sortBy}
        onPageChange={setPage}
        onLimitChange={setLimit}
        onSortChange={handleSortChange}
      />

      <ProductGrid
        products={products}
        isLoading={isLoading}
        onAddToCart={handleAddToCart}
        onViewDetails={handleViewDetails}
      />

      {notification && (
        <CartNotification
          productName={notification.name}
          productImage={notification.image}
          price={notification.price}
          onClose={() => setNotification(null)}
          onGoToCart={() => navigate('/cart')}
        />
      )}
    </div>
  );
};

export default CatalogPage;
