import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Pages/SideBar";
import Followers_Bar from "../../Pages/Followers_Bar";

const LayOut = () => {
  return (
    <section className="min-h-screen grid grid-cols-12">
      <SideBar />
      <Outlet className="col-span-full" />
      <Followers_Bar />
    </section>
  );
};

export default LayOut;
