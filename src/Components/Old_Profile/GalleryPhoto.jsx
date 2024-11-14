import React from "react";

const GalleryPhoto = ({ imageUrl }) => {
  return (
    <section className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
      <img src={imageUrl} alt="Post Image" className="rounded-3xl w-full" />
    </section>
  );
};

export default GalleryPhoto;
