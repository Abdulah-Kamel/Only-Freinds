import React from 'react'

const PostImage = ({imageUrl}) => {
  return (
    <img src={imageUrl} alt="Post content" className="w-full rounded-lg" />

  )
}

export default PostImage