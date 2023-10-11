import React from "react";
import sdata from "./Sdata";
import Cards from "./Cards";
//---------------OutSide Function component

{
  /* *********************************By using map method And Without Arrow function**************************  */
}

// function ncard(val) {
//   return (
//     <Cards
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       Link={val.Link}
//     />
//   );
// }

// Conditional Statement  If-Else
//Start----------------
// const FavSeries=()=>{
//   const Favs="Amazon";

//   if(Favs==="Amazon"){
//     return <Amazon/>
//   }
//   else{
//     return <Netflix/>
//   }
// }
//End of IF-Else logic-----------------

function CardsCallDifferently() {
  return (
    <div>
      {/* -----------------inside function Component */}
      <div>
        <h1 className="heading_style">List of top series</h1>
        {/* <FavSeries/> */}
        {/* *****************With using Map method and Arrow function**************************** */}

        {/* Calling map method with arrow function */}
        {sdata.map((val, index) => {
          {
            /* for(var i=index;i<=index;i++){
  alert(index);
} */
          }

          return (
            <Cards
              // We have add id field here because you have for each elementin list have one unique key "key={val.uniquefield__name}"
              //  at the place of val you can take any other name also ass per your wish

              key={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              sname={val.sname}
              Link={val.Link}
            />
          );
        })}

        {/* ******************* Without Using Map method and Without Arrow function*********************  */}

        {/* Calling one-by-one  */}
        {/* <Cards
imgsrc={sdata[0].imgsrc}
title={sdata[0].title}
sname={sdata[0].sname}
Link={sdata[0].Link}
/>
<Cards
imgsrc={sdata[1].imgsrc}
title={sdata[1].title}
sname={sdata[1].sname}
Link={sdata[1].Link}
/>
<Cards
imgsrc={sdata[2].imgsrc}
title={sdata[2].title}
sname={sdata[2].sname}
Link={sdata[2].Link}
/>
<Cards
imgsrc={sdata[0].imgsrc}
title={sdata[0].title}
sname={sdata[0].sname}
Link={sdata[0].Link}
/>
<Cards
imgsrc={sdata[1].imgsrc}
title={sdata[1].title}
sname={sdata[1].sname}
Link={sdata[1].Link}
/>
<Cards
imgsrc={sdata[2].imgsrc}
title={sdata[2].title}
sname={sdata[2].sname}
Link={sdata[2].Link}
/> */}

        {/* *********************************By using map method And Without Arrow function**************************  */}
        {/* Calling map method  */}
        {/* {sdata.map(ncard)} */}
      </div>
    </div>
  );
}

export default CardsCallDifferently;
