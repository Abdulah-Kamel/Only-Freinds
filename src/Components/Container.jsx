import React from "react";
import { useLocation } from "react-router-dom";

const Container = ({ children, customeStyle }) => {
  const { pathname } = useLocation();
  return (
    <section
      className={`lg:col-start-3 ${pathname == "/" ? "lg:col-span-7" :"col-span-full "} w-full col-span-full lg:ms-auto ${customeStyle}`}
    >
      {children}
    </section>
  );
};

export default Container;
