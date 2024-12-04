import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const LikeComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [like, setLike] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setLike(!like);
    // Reset the scale after the animation
    setTimeout(() => setIsClicked(false), 2200); // Matches the CSS transition duration
  };

  return (
    <button
      className="flex items-center text-black dark:text-white/90 hover:text-black/70 dark:hover:text-white/50 transition-colors hover:cursor-pointer"
      onClick={handleClick}
    >
      {like ? (
        <FaHeart
          className={`text-3xl text-red-600 hover:text-red-700 ${
            isClicked ? "like" : ""
          }`}
        />
      ) : (
        <FaRegHeart className="text-3xl" />
      )}
    </button>
  );
};

export default LikeComponent;
