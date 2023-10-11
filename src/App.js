import logo from "./logo.svg";

//********************Import CSS for Generaltest file*******************************
import "./App.css";
//********************Import CSS for Card file**************************************
import "./Component/Card.css";
import "./Component/Navbar.css"
import Challenge from "./Component/Challenge";
import Calc from "./Component/Calc";
import Generaltest from "./Component/Generaltest";
import Map from "./Component/MapMethod";
import Amazon from "./Component/Amazon";
import Netflix from "./Component/Netflix";
import SlotMachin from "./Component/SlotMachin";
import UseState from "./Component/UseState";
import Eventhandling from "./Component/Eventhandling";
import Form from "./Component/Form";
import FinalForm from "./Component/FinalForm";
import SpreadOperator from "./Component/SpreadOperator";
import { Route,Routes } from "react-router-dom";
import CardsCallDifferently from "./Component/CardsCallDifferently";
import ALL from "./Component/ALL";
import FormTable from "./Component/FormTable";
import ProfileForm from "./Component/ProfileData";
import Error from "./Component/Error";
import NavBar from "./Component/NavBar";
import About from "./Component/About";




function App() {
  return (<>
    <NavBar/>

    {/* Routes help to differentiat what we have to call like /contactpage ,
    /About page */}
    
    <Routes>
      {/* "path" kaha jana hey "componet" wha kya batana hey
    In path="/" --> It means we use generely home page  */}
      <Route path="/" Component={Generaltest} />
      <Route path="/finalform" Component={FinalForm} />
      <Route path="/form" Component={Form} />
      <Route path="/formdata" Component={FormTable} />
      <Route path="/profile" Component={ProfileForm} />
      <Route path="/eventhandling" Component={Eventhandling} />
      <Route path="/map" Component={Map} />
      <Route path="/usestate" Component={UseState} />
      <Route path="/slotmachin" Component={SlotMachin} />
      <Route path="/cards" Component={CardsCallDifferently} />
      <Route path="/spreadops" Component={SpreadOperator} />
      <Route path="/netflix" Component={Netflix} />
      <Route path="/amazon" Component={Amazon} />
      <Route path="/slide" Component={ALL} />
      <Route  Component={Error}/>
      {/* When you want to pass props then you can use function in component or 
      render  also you can use. Bot are same but render is better for props pass  */}
      <Route path="/about" Component={()=>
        <About name="About"/>
      }/>

      {/* This is not working don't know why 
       
       <Route exact path="/about" render={()=>
        <About name="About"/>
      }/> */}
    {/* <Route path="/navbar" Component={NavBar}/> */}
     
      
      
    </Routes>
 
    </>
  );
}

export default App;
