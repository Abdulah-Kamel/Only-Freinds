import React from "react";

const Container = ({ children, customeStyle }) => {
  return (
    <section
      className={` text-white w-full lg:ms-auto ${customeStyle}`}
    >
      {children}
    </section>
  );
};

export default Container;
