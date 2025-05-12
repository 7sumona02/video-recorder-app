import Header from "@/components/Header";
import VideoGrid from "@/components/VideoGrid";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="All Videos" subheader="Public Library" />
      <VideoGrid />
    </div>
  );
};

export default page;
