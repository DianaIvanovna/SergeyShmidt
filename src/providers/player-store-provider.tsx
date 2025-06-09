"use client";

import { createContext, type ReactNode, useContext, useRef } from "react";
import { useStore } from "zustand";
import { createPlayerStore, PlayerStore } from "@/stores/player-store";


export type PlayerStoreApi = ReturnType<typeof createPlayerStore>

export const PlayerStoreContext = createContext<PlayerStoreApi | null>(
  null
);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

export const PlayerStoreProvider = ({
                                      children
                                    }: CounterStoreProviderProps) => {
  const storeRef = useRef<PlayerStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createPlayerStore();
  }

  return (
    <PlayerStoreContext.Provider value={storeRef.current}>
      {children}
    </PlayerStoreContext.Provider>
  );
};

export const usePlayerContext = () => {
  const playerStoreContext = useContext(PlayerStoreContext);

  if (!playerStoreContext) {
    throw new Error(`usePlayerStore must be used within PlayerStoreContext`);
  }

  return playerStoreContext;
};

export const usePlayerStore = <T, >(
  selector: (store: PlayerStore) => T
): T => {
  const playerStoreContext = usePlayerContext();
  return useStore(playerStoreContext, selector);
};

