import { Textarea } from "@headlessui/react";
import React, { useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import PostActions from "./PostActions";
import EmojiPicker from "emoji-picker-react";
import { IoMdMore } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

const PostCard = ({ postData }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [inputStr, setInputStr] = useState("");
  const [theme, setTheme] = useState("light");
  const isdark = document.getElementsByName("body");
  const textareaRef = useRef(null); // Reference for the textarea
  const pickerRef = useRef(null); // Reference for the emoji picker container
  const toggleTheme = () => {
    setTheme(isdark == true ? "dark" : "light");
  };

  const onEmojiClick = (emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
  };

  const handleInputChange = (e) => {
    setInputStr(e.target.value);

    // Dynamically adjust the height of the textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height to calculate new size
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scrollHeight
    }
  };
  const [isFullBio, setIsFullBio] = useState(false);

  const truncateBio = (postContent) => {
    if (!postContent || postContent.length === 0) return "";
    const maxLength = 110;
    if (postContent.length <= maxLength) return postContent;

    const truncated = postContent.substring(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(" ");
    const truncatedBio = truncated.substring(0, lastSpaceIndex);

    return (
      <>
        {truncatedBio}
        {/* Only show the '...more' link if the postContent is longer than maxLength */}
        {postContent.length > maxLength && (
          <span
            className="font-bold text-black/80 dark:text-white/70"
            onClick={() => setIsFullBio(!isFullBio)}
            style={{ cursor: "pointer" }}
          >
            ...more
          </span>
        )}
      </>
    );
  };
  // Close the emoji picker when clicking outside
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

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputStr]);

  return (
    <section className="columns-auto w-[90%] max-sm:w-full relative rounded-3xl border border-base-300">
      <PostHeader
        userId={postData?.id}
        profileImage={postData?.profilePicture}
        username={postData?.userName}
      />
      <section className="p-4">
        {postData?.postContent && (
          <p className="break-words overflow-y-hidden w-full">
            <span
              onClick={() => setIsFullBio(!isFullBio)} // Toggle bio state on click
            >
              {isFullBio
                ? postData?.postContent // Display full bio if it's expanded
                : truncateBio(postData?.postContent)}{" "}
              {/* Truncated bio with "more" */}
            </span>
          </p>
        )}
        <PostImage
          postImage={postData?.postImage}
          postContent={postData?.postContent}
        />
      </section>
      <PostActions
        theme={theme}
        style="p-4 border-t border-base-300"
        likes={postData?.likes}
        comments={postData?.comments}
        shares={postData?.shares}
      />
      {/* {showPicker ? (
          <section
            className="absolute bottom-[calc(0%+80px)] left-0 w-full"
            ref={pickerRef}
          >
            <EmojiPicker
              height="400px"
              width="100%"
              onEmojiClick={onEmojiClick}
              theme={theme}
              autoFocusSearch={false}
              lazyLoadEmojis
            />
          </section>
        ):null}
        <section className="flex justify-between items-center mt-4 relative">
          <Textarea
            ref={textareaRef} // Attach reference to textarea
            name="comment"
            placeholder="Add a comment"
            className={`input input-bordered text-black dark:text-white/90 w-full pe-16 pt-3 resize-none`} // Prevent manual resizing
            value={inputStr}
            onChange={handleInputChange}
            maxLength={100}
          />
          <BsEmojiSmile
            className="text-xl absolute right-[calc(0%+40px)] bottom-[calc(0%+18px)] cursor-pointer"
            onClick={() => setShowPicker((val) => !val)}
          />
          <IoSendOutline className="text-xl absolute right-[calc(0%+10px)] bottom-[calc(0%+18px)] cursor-pointer" />
        </section> */}
    </section>
  );
};

export default PostCard;
