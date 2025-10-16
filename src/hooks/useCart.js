import { useCartStore } from '../store/cart';

export const useCart = () => {
  const items = useCartStore(state => state.items);
  const addItem = useCartStore(state => state.addItem);
  const removeItem = useCartStore(state => state.removeItem);
  const clear = useCartStore(state => state.clear);

  return { items, addItem, removeItem, clear };
};
