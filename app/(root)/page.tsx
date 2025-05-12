import Header from "@/components/Header";
import React from "react";

const page = () => {
  return (
    <div>
      <Header title="All Videos" subheader="Public Library" />
      <div className="md:px-24 text-xl">Welcome to Snapcast</div>
    </div>
  );
};

export default page;
