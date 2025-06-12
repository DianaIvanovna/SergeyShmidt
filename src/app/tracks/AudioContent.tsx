"use client";
import React from "react";
import { AudioList } from "@/app/tracks/AudioList";
import AudioPlayer from "./AudioPlayer";
import { usePlayerContext } from "@/providers/player-store-provider";

export const AudioContent = () => {
  const context = usePlayerContext();
  return (
    <>
      <AudioList />
      <AudioPlayer context={context} />
    </>
  );
};