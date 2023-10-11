import React from "react";
import Cards from "./Cards";
import sdata from "./Sdata";


const Netflix= ()=>{
    return(
      <div>
              <h1 className="heading_style">List of Netflix series</h1>
{/* 
              Very easy touse "MAP METHOD" SYNTAX 🩻:- 
              array_name((current_Val/you can give any mname,index)=>{
                return(
                  current_val.properties/that you want to loop
                )
              }) */}
{      sdata.map((val,index)=>{
       let title=val.title;
        if(title==="Netflix origin Series")
        {
       return  ( <Cards
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          Link={val.Link}
        />);
        }

      })
       
   }
    </div>
     );
}

export default Netflix;