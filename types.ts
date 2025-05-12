export type Visibility = "public" | "private";

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  userImg: string;
  username: string;
  createdAt: string;
  views: number;
  visibility: Visibility;
  duration: number | null;
}
