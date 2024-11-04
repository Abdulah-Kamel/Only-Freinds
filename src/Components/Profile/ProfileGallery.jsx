import React from "react";
import GalleryPhoto from "./GalleryPhoto";

const ProfileGallery = () => {
  return (
    <section className="my-4">
      <section>
        <button className="border-b-2 pb-2 font-bold text-lg">Posts</button>
      </section>
      <section className="border-t-2 border-[#5d5d5d]">
        <section className="py-4 px-4 max-sm:px-0 flex flex-wrap">
          <GalleryPhoto imageUrl="https://picsum.photos/200" />
          <GalleryPhoto imageUrl="https://picsum.photos/200" />
          <GalleryPhoto imageUrl="https://picsum.photos/200" />
          <GalleryPhoto imageUrl="https://picsum.photos/200" />
          <GalleryPhoto imageUrl="https://picsum.photos/200" />
          <GalleryPhoto imageUrl="https://picsum.photos/200" />
        </section>
      </section>
    </section>
  );
};

export default ProfileGallery;
