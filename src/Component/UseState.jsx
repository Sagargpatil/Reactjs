import React, { useState } from "react";
import "./UseState.css";

function UseState() {
  //   set function have two Elements syntax :-
  //   const [variable_name,setVariable_name] = useState(here you can pass initial value if you want);
  //   like below count variable_name
  //   [current_value,Updated_value] value store respectively

  const [count, setCount] = useState(0);

  let time = new Date().toLocaleTimeString();
  let cdate = new Date().toLocaleDateString();
  const [ctime, setctime] = useState(time);
  const [date, setdate] = useState(cdate);

  const IncNum = () => {
    setCount(count + 1);
  };

  

  const UpdateTime = () => {
    let newtime = new Date().toLocaleTimeString();
    setctime(newtime);
  };

//   Rendering update time function for every 1 second by using setInterval function 

  setInterval(UpdateTime,1000);

  const UpdateDate = () => {
     let newdate = new Date().toLocaleDateString();
    setdate(newdate);
  };

  return (
    <div className="us">
      <h1 className="heading_style">
        Increment function using Hooks concept UseState
      </h1>
      <h2>{count}</h2>
      <button onClick={IncNum}>Click</button>

      <h1 className="heading_style">DIGITAL COLCK</h1>
      <h2  style={{backgroundColor:"Pink"}}>{ctime}</h2>
      {/* <button onClick={UpdateTime}>GET TIME</button> */}

      <h1 className="heading_style">Get current Date </h1>
      <h2>{date}</h2>
      <button onClick={UpdateDate}>GATE DATE</button>


    </div>
  );
}

export default UseState;
