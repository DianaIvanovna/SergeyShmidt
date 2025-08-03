"use client";
import React from "react";
import { AudioList } from "@/app/tracks/AudioList";
import AudioPlayer from "./AudioPlayer";
import { usePlayerContext } from "@/providers/player-store-provider";
import { useLockOrientation } from "@/app/useLockOrientation";

export const AudioContent = () => {
  const context = usePlayerContext();
  useLockOrientation();
  return (
    <>
      <AudioList />
      <AudioPlayer context={context} />
    </>
  );
};