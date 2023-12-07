import { create } from "zustand";

const useDetailsVideo = create((set) => ({
  detailsVideosDB: null,
  setUser: (videosData) => set({ detailsVideosDB: videosData }),
}));

export default useDetailsVideo;
