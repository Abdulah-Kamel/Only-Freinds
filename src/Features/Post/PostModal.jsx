import React, { useEffect } from "react";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import ActionIcon from "./ActionIcon";
import LikeComponent from "./LikeComponent";
import ShareComponent from "./ShareComponent";
import CommentComponent from "./CommentComponent";
import { IoIosCloseCircle } from "react-icons/io";

const PostModal = ({ postData, setpostModal }) => {
  useEffect(() => {}, [postData]);
  return (
    <dialog id="post_modal" className="modal">
      <div className="grid grid-cols-12 grid-flow-row w-11/12 max-w-5xl h-[90%] p-0 bg-base-100 overflow-y-scroll">
        <figure className="col-span-6 max-lg:col-span-full">
          <img
            src={postData?.postImage}
            alt="Album"
            className="w-full h-full"
          />
        </figure>
        <div className="relative col-span-6 max-lg:col-span-full lg:min-h-[500px]">
          <header className="py-4 px-4">
            <section className="flex flex-col justify-between gap-1">
              <section className="flex items-center">
                <Link to={`/profile/${postData?.id}`} className="w-[70px]">
                  <img
                    src={postData?.profilePicture}
                    alt={` profile picture of ${postData?.userName}`}
                    className="rounded-full"
                  />
                </Link>
                <Link to={`/profile/${postData?.id}`} className="ms-2">
                  <p>{postData?.userName}</p>
                </Link>
              </section>
              <p className="break-words">
                {postData?.postContent}
              </p>
            </section>
          </header>

          <footer className="p-4 lg:absolute flex justify-between w-full items-center bottom-0 border-t border-gray-600">
            <ActionIcon
              child={<LikeComponent />}
              number={"1200"}
              type="likes"
            />

            <ActionIcon
              child={<CommentComponent />}
              number={"25"}
              type="comments"
            />

            <ActionIcon
              child={<ShareComponent />}
              number={"50"}
              type="shares"
            />
          </footer>
        </div>
        <div className="col-span-full">
          <header className="py-4 px-4">
            <section className="flex flex-col justify-between gap-1">
              <section className="flex items-center">
                <Link to={`/profile/${postData?.id}`} className="w-[70px]">
                  <img
                    src={postData?.profilePicture}
                    alt={` profile picture of ${postData?.userName}`}
                    className="rounded-full"
                  />
                </Link>
                <Link to={`/profile/${postData?.id}`} className="ms-2">
                  <p>{postData?.userName}</p>
                </Link>
              </section>
              <p className="break-words">
                {postData?.postContent}
              </p>
            </section>
          </header>
        </div>
        
      </div>
      <form method="dialog" className="modal-backdrop">
        <button className="cursor-auto" onClick={() => setpostModal(false)}>
          close
        </button>
      </form>
    </dialog>
  );
};

export default PostModal;
