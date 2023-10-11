import React, { useState } from 'react'

function Eventhandling() {
    const purple='#8e44ad';
const [bg,setBg] = useState();
const [name,setname] = useState("Click");

const bgChange=()=>{
    let newbg="#34495e";
    setBg(newbg);
    setname("Click 😄");
};

const back=()=>{
   
    setBg(purple);
    setname("ooh 👼");
};


  return (
    <div style={{backgroundColor:bg}}>
      <button onClick={bgChange} onDoubleClick={back}>{name}</button>
    </div>
  )
}

export default Eventhandling
