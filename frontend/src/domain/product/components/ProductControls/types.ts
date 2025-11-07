export interface ProductControlsProps {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  sortBy: string;
  onPageChange: (page: number) => void;
  onLimitChange: (limit: number) => void;
  onSortChange: (sortBy: string) => void;
}
