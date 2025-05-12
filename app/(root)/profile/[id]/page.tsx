import Header from "@/components/Header";
import VideoGrid from "@/components/VideoGrid";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="max-w-[1440px] mx-auto text-2xl">
      <Header
        subheader="sumonadotwork@gmail.com"
        title="Sumona | Front-end Developer"
        userImg={"https://github.com/shadcn.png" ?? ""}
        showAvatar={true}
      />
      <VideoGrid />
    </div>
  );
};

export default Page;
