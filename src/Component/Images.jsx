import React from "react";

const Images=(props)=>{
      const imgcss = { width: "100%", height: "auto" };

    return(

      //  we are passing img  value from here and getting from  Cards.jsx
        <img
        style={imgcss}
        src={props.imgsrc}
        alt="myPic"
        className="card_img"
      />
    );
}

export default Images;