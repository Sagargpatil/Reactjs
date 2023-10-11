
import React from 'react'

 function Challenge() {
    const time = new Date().getHours();
    const cssStyle={ };
    // Variable declare because we are putting value in it according to time
  let greeting = " ";
  //Mini project dynamic wish you shedule according to time Good Morning /Afternoon or Evening  -----START
  if (time >= 1 && time < 12) {
    greeting = "Good Morning";
    cssStyle.color="Green";
    cssStyle.border='1'
  } else if (time > 12 && time <= 19) {
       
    greeting = "Good Afternoon";
    cssStyle.color="Red";
    cssStyle.border='1'
  } 
  
    else {
    greeting = "Good Night";
    cssStyle.color="Yellow"; 
    cssStyle.border='1'
  }

  
  //-------END
  return (
    <div >
         {/* PASSING VALUE TO GREETING FOR THE DAY */}
        
         <h1>Hello Sir,<span style={cssStyle}>{greeting}</span> </h1>
    </div>
  )
}

export default Challenge;
