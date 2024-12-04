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
      <div className="grid grid-cols-12 w-11/12 max-w-5xl h-[90%] modal-box px-6 py-3 lg:card-side bg-base-100 max-lg:overflow-y-scroll">
        <figure className="col-span-6 max-lg:col-span-full">
          <img
            src={postData?.postImage}
            alt="Album"
            className="w-full h-full rounded-3xl"
          />
        </figure>
        <div className="card-body p-3 relative col-span-6 max-lg:col-span-full">
          <header className=" border-b border-gray-600 pb-4">
            <section className="flex justify-between items-center">
              <section className="flex items-center">
                <Link to={`/profile/${postData?.id}`}>
                  <img
                    src={postData?.profilePicture}
                    alt=""
                    className="rounded-full w-[50px]"
                  />
                </Link>
                <Link to={`/profile/${postData?.id}`} className="ms-2">
                  <p>{postData?.userName}</p>
                </Link>
              </section>
              <IoMdMore size={30} role="button" />
            </section>
          </header>
          <section className="p-2 my-4">
            <p className="break-words">{postData?.postContent}</p>
          </section>
          <section className="lg:p-2 p-4 lg:absolute flex justify-between w-full items-center bottom-0 ring-1 ring-gray-600 rounded-sm">
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
          </section>
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
