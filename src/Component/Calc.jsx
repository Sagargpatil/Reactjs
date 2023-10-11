import React from "react";

function Calc() {
  function add(a, b) {
    let sum = a + b;
    if (sum > 50) {
      //    alert("Out of Range Addition"+ " "+sum);
      //    document.write("<h1>Out of Range Addition</h1>");
      //     // document.write();
      return (<div>
      <h3>Out of Range Addition</h3>
      <h3>Please try number below 30</h3></div>);
    } else {
      // document.write("<h1>Sum of the two number is</h1>"+" "+ sum);
      return <h3>Sum of the two number is {sum}</h3>;
    }
  }

  function sub(a, b) {
    let sub = a - b;
    return sub;
  }
  function mul(a, b) {
    let mul = a * b;
    return mul;
  }
  function div(a, b) {
    let div = a + b;
    return div;
  }
  return (
    <div>
      <ol>
        <li> {add(88, 20)}</li>
        <li>Sum of the two number is {sub(55, 20)}</li>
        <li>Sum of the two number is {mul(5, 20)}</li>
        <li>Sum of the two number is {div(5, 20)}</li>
      </ol>
    </div>
  );
}

export default Calc;
