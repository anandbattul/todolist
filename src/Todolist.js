import React from "react";

const Todolist = (props) => {
  return (
    <>
      <div className="todo_style">
        {/* <i class="fas fa-backspace"></i> */}
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={() => {
            props.onselect(props.id);
          }}
        />
        <li> {props.text} </li>
      </div>
    </>
  );
};
export default Todolist;
