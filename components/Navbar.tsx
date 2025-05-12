"use client";
import { Space_Mono } from "next/font/google";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";
import Link from "next/link";

const sm = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const Navbar = () => {
  const user = {};
  const router = useRouter();
  return (
    <div
      className={`text-xl ${sm.className} flex justify-between items-center md:px-24 py-4 border-b shadow-xs shadow-purple-400`}
    >
      <Link href="/" className="cursor-pointer">
        <div>Snapcast</div>
      </Link>

      {user && (
        <div
          onClick={() => router.push("/profile/12")}
          className="cursor-pointer"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      )}
    </div>
  );
};

export default Navbar;
