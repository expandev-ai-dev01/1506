export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  available: boolean;
  category: string;
  discountPercentage?: number;
}

export interface ProductListParams {
  page?: number;
  limit?: number;
  sortBy?: 'relevance' | 'price_asc' | 'price_desc' | 'name_asc' | 'name_za' | 'rating';
  category?: string;
}

export interface ProductListResponse {
  products: Product[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}
