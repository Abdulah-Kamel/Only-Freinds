import { Input } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import PostActions from "./PostActions";
import EmojiPicker, { Emoji } from "emoji-picker-react";

const PostCard = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const pickerRef = useRef(null); // Reference for the emoji picker container
  const [theme, setTheme] = useState("light");
  const isdark = localStorage.getItem("isdark");
  const toggleTheme = () => {
    if (isdark === "true") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const onEmojiClick = (emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    // setShowPicker(false);
  };
  // Close the picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    toggleTheme();
  }, [isdark]);
  return (
    <section className="columns-auto first:border-t-0 last:border-b-0 border-y-[1px] last:border-t-[1px] border-gray-500 py-4 relative">
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
      <PostActions theme={theme} />
      <section className="flex flex-col">
        {showPicker && (
          <section
            className="absolute bottom-[calc(0%+80px)] left-0 w-full"
            ref={pickerRef}
          >
            <EmojiPicker
              height="400px"
              width="100%"
              onEmojiClick={onEmojiClick}
              theme={theme}
            />
          </section>
        )}
        <section className="flex justify-between items-center mt-4 relative">
          <Input
            type="text"
            name="comment"
            placeholder="Add a comment"
            className={`input input-bordered text-black dark:text-white/90 w-full`}
            value={inputStr} // Use value instead of defaultValue
            onChange={(e) => setInputStr(e.target.value)}
            // className="w-full px-4 py-2 bg-transparent border-none outline-none text-stone-100 placeholder:text-stone-400"
          />
          <BsEmojiSmile
            className="text-xl absolute right-[calc(0%+10px)] ] cursor-pointer"
            onClick={() => setShowPicker((val) => !val)}
          />
        </section>
      </section>
    </section>
  );
};

export default PostCard;
