import React, { useState } from "react";
import "./Form.css";

function Form() {
  const [name, setName] = useState();
  const [lastname, setLastName] = useState();
  const [fullName, setFullName] = useState();
  const [lName, setLName] = useState();

  // you can pass any props like we are passin event here and by using that props we need to access "event.target.value"
  //  get value into object
  const inputEvent = (event) => {
 
    setName(event.target.value);
  };

  const inputEventtwo = (event) => {
 
    setLastName(event.target.value);
  };

  const onSubmit = (event) => {
    // When we are using form after sumbmit it retur default page after refreshing. 
    // So stay on same page and not refresh and delete our old data we use vevent.preventDefault()" method
    event.preventDefault();
    //Storing name into final variable
    setFullName(name);
    setLName(lastname);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="fcss ">
        <h1>Hello {fullName} {lName}</h1>
        {/* 
      In HTML input element only handling all events itself 
      But now all things controlled by Form component means in react input field controlled by component  */}

        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          //e.g onChange is controlling by component inputEvent
          onChange={inputEvent}
          //   Here react component trying to know what you are passing here so I can use it some where it needed
          //   SO here we pass value to store in name variable by using setName using target properties
          value={name}
        />
        <br />
        <input
          type="text"
          placeholder="ENTER YOUR LAST NAME"
          //e.g onChange is controlling by component inputEvent
          onChange={inputEventtwo}
          //   Here react component trying to know what you are passing here so I can use it some where it needed
          //   SO here we pass value to store in name variable by using setName using target properties
          value={lastname}
        />
        <br/>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
