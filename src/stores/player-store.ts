import { createStore } from "zustand/vanilla";
import { songsArr } from "@/app/tracks/constants";

export type PlayerState = {
  isPlay: boolean,
  activeSong: typeof songsArr[number] | null,
  openAboutSongId: number | null
}

export type PlayerActions = {
  changeIsPlay: (value: boolean) => void
  setActiveSong: (song: typeof songsArr[number] | null) => void,
  setOpenAboutSongId: (id: number | null) => void
}

export type PlayerStore = PlayerState & PlayerActions

export const defaultInitState: PlayerState = {
  isPlay: false,
  activeSong: null,
  openAboutSongId: null
};

export const createPlayerStore = (
  initState: PlayerState = defaultInitState
) => {
  return createStore<PlayerStore>()((set) => ({
    ...initState,
    changeIsPlay: (value) => set(() => ({ isPlay: value })),
    setActiveSong: (song) => set(() => ({ activeSong: song })),
    setOpenAboutSongId: (id) => set(() => ({ openAboutSongId: id }))
  }));
};