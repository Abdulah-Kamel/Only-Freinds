import React, { useState } from "react";

const ActionIcon = ({
  icon: Icon,
  onclike,
  Liked,
  LikedIcon,
  number,
  type,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    if (onclike) onclike();

    // Reset the scale after the animation
    setTimeout(() => setIsClicked(false), 1000); // Matches the CSS transition duration
  };

  return (
    <section className="flex items-center gap-2 px-4">
      <button
        className="flex items-center text-black dark:text-white/90 hover:text-black/70 dark:hover:text-white/50 transition-colors hover:cursor-pointer"
        onClick={handleClick}
      >
        {Liked ? (
          <LikedIcon
            className={`text-3xl text-red-600 hover:text-red-700 ${
              isClicked ? "animate-ping" : ""
            }`}
          />
        ) : (
          <Icon className="text-3xl" />
        )}
      </button>
      <p className="text-black dark:text-white/90">
        {number} <span className="font-bold">{type}</span>
      </p>
    </section>
  );
};

export default ActionIcon;
