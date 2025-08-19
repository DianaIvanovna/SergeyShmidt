"use client";
import React, { useEffect } from "react";
import { AudioList } from "@/app/tracks/AudioList";
import AudioPlayer from "./AudioPlayer";
import { usePlayerContext } from "@/providers/player-store-provider";

export const AudioContent = () => {
  const context = usePlayerContext();

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