import React from 'react';

const Like = (props) => {
  let classes = "fa fa-heart" // 속이 꽉 찬 하트
  if (!props.liked) classes += "-o"; // 속이 빈 하트

  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
      aria-hidden="true"
    ></i>);
}

export default Like;