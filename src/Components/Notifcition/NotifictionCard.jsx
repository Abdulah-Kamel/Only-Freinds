import React from "react";

const NotifictionCard = ({ userImage, userName, message, time, action }) => {
  return (
    <section className="flex items-center gap-x-3 hover:cursor-pointer hover:bg-[#272C33] px-4 py-2 rounded-full">
      <img
        src={userImage}
        alt={`${userName} profile image`}
        className="w-[80px] max-sm:w-[50px] rounded-full"
      />
      <section>
        <p className="text-[#f5f5f5] text-lg max-sm:text-sm">
          {userName} {action}
        </p>
        <p className="text-gray-300 max-sm:text-sm">{message}</p>
        <span className="text-gray-300 max-sm:text-sm">{time}</span>
      </section>
    </section>
  );
};

export default NotifictionCard;
