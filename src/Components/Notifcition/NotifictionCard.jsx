import React from "react";

const NotifictionCard = ({ userImage, userName, message, time, action }) => {
  return (
    <section className="flex items-center gap-x-3 hover:cursor-pointer hover:bg-base-200 px-4 py-3 rounded-full">
      <img
        src={userImage}
        alt={`${userName} profile image`}
        className="w-[80px] max-sm:w-[50px] rounded-full"
      />
      <section>
        <p className="text-black dark:text-white/90 text-lg max-sm:text-sm">
          {userName} {action}
        </p>
        <p className="max-sm:text-sm">{message}</p>
        <span className="max-sm:text-sm">{time}</span>
      </section>
    </section>
  );
};

export default NotifictionCard;
