import axios from "axios";
import React, { useState } from "react";

function FinalForm() {
  const [fullName, setFullName] = useState({
    id:'',
    first_name: "",
    last_name: "",
    email_Id: "",
    mobile_no: "",
    course: "",
  });

  const inputEvent = (event) => {
   // console.log(event.target.value);

    //**************** */ Without Using Object distructuring************************
    // const value=event.target.value;
    // const name=event.target.name;

    //**************By using Object distructuring we can use like that as given below***************
    const { value, name } = event.target;

    //METHOD I

    setFullName((preValue) => {
     // console.log(preValue);

      return {
        //Jo bhi "preValue" object may name hey or wo "name" variable sey match karta he to uski hey "value" set kardo
        //as per given below
        ...preValue,
        //here we are using array distructuring
        [name]: value,
      };
    });

    //Callback function we are using here "preValue" privious value
    //By using this method we can get privous value or state of that variable

    // METHOD II

    // setFullName((preValue) => {
    //   if (name === "fname") {
    //     return {
    //       fname: value,
    //       lname: preValue.lname,
    //       email: preValue.email,
    //       phone: preValue.phone,
    //     };
    //   } else if (name === "lname") {
    //     return {
    //       fname: preValue.fname,
    //       email: preValue.email,
    //       phone: preValue.phone,
    //       lname: value,
    //     };
    //   } else if (name === "email") {
    //     return {
    //       fname: preValue.fname,
    //       lname: preValue.lname,
    //       phone: preValue.phone,
    //       email: value,
    //     };
    //   } else if (name === "phone") {
    //     return {
    //       fname: preValue.fname,
    //       email: preValue.email,
    //       phone: preValue.phone,
    //       lname: preValue.lname,
    //       phone: value,
    //     };
    //   }
    // });
  };
  const saveData = async () => {

  // const res = await fetch(`http://localhost:8080/api/v1/${Students}`, {method: "POST"});
  //    const actualdata = await res.json();
  //   // setdata(actualdata);
  //   console.log(actualdata);

     const res = await axios.post("http://localhost:8080/api/v1/Save/Students",fullName)
     let sample = res.data;
    console.log(sample);
     alert(sample);
    //setTest(res.data);
   
    
  };
  const onSubmits = (event) => {
    // When we are using form after sumbmit it retur default page after refreshing.
    // So stay on same page and not refresh and delete our old data we use event.preventDefault()" method
    event.preventDefault();
    saveData();
    //Storing name into final variable
    alert("Form Submitted");
  };

  return (
    <div>
      <form onSubmit={onSubmits}>
        <div className="fcss ">
          <h1>
            Hello {fullName.first_name} {fullName.last_name}
          </h1>
          <p>{fullName.email_Id}</p>
          <p>{fullName.mobile_no}</p>
          {/* 
      In HTML input element only handling all events itself 
      But now all things controlled by Form component means in react input field controlled by component  */}

          <input
            type="text"
            placeholder="ENTER YOUR NAME"
            //e.g onChange is controlling by component inputEvent
            onChange={inputEvent}
            name="first_name"
            //   Here react component trying to know what you are passing here so I can use it some where it needed
            //   SO here we pass value to store in name variable by using setName using target properties
            value={fullName.first_name}
          />
          <br />
          <input
            type="text"
            placeholder="ENTER YOUR LAST NAME"
            //e.g onChange is controlling by component inputEvent
            onChange={inputEvent}
            name="last_name"
            //   Here react component trying to know what you are passing here so I can use it some where it needed
            //   SO here we pass value to store in name variable by using setName using target properties
            value={fullName.last_name}
          />

          <input
            type="email"
            placeholder="ENTER YOUR Email"
            //e.g onChange is controlling by component inputEvent
            onChange={inputEvent}
            name="email_Id"
            //   Here react component trying to know what you are passing here so I can use it some where it needed
            //   SO here we pass value to store in name variable by using setName using target properties
            value={fullName.email_Id}
          />

          <input
            type="number"
            placeholder="ENTER YOUR Phone"
            //e.g onChange is controlling by component inputEvent
            onChange={inputEvent}
            name="mobile_no"
            //   Here react component trying to know what you are passing here so I can use it some where it needed
            //   SO here we pass value to store in name variable by using setName using target properties
            value={fullName.mobile_no}
          />
          <br />
          <input
            type="text"
            placeholder="ENTER YOUR Course"
            //e.g onChange is controlling by component inputEvent
            onChange={inputEvent}
            name="course"
            //   Here react component trying to know what you are passing here so I can use it some where it needed
            //   SO here we pass value to store in name variable by using setName using target properties
            value={fullName.course}
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FinalForm;
