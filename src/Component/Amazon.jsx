import React from "react";
import Cards from "./Cards";
import sdata from "./Sdata";


const Amazon= ()=>{
    return(
      <div>
        <h1 className="heading_style">List of Amazon series</h1>
      {      sdata.map((val,index)=>{
             let title=val.title;
              if(title==="Amazon origin Series")
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

export default Amazon;