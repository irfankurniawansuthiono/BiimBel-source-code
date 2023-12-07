import { create } from "zustand";

const useFreeVideosDB = create((set) => ({
  freeVideosDB: null,
  setUser: (videosData) => set({ freeVideosDB: videosData }),
}));

export default useFreeVideosDB;
