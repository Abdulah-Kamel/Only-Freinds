import React from "react";
import { BsEmojiSmile } from "react-icons/bs";

const CommentInput = () => {
  return (
    <>
      <button className="text-gray-300 transition-colors px-2 mt-4">
        view all 2,000 comments
      </button>

      <div className="flex justify-between items-center mt-1 relative">
        <input
          type="text"
          name="comment"
          placeholder="Add a comment"
          className="w-full px-2 py-2 bg-transparent border-none outline-none text-stone-100 placeholder:text-stone-400"
        />
        <BsEmojiSmile className="text-xl absolute right-0 cursor-pointer" />
      </div>
    </>
  );
};

export default CommentInput;
