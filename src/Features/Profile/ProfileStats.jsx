import React from "react";

const ProfileStats = ({ followers_count, following_count, style }) => {
  return (
    <ul
      className={`flex gap-4 ${style} max-sm:border-y-2 border-base-300 max-sm:p-4 max-sm:mt-4 mt-2 justify-center items-center w-full`}
    >
      <li className="text-xl dark:text-white/90">
        <span className="font-bold me-2">10</span>posts
      </li>
      <li className="text-xl dark:text-white/90">
        <span className="font-bold me-2">{followers_count}</span>
        followers
      </li>
      <li className="text-xl dark:text-white/90">
        <span className="font-bold me-2">{following_count}</span>
        following
      </li>
    </ul>
  );
};

export default ProfileStats;
