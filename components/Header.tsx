import React, { useId } from "react";
import { Input } from "./ui/input";
import {
  AlignRight,
  Camera,
  ChevronDownIcon,
  Search,
  Upload,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface HeaderProps {
  subheader: string;
  title: string;
  userImg?: string; // Make it optional
  showAvatar?: boolean; // Add this new prop
}

const Header = ({
  subheader,
  title,
  userImg,
  showAvatar = false, // Default to false
}: HeaderProps) => {
  const id = useId();
  return (
    <div className="max-w-[1440px] mx-auto md:px-24 py-10 flex flex-col space-y-10">
      <div className="flex justify-between">
        <div className="flex items-center space-x-3">
          {showAvatar && ( // Only show avatar if showAvatar is true
            <div>
              <Avatar className="size-14">
                <AvatarImage src={userImg} alt="User avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          )}
          <div>
            <div className="flex flex-col space-y-5">
              <div className="space-y-1">
                <p className="text-sm text-neutral-600">{subheader}</p>
                <p className="text-2xl font-semibold">{title}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="aspect-square max-sm:p-0 rounded-full"
          >
            <Upload className="sm:-ms-1" size={16} aria-hidden="true" />
            <span className="max-sm:sr-only">Upload a video</span>
          </Button>
          <Button
            variant="outline"
            className="aspect-square max-sm:p-0 rounded-full bg-purple-400 hover:bg-purple-500/70 hover:text-white text-white"
          >
            <Camera
              className="sm:-ms-1 text-white"
              size={16}
              aria-hidden="true"
            />
            <span className="max-sm:sr-only">Record a video</span>
          </Button>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="*:not-first:mt-2 w-[26vw]">
          <div className="relative">
            <Input
              id={id}
              className="peer ps-9 rounded-full"
              placeholder="Search for videos, tags, folders..."
              type="search"
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
              <Search size={16} aria-hidden="true" />
            </div>
          </div>
        </div>

        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="aspect-square max-sm:p-0 rounded-full"
              >
                <AlignRight className="sm:-ms-1" size={16} aria-hidden="true" />
                <span className="max-sm:sr-only">Most viewed</span>
                <ChevronDownIcon
                  className="-me-1 ml-1 opacity-60"
                  size={16}
                  aria-hidden="true"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="max-w-xl">
              <DropdownMenuItem>Most Recent</DropdownMenuItem>
              <DropdownMenuItem>Option 2</DropdownMenuItem>
              <DropdownMenuItem>Option 3</DropdownMenuItem>
              <DropdownMenuItem>Option 4</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
