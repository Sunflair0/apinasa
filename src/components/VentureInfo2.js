import React from "react";

 VentureInfo2 =({item})=> {
    return (
        <div>
            {data[index].map(item =>{
           <div className="venture">   
           <img src={item.icon}/> 
            <p>{item.title}</p>
            <h4>{item.content}</h4></div>
            })}
        <button className="ventBtn">Click to place order</button>
            </div>
    );
}

export default VentureInfo2;