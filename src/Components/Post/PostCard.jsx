import React from "react";
import { BsEmojiSmile, BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

const PostCard = () => {
  return (
    <section className="columns-auto border-b-[1px] border-[#f5f5f5] py-2">
      <section className="mb-4">
        <section href="#" className="flex items-center">
          <img
            src="https://picsum.photos/50"
            alt=""
            className="rounded-full w-[50px]"
          />
          <section className="ms-2">
            <p>southern_circle</p>
          </section>
        </section>
      </section>
      <section>
        <img
          src="https://picsum.photos/400"
          alt="dummy"
          className="w-full rounded-lg"
        />
      </section>
      <section className="flex flex-1 justify-between items-center mt-4">
        
        <section
          href="#"
          className="flex  text-[#f5f5f5] hover:text-gray-400 transition-colors hover:cursor-pointer px-4"
        >
          <GoHeart className="text-3xl me-1" />
        </section>
        <section
          href="#"
          className="flex text-[#f5f5f5] hover:text-gray-400 transition-colors hover:cursor-pointer px-4"
        >
          <FaRegComment className="text-3xl me-1" />
        </section>
        <section
          href="#"
          className="flex text-[#f5f5f5] hover:text-gray-400 transition-colors hover:cursor-pointer px-4"
        >
          <BsSend className="text-3xl me-1" />
        </section>
        <section
          href="#"
          className="flex text-[#f5f5f5] hover:text-gray-400 transition-colors hover:cursor-pointer px-4"
        >
          <CiBookmark className="text-3xl me-1" />
        </section>
      </section>
     
      <section className="flex justify-between items-center mt-4 relative">
        <input
          type="text"
          name="comment"
          placeholder="Add a comment"
          className="w-full px-4 py-2 bg-transparent border-none outline-none text-stone-100 placeholder:text-stone-400"
        />
        <BsEmojiSmile className="text-xl absolute right-0 cursor-pointer" />
      </section>
    </section>
  );
};

export default PostCard;
