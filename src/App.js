import { useState } from "react";
import "./styles.css";
import Todolist from "./Todolist";

export default function App() {
  const [inputlist, setinputlist] = useState("");
  const [items, setitems] = useState([]);

  const listofitems = () => {
    if(!inputlist){

    }
    else{
    setitems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setinputlist("");
  }
  };

   const deleteItem = (id) => {
    console.log("delete");

    setitems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a items"
          value={inputlist}
          onChange={(e)=>setinputlist(e.target.value)}
        />
        <button onClick={listofitems}> + </button>
        <ol>
          {items.map((itemval, index) => {
            return (
              <Todolist
                key={index}
                id={index}
                text={itemval}
                onselect={deleteItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}
