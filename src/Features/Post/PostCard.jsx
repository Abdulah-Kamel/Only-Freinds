import React, { useState } from "react";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostModal from "./PostModal";
import ActionIcon from "./ActionIcon";
import ShareComponent from "./ShareComponent";
import CommentComponent from "./CommentComponent";
import LikeComponent from "./LikeComponent";

const PostCard = ({ postData }) => {
  const [postModal, setpostModal] = useState(false);

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
      <footer className="p-4 border-t border-base-300 flex justify-between items-center">
        <ActionIcon
          child={<LikeComponent />}
          number={postData?.likes}
          type="likes"
        />

        <ActionIcon
          child={
            <CommentComponent
              setpostModal={setpostModal}
              postModal={postModal}
            />
          }
          number={postData?.comments}
          type="comments"
        />
        <ActionIcon
          child={<ShareComponent />}
          number={postData?.shares}
          type="shares"
        />
      </footer>
      {postModal && (
        <PostModal postData={postData} setpostModal={setpostModal} />
      )}
    </section>
  );
};

export default PostCard;
