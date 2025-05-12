// app/api/videos/route.ts
import { NextResponse } from "next/server";

// Sample video data
const videos = [
  {
    id: "1",
    title: "Getting Started with Next.js",
    thumbnail:
      "https://i.pinimg.com/736x/a4/52/ea/a452eae371f079b141494c5aff07a140.jpg",
    userImg: "https://randomuser.me/api/portraits/men/1.jpg",
    username: "johndoe",
    createdAt: "2023-10-15T10:00:00Z",
    views: 1245,
    visibility: "public" as const,
    duration: 720, // 12 minutes in seconds
  },
  {
    id: "2",
    title: "React Hooks Explained",
    thumbnail:
      "https://i.pinimg.com/736x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg",
    userImg: "https://randomuser.me/api/portraits/women/2.jpg",
    username: "janedoe",
    createdAt: "2023-09-20T14:30:00Z",
    views: 3567,
    visibility: "public" as const,
    duration: 900, // 15 minutes
  },
  {
    id: "3",
    title: "TypeScript Crash Course",
    thumbnail:
      "https://i.pinimg.com/736x/de/06/91/de0691d0b23e9bed0c6a1b1dc471259c.jpg",
    userImg: "https://randomuser.me/api/portraits/men/3.jpg",
    username: "devguy",
    createdAt: "2023-11-05T08:15:00Z",
    views: 892,
    visibility: "public" as const,
    duration: 1800, // 30 minutes
  },
  {
    id: "4",
    title: "Building a Fullstack App",
    thumbnail:
      "https://i.pinimg.com/736x/8f/5f/14/8f5f14eaebc083eb5ad9706f0ca35094.jpg",
    userImg: "https://randomuser.me/api/portraits/women/4.jpg",
    username: "codequeen",
    createdAt: "2023-08-12T16:45:00Z",
    views: 5234,
    visibility: "private" as const,
    duration: 2700, // 45 minutes
  },
  {
    id: "5",
    title: "CSS Grid Layout Tutorial",
    thumbnail:
      "https://i.pinimg.com/736x/dd/9c/e0/dd9ce009dcbf2648e8d7bae8dd5c86ea.jpg",
    userImg: "https://randomuser.me/api/portraits/men/5.jpg",
    username: "csswizard",
    createdAt: "2023-12-01T11:20:00Z",
    views: 1789,
    visibility: "public" as const,
    duration: 600, // 10 minutes
  },
  {
    id: "6",
    title: "Mastering Git & GitHub",
    thumbnail:
      "https://i.pinimg.com/736x/dc/16/3b/dc163b42fb863411d390c6dfba7ebf73.jpg",
    userImg: "https://randomuser.me/api/portraits/men/6.jpg",
    username: "gitguru",
    createdAt: "2023-07-10T09:10:00Z",
    views: 2143,
    visibility: "public" as const,
    duration: 1500, // 25 minutes
  },
  {
    id: "7",
    title: "Deploying Apps with Vercel",
    thumbnail:
      "https://i.pinimg.com/736x/22/67/75/2267751062e282f90abe68e706cf534b.jpg",
    userImg: "https://randomuser.me/api/portraits/women/7.jpg",
    username: "deploygirl",
    createdAt: "2023-06-18T13:25:00Z",
    views: 3210,
    visibility: "public" as const,
    duration: 840, // 14 minutes
  },
  {
    id: "8",
    title: "Understanding REST APIs",
    thumbnail:
      "https://i.pinimg.com/736x/29/df/fe/29dffeb24bcbb18e567a9e96fb089211.jpg",
    userImg: "https://randomuser.me/api/portraits/men/8.jpg",
    username: "apimaster",
    createdAt: "2023-09-01T15:50:00Z",
    views: 1876,
    visibility: "private" as const,
    duration: 1320, // 22 minutes
  },
];

export async function GET() {
  // Simulate a small delay to mimic a real API
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(videos);
}
