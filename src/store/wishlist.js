import { create } from 'zustand';

export const useWishlistStore = create((set) => ({
  items: [],
  addItem: (item) => set(state => ({ items: [...state.items, item] })),
  removeItem: (id) => set(state => ({ items: state.items.filter(i=>i.id!==id) }))
}));
