import React from 'react'
const oldarr=["vinod","badur","thapa"]


// console.log(oldarr[0])
// console.log(oldarr[1])
// console.log(oldarr[2])

const newarr=oldarr.map((val)=>{
    return val;}
    )


function Map() {
  return (
    <div>
     {alert(newarr)}
    </div>
  )
}

export default Map;
