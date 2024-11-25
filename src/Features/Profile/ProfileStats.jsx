import React from "react";

const ProfileStats = ({followers_count, following_count}) => {
  return (
    <ul className="flex gap-4 max-sm:flex-col max-sm:items-center">
      <li className="text-xl dark:text-white/90">
        <span className="font-bold me-2">10</span>posts
      </li>
      <li className="bg-black dark:bg-white/70 w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
      <li className="text-xl dark:text-white/90">
        <span className="font-bold me-2">{followers_count}</span>
        followers
      </li>
      <li className="bg-black dark:bg-white/70 w-[1px] max-sm:h-[1px] max-sm:w-full"></li>
      <li className="text-xl dark:text-white/90">
        <span className="font-bold me-2">{following_count}</span>
        following
      </li>
    </ul>
  );
};

export default ProfileStats;
