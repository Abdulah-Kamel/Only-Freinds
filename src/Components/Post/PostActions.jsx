import React, { useEffect, useRef, useState } from "react";
import { BsSend } from "react-icons/bs";
import { CiBookmark } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import ActionIcon from "./ActionIcon";
import { BiLike } from "react-icons/bi";
import EmojiPicker from "emoji-picker-react";

const PostActions = ({ theme }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [Emoji, setEmoji] = useState("");
  const pickerRef = useRef(null); // Reference for the emoji picker container
  const onEmojiClick = (emojiObject) => {
    setEmoji(emojiObject.emoji);
    setShowPicker(false);
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
  return (
    <footer className="flex justify-between items-center mt-4">
      <ActionIcon
        icon={BiLike}
        Emoji={Emoji}
        onclike={() => {
          setShowPicker(!showPicker);
        }}
      />
      {showPicker && (
        <section
          className="absolute bottom-[calc(0%+80px)] left-0 w-full"
          ref={pickerRef}
        >
          <EmojiPicker
            height="400px"
            width="100%"
            onEmojiClick={onEmojiClick}
            reactionsDefaultOpen={true}
            allowExpandReactions={false}
            theme={theme}
          />
        </section>
      )}
      <ActionIcon icon={FaRegComment} />
      <ActionIcon icon={BsSend} />
      <ActionIcon icon={CiBookmark} />
    </footer>
  );
};

export default PostActions;
