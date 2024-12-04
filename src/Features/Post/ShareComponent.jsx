import React, { useState } from "react";
import { PiShareFat } from "react-icons/pi";

const ShareComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [postLink, setPostLink] = useState("");
  const handleClick = () => {
    setIsClicked(true);
    setPostLink("/posts/id");
  };

  return (
    <button
      className="flex items-center text-black dark:text-white/90 hover:text-black/70 dark:hover:text-white/50 transition-colors hover:cursor-pointer"
      onClick={handleClick}
    >
      <PiShareFat className="text-3xl"/>
    </button>
  );
};

export default ShareComponent;
