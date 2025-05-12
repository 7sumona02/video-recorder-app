// components/VideoGrid.tsx
"use client";

import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { Video } from "@/types";
import { getVideos } from "@/lib/api/video";
import { LoaderCircle } from "lucide-react";

export default function VideoGrid() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading)
    return (
      <div className="w-screen flex justify-center py-8">
        <LoaderCircle className="size-10 animate-spin text-purple-400" />
      </div>
    );
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (videos.length === 0)
    return <div className="text-center py-8">No videos found</div>;

  return (
    <div className="video-grid max-w-[1440px] mx-auto md:px-24 pt-8 grid md:grid-cols-4 grid-cols-1 justify-items-center gap-6 pb-20">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          id={video.id}
          title={video.title}
          thumbnail={video.thumbnail}
          userImg={video.userImg}
          username={video.username}
          createdAt={new Date(video.createdAt)}
          views={video.views}
          visibility={video.visibility}
          duration={video.duration}
        />
      ))}
    </div>
  );
}
