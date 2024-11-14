import React from "react";

const Container = ({ children, customeStyle }) => {
  return (
    <section
      className={`col-span-full lg:col-start-4 lg:col-span-9 w-full lg:ms-auto ${customeStyle}`}
    >
      {children}
    </section>
  );
};

export default Container;
