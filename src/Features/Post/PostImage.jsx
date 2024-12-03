import React from "react";

const PostImage = ({ postImage, postContent }) => {
  return (
    <img
      src={postImage}
      alt={postContent || "Image not available"}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/600x400?text=Image+not+available";
      }}
      className="w-full h-96 rounded-lg mt-4"
    />
  );
};

export default PostImage;
