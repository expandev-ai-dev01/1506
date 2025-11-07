export interface CartNotificationProps {
  productName: string;
  productImage: string;
  price: number;
  onClose: () => void;
  onGoToCart: () => void;
}
