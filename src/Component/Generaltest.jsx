// import logo from "./logo.svg";
// import "./App.css";
// // import "./Component/Card.css";
// import Challenge from "./Component/Challenge";
// import Calc from "./Component/Calc";
// import Cards from "./Component/Cards";
// import sdata from "./Component/Sdata";

import Challenge from "./Challenge";
import Calc from "./Calc";

function Generaltest() {
  //Variable declaration
  const fname = "sagar";
  const lname = "Patil";
  const img1 = "https://picsum.photos/200/300";
  const Link =
    "https://www.youtube.com/watch?v=z-Z5radvnOA&list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&index=15";

  // Object create for get current Date and Time
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  const heading = { color: "#fa9191", textTransform: "Capitalize" };

  return (
    <div className="App">
      <div className="App-header">
        {/* Passing values by variable putiing here and passing to CARDS  component
          By creating your own custom attribute and you can set properties according to you
          In this case props very  useful */}

        {/* <Cards
              imgsrc="https://picsum.photos/200/300"
              title="Netflix origin Series STARTED"
              sname="FILE"
              Link="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
            /> */}

        <Challenge />
        <Calc />
        {/* ES6 Temlate literal By using contentEditable attribute you can edite 
               the things only need to take care of camelCase 
          *******************conainEditable  Concept*************************** */}
      
      
         {/* <h1 contentEditable="true">
          Netflix LIST Present By {`${fname} ${lname}`}
        </h1> */}

        <h1>Netflix LIST Present  {`${fname} ${lname}`}</h1>
        <ol>
          <li>Mahabharath</li>
          <li>Ramayana</li>
          <li>Ekvira AAi</li>
          <li>Saia BABA</li>
        </ol>

        <p>Current Date is = {currDate} </p>
        <p>Current Time is = {currTime} </p>
        <h1>Image get imported as Sample</h1>
        <img src={img1} />
        <a href={Link} target="_thapa">
          Learn Reactjs{" "}
        </a>

        {/* Inline CSS for heading you can put direct properties without creat any oject into {{}} */}
        <h1 style={heading}>Sample video to show Direct fromYoutube</h1>
        <iframe
          width="auto"
          height="315"
          src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
        ></iframe>
      </div>
    </div>
  );
}

export default Generaltest;
