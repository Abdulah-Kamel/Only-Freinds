import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Pages/NavBar";

const LayOut = () => {
  return (
    <section className="min-h-screen grid grid-cols-12">
      <NavBar className="" />
      <Outlet className="col-span-full"/>
    </section>
  );
};

export default LayOut;
