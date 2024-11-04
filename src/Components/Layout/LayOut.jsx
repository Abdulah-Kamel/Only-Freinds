import React from "react";
import { Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <>
      <div>Nav Bar</div>
      <Outlet />
      <div>Nav Bar</div>
    </>
  );
};

export default LayOut;
