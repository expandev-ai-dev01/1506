import { cn } from '@/core/utils';
import type { ProductControlsProps } from './types';

export const ProductControls = ({
  total,
  page,
  limit,
  totalPages,
  sortBy,
  onPageChange,
  onLimitChange,
  onSortChange,
}: ProductControlsProps) => {
  const sortOptions = [
    { value: 'relevance', label: 'Relevância' },
    { value: 'price_asc', label: 'Menor Preço' },
    { value: 'price_desc', label: 'Maior Preço' },
    { value: 'name_asc', label: 'Nome (A-Z)' },
    { value: 'name_za', label: 'Nome (Z-A)' },
    { value: 'rating', label: 'Melhor Avaliação' },
  ];

  const limitOptions = [12, 24, 36, 48];

  const startItem = (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-sm text-gray-600">
          Mostrando {startItem}-{endItem} de {total} produtos
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-700 whitespace-nowrap">
              Ordenar por:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="limit" className="text-sm text-gray-700 whitespace-nowrap">
              Itens por página:
            </label>
            <select
              id="limit"
              value={limit}
              onChange={(e) => onLimitChange(Number(e.target.value))}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {limitOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={() => onPageChange(1)}
            disabled={page === 1}
            className={cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              page === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            )}
          >
            Primeira
          </button>

          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className={cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              page === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            )}
          >
            Anterior
          </button>

          <div className="flex items-center gap-1">
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (page <= 3) {
                pageNum = i + 1;
              } else if (page >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = page - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => onPageChange(pageNum)}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    page === pageNum
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            className={cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              page === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            )}
          >
            Próxima
          </button>

          <button
            onClick={() => onPageChange(totalPages)}
            disabled={page === totalPages}
            className={cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              page === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            )}
          >
            Última
          </button>
        </div>
      )}
    </div>
  );
};
