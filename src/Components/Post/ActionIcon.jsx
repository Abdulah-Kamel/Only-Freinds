import React from 'react'

const ActionIcon = ({ icon: Icon }) => {
  return (
    <button className="text-[#f5f5f5] hover:text-gray-400 transition-colors px-4">
    <Icon className="text-3xl" />
  </button>
  )
}

export default ActionIcon