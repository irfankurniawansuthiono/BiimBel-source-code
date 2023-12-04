import { create } from "zustand";

const useUserDBStore = create((set) => ({
  userDB: null,
  setUser: (userData) => set({ userDB: userData }),
}));

export default useUserDBStore;
