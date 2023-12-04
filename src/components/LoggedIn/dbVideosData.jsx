import { create } from "zustand";

const useVideosDB = create((set) => ({
  videosDB: null,
  setUser: (videosData) => set({ videosDB: videosData }),
}));

export default useVideosDB;
