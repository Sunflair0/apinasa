import React from "react";

const Callisto =({data, index}=> {
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

export default Callisto;