import { useEffect } from 'react';
import type { CartNotificationProps } from './types';

export const CartNotification = ({
  productName,
  productImage,
  price,
  onClose,
  onGoToCart,
}: CartNotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm animate-slide-in">
      <div className="flex items-start gap-3">
        <img
          src={productImage}
          alt={productName}
          className="w-16 h-16 object-cover rounded"
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect fill="%23f3f4f6" width="64" height="64"/%3E%3C/svg%3E';
          }}
        />
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h4 className="font-semibold text-sm text-gray-900">Adicionado ao carrinho!</h4>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Fechar notificação"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-gray-600 mb-1 line-clamp-2">{productName}</p>
          <p className="text-sm font-bold text-gray-900 mb-2">R$ {price.toFixed(2)}</p>
          <button
            onClick={onGoToCart}
            className="w-full bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded hover:bg-blue-700 transition-colors"
          >
            Ver Carrinho
          </button>
        </div>
      </div>
    </div>
  );
};
