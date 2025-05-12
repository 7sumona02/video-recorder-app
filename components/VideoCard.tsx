"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Check, Ellipsis, Eye, Link2 } from "lucide-react";
import { Visibility } from "@/types";

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  userImg: string;
  username: string;
  createdAt: Date;
  views: number;
  visibility: Visibility;
  duration: number | null;
}

const VideoCard = ({
  id,
  title,
  thumbnail,
  userImg,
  username,
  createdAt,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(`${window.location.origin}/video/${id}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Link
      href={`/video/${id}`}
      className="video-card group relative block w-full max-w-[320px] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:shadow-neutral-100 transition-all duration-200 bg-white dark:bg-gray-800 border"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized // Remove this if you configure image domains
        />

        {/* Duration Badge */}
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full">
            {Math.floor(duration / 60)}:{String(duration % 60).padStart(2, "0")}
          </div>
        )}

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 p-2 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/80"
          aria-label="Copy video link"
        >
          {copied ? (
            <Check className="w-4 h-4 text-white" />
          ) : (
            <Link2 className="w-4 h-4 text-white" />
          )}
        </button>
        <button className="absolute top-11 right-2 p-2 bg-black/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black/80">
          <Ellipsis className="w-4 h-4 text-white" />
        </button>
      </div>

      {/* Video Info */}
      <div className="p-3">
        {/* Title - single line with ellipsis */}
        <h3 className="font-medium text-sm md:text-base line-clamp-2 h-[2.5em] mb-2">
          {title}
        </h3>

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={userImg || "https://github.com/shadcn.png"} />
              <AvatarFallback>
                {username.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="truncate max-w-[100px]">{username}</span>
          </div>

          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              <Eye className="w-3 h-3" />
              <span>{views.toLocaleString()}</span>
            </div>
            <span>•</span>
            <span>
              {createdAt.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
        </div>

        {/* Visibility Badge */}
        <div
          className={`mt-2 text-xs px-2 py-1 rounded-full w-fit ${
            visibility === "public"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
          }`}
        >
          {visibility}
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
