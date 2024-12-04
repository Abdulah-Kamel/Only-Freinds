import React, { useState } from "react";

const ActionIcon = ({
  number,
  type,
  child
}) => {
  
  return (
    <section className="flex max-sm:flex-col max-sm:justify-center items-center gap-2 px-4 max-sm:px-1">
        {child}
      <p className="text-black dark:text-white/90">
        {number} <span className="font-bold">{type}</span>
      </p>
    </section>
  );
};

export default ActionIcon;
