import React from "react";
import ReactDOM from "react-dom";
import sdata from "./Sdata";
import Images from "./Images";

//Getting probs value from Cards App.js file when calling Cards component
//After creating function here than after  when you calling as component in App.js file or in ReactDOM this
// created function act as attributr an you can set properties as your wish those properties trited as "props"
//that we pass to that method and by putting "props.propertie_name" we can access like "props.title"

function Cards(props) {
  // const imgcss = { width: "100%", height: "auto" };
  return (
    <>
      <div className="cards">
        <div className="card">
        {/* *******we are gtting this props value from App.jsx file where map function calling with arrow method****** 
        One more note if we are not going to pass props to Image attribute than we will not get images on screen */}
          <Images imgsrc={props.imgsrc}/> 
          <div className="card__info">
            <span className="card__category">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.Link} target="_blank">
              Watch NOW
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// ReactDOM.render(
//   //   <div className="App">
//   //      <div className="App-header">
//   //   </div>
//   // </div>

//   //Below one Is the method without using Map() Method
//   <div>
//    <h1 className="heading_style">List of top series</h1>
//     <Cards
//       imgsrc={sdata[0].imgsrc}
//       title={sdata[0].title}
//       sname={sdata[0].sname}
//       Link={sdata[0].Link}
//     />
//     <Cards
//       imgsrc={sdata[1].imgsrc}
//       title={sdata[1].title}
//       sname={sdata[1].sname}
//       Link={sdata[1].Link}
//     />
//     <Cards
//       imgsrc={sdata[2].imgsrc}
//       title={sdata[2].title}
//       sname={sdata[2].sname}
//       Link={sdata[2].Link}
//     />

//     {/* By using map() */}
//   </div>,document.getElementById('root')
// );

export default Cards;
