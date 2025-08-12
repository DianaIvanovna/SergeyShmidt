"use client";
import React, { useEffect } from "react";
import { AudioList } from "@/app/tracks/AudioList";
import AudioPlayer from "./AudioPlayer";
import { usePlayerContext } from "@/providers/player-store-provider";
import { useLockOrientation } from "@/app/useLockOrientation";

export const AudioContent = () => {
  const context = usePlayerContext();
  useLockOrientation();

  useEffect(()=>{
    return ()=> {
      context.getState().resetStore()
    }
  },[])
  return (
    <>
      <AudioList />
      <AudioPlayer context={context} />
    </>
  );
};