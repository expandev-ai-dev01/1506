import type { Product, ProductListParams, ProductListResponse } from '../types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Bolo de Chocolate Premium',
    image: '/img/products/chocolate-cake.jpg',
    price: 89.9,
    originalPrice: 119.9,
    rating: 4.8,
    reviewCount: 127,
    shortDescription: 'Delicioso bolo de chocolate com cobertura cremosa e recheio de brigadeiro',
    available: true,
    category: 'chocolate',
    discountPercentage: 25,
  },
  {
    id: '2',
    name: 'Bolo Red Velvet',
    image: '/img/products/red-velvet.jpg',
    price: 95.0,
    rating: 4.9,
    reviewCount: 89,
    shortDescription: 'Clássico bolo red velvet com cream cheese e decoração elegante',
    available: true,
    category: 'especial',
  },
  {
    id: '3',
    name: 'Bolo de Cenoura com Chocolate',
    image: '/img/products/carrot-cake.jpg',
    price: 65.0,
    originalPrice: 85.0,
    rating: 4.7,
    reviewCount: 203,
    shortDescription: 'Tradicional bolo de cenoura com cobertura de chocolate',
    available: true,
    category: 'tradicional',
    discountPercentage: 24,
  },
  {
    id: '4',
    name: 'Bolo de Morango',
    image: '/img/products/strawberry-cake.jpg',
    price: 79.9,
    rating: 4.6,
    reviewCount: 156,
    shortDescription: 'Bolo de massa branca com recheio e cobertura de morangos frescos',
    available: true,
    category: 'frutas',
  },
  {
    id: '5',
    name: 'Bolo de Limão',
    image: '/img/products/lemon-cake.jpg',
    price: 72.0,
    rating: 4.5,
    reviewCount: 98,
    shortDescription: 'Refrescante bolo de limão com cobertura de merengue',
    available: true,
    category: 'frutas',
  },
  {
    id: '6',
    name: 'Bolo Floresta Negra',
    image: '/img/products/black-forest.jpg',
    price: 105.0,
    originalPrice: 135.0,
    rating: 4.9,
    reviewCount: 145,
    shortDescription: 'Sofisticado bolo com camadas de chocolate, chantilly e cerejas',
    available: false,
    category: 'especial',
    discountPercentage: 22,
  },
  {
    id: '7',
    name: 'Bolo de Coco',
    image: '/img/products/coconut-cake.jpg',
    price: 68.0,
    rating: 4.4,
    reviewCount: 112,
    shortDescription: 'Bolo macio de coco com cobertura de coco ralado',
    available: true,
    category: 'tradicional',
  },
  {
    id: '8',
    name: 'Bolo de Nozes',
    image: '/img/products/walnut-cake.jpg',
    price: 82.0,
    rating: 4.6,
    reviewCount: 87,
    shortDescription: 'Bolo artesanal com nozes e cobertura de caramelo',
    available: true,
    category: 'especial',
  },
  {
    id: '9',
    name: 'Bolo de Banana',
    image: '/img/products/banana-cake.jpg',
    price: 58.0,
    originalPrice: 75.0,
    rating: 4.3,
    reviewCount: 134,
    shortDescription: 'Bolo caseiro de banana com canela e cobertura de açúcar',
    available: true,
    category: 'tradicional',
    discountPercentage: 23,
  },
  {
    id: '10',
    name: 'Bolo de Maracujá',
    image: '/img/products/passion-fruit-cake.jpg',
    price: 75.0,
    rating: 4.7,
    reviewCount: 91,
    shortDescription: 'Bolo tropical de maracujá com cobertura cremosa',
    available: true,
    category: 'frutas',
  },
  {
    id: '11',
    name: 'Bolo Ópera',
    image: '/img/products/opera-cake.jpg',
    price: 125.0,
    rating: 5.0,
    reviewCount: 67,
    shortDescription: 'Sofisticado bolo francês com camadas de café e chocolate',
    available: true,
    category: 'especial',
  },
  {
    id: '12',
    name: 'Bolo de Fubá',
    image: '/img/products/cornmeal-cake.jpg',
    price: 52.0,
    rating: 4.5,
    reviewCount: 178,
    shortDescription: 'Tradicional bolo de fubá cremoso com erva-doce',
    available: true,
    category: 'tradicional',
  },
  {
    id: '13',
    name: 'Bolo de Abacaxi',
    image: '/img/products/pineapple-cake.jpg',
    price: 70.0,
    originalPrice: 90.0,
    rating: 4.6,
    reviewCount: 143,
    shortDescription: 'Bolo invertido de abacaxi caramelizado',
    available: true,
    category: 'frutas',
    discountPercentage: 22,
  },
  {
    id: '14',
    name: 'Bolo Naked Cake',
    image: '/img/products/naked-cake.jpg',
    price: 98.0,
    rating: 4.8,
    reviewCount: 102,
    shortDescription: 'Bolo rústico com frutas vermelhas e decoração minimalista',
    available: true,
    category: 'especial',
  },
  {
    id: '15',
    name: 'Bolo de Laranja',
    image: '/img/products/orange-cake.jpg',
    price: 62.0,
    rating: 4.4,
    reviewCount: 119,
    shortDescription: 'Bolo úmido de laranja com calda cítrica',
    available: true,
    category: 'frutas',
  },
];

const sortProducts = (products: Product[], sortBy: string): Product[] => {
  const sorted = [...products];

  switch (sortBy) {
    case 'price_asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price_desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'name_asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name_za':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'relevance':
    default:
      return sorted.sort((a, b) => {
        const scoreA = a.reviewCount * 0.3 + a.rating * 0.7;
        const scoreB = b.reviewCount * 0.3 + b.rating * 0.7;
        return scoreB - scoreA;
      });
  }
};

export const productService = {
  async list(params: ProductListParams = {}): Promise<ProductListResponse> {
    const { page = 1, limit = 12, sortBy = 'relevance', category } = params;

    await new Promise((resolve) => setTimeout(resolve, 300));

    let filteredProducts = category
      ? mockProducts.filter((p) => p.category === category)
      : mockProducts;

    const sortedProducts = sortProducts(filteredProducts, sortBy);

    const total = sortedProducts.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const products = sortedProducts.slice(startIndex, endIndex);

    return {
      products,
      total,
      page,
      limit,
      totalPages,
    };
  },

  async getById(id: string): Promise<Product | null> {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return mockProducts.find((p) => p.id === id) || null;
  },
};
