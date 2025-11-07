import type { Product, ProductListParams } from '../../types';

export interface UseProductListOptions {
  initialParams?: ProductListParams;
  enabled?: boolean;
}

export interface UseProductListReturn {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  isLoading: boolean;
  error: Error | null;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setSortBy: (sortBy: ProductListParams['sortBy']) => void;
  setCategory: (category: string | undefined) => void;
  refetch: () => void;
}
