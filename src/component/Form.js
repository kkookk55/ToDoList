import React, { useState, useRef } from "react";
import DoList from "./DoList";
import DoneList from "./DoneList";

function Form() {
  const initialState = { id: 0, title: "", content: "", isDone: false }; //초기값
  const [toDo, setToDo] = useState(initialState);
  const [toDos, setToDos] = useState([]);
  const [DoneDos, setDoneDos] = useState([]);

  const nextId = useRef(3);

  const onChangeHandler = (event) => {
    const { value, name } = event.target;
    setToDo({ ...toDo, [name]: value, id: nextId.current });
    nextId.current++;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo(initialState);
  };
  const deleteHandler = (id) => {
    const newToDoList = toDos.filter((toDo) => toDo.id !== id);
    setToDos(newToDoList);
  };

  const itIsDone = (toDo) => {
    toDo.isDone = true;
    setDoneDos((currentArray) => [toDo, ...currentArray]);
  };

  const itIsNotDone = (toDo) => {
    toDo.isDone = false;
    setToDos((currentArray) => [...currentArray]);
  };
  const style = {
    width: "100%",
    height: "70px",
    backgroundColor: "grey",
    margin: "0 auto",
    border: "2px solid black",
    borderRadius: "10px",
  };
  const inputStyle = {
    width: "400px",
    height: "30px",
  };
  const btnStyle = {
    marginLeft: "30px",
    width: "100px",
    height: "40px",
    backgroundColor: "grenn",
  };
  const divStyle = {
    display: "grid",
    gridTemplateColumns: " 1fr 1fr 1fr 1fr",
  };
  return (
    <div>
      <div style={style}>
        <form onSubmit={onSubmitHandler} className="form_container">
          <label>제목</label>
          <input
            style={inputStyle}
            type="text"
            name="title"
            onChange={onChangeHandler}
            value={toDo.title}
            required
          />
          <label>내용</label>
          <input
            style={inputStyle}
            type="text"
            name="content"
            onChange={onChangeHandler}
            value={toDo.content}
          />
          <button style={btnStyle} type="submit">
            추가하기
          </button>
        </form>
      </div>

      <h1>Working....!!!!</h1>
      <div style={divStyle}>
        {toDos.map((item) => {
          if (item.isDone === false) {
            return (
              <div>
                <DoList
                  item={item}
                  hadleDelete={deleteHandler}
                  itIsDone={itIsDone}
                  key={item.id}
                />
                ;
              </div>
            );
          }
        })}
      </div>
      <hr />
      <h1>Done....!!!!</h1>
      <div style={divStyle}>
        {toDos.map((item) => {
          if (item.isDone === true) {
            return (
              <div>
                <DoneList
                  item={item}
                  hadleDelete={deleteHandler}
                  itIsNotDone={itIsNotDone}
                  key={item.id}
                />
              </div>
            );
          } else {
            return;
          }
        })}
      </div>
    </div>
  );
}
export default Form;
