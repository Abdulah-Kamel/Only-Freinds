import React from "react";

const AboutItem = ({ count, title }) => {
  return (
    <section className="text-center border-[#5d5d5d] border rounded-lg p-4 w-1/3 max-sm:w-full">
      <p className="font-bold text-2xl">{count}</p>
      <span className="text-gray-300">{title}</span>
    </section>
  );
};

export default AboutItem;
