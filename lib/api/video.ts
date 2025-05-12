// lib/api/video.ts

import { Video } from "@/types";

export async function getVideos(): Promise<Video[]> {
  const response = await fetch("/api/videos");
  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }
  return response.json();
}
