import React, { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";

const CommentComponent = ({ setpostModal, postModal }) => {

  // Effect to show the modal when postModal is set to true
  useEffect(() => {
    if (postModal) {
      const modal = document.getElementById("post_modal");
      if (modal) {
        modal.showModal();
      }
    }
  }, [postModal]); // Trigger this effect when postModal changes

  const handleClick = () => {
    setpostModal(true); // Update state to true
  };

  return (
    <button
      className="flex items-center text-black dark:text-white/90 hover:text-black/70 dark:hover:text-white/50 transition-colors hover:cursor-pointer"
      onClick={handleClick}
    >
      <FaRegComment className="text-3xl" />
    </button>
  );
};

export default CommentComponent;
