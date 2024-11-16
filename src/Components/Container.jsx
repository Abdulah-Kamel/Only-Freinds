import React from "react";
import { useLocation } from "react-router-dom";

const Container = ({ children, customeStyle }) => {
  const { pathname } = useLocation();
  return (
    <section
      className={`col-span-full lg:col-start-4 ${pathname !== "/" ? "lg:col-span-9" :""}lg:col-span-6 w-full lg:ms-auto ${customeStyle}`}
    >
      {children}
    </section>
  );
};

export default Container;
