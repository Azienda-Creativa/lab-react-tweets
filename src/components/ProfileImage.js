import React from "react"

export default function ProfileImage(props) {
  const { image } = props
  return (
    <img
      src={image}
      className="profile"
      alt="profile"
    />
  )
}