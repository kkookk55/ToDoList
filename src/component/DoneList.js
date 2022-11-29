import React, { useState, useRef } from "react";

function DoneList(props) {
  const listStyle = {
    border: "5px solid green",
    maxWidth: "250px",
    height: "150px",
    textAlign: "left",
    listStyle: "none",
    borderRadius: "15px",
    padding: "10px",
  };
  const pStyle = {
    width: "100%",
    height: "35px",
  };
  return (
    <div style={listStyle}>
      <h4>{props.item.title}</h4> <p style={pStyle}>{props.item.content}</p>
      <button
        onClick={() => {
          props.hadleDelete(props.item.id);
        }}
      >
        삭제하기
      </button>
      <button
        onClick={() => {
          props.itIsNotDone(props.item);
        }}
      >
        취소하기
      </button>
    </div>
  );
}
export default DoneList;
