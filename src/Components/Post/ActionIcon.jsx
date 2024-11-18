import React from 'react';

const ActionIcon = ({ icon: Icon, onclike, Emoji }) => {
  return (
    <button
      className="flex items-center text-black dark:text-white/90 hover:text-black/70 dark:hover:text-white/50 transition-colors hover:cursor-pointer px-4"
      onClick={onclike}
    >
      {Emoji ? (
        <span className="text-3xl me-1">{Emoji}</span> // Display selected emoji
      ) : (
        <Icon className="text-3xl me-1" /> // Display default icon
      )}
    </button>
  );
};

export default ActionIcon;
