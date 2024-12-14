import React from "react";

const HeaderSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex items-center gap-4">
        <div className="skeleton h-20 w-20 shrink-0 rounded-full"></div>
        <div className="flex flex-col gap-4">
          <div className="skeleton h-4 w-60"></div>
          <div className="skeleton h-3 w-60"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSkeleton;
