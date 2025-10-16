import { useWishlistStore } from '../store/wishlist';
export const useWishlist = () => {
  const items = useWishlistStore(state => state.items);
  const addItem = useWishlistStore(state => state.addItem);
  const removeItem = useWishlistStore(state => state.removeItem);
  return { items, addItem, removeItem };
};
