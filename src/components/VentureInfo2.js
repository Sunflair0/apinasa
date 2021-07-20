import React from "react";

 const VentureInfo2 =({item})=> {
    return (
        <div>
            {item[index].map(item => {
           <div className="venture">   
           <img alt="menu with planets as an icon"src={item.icon}/> 
            <p>{item.title}</p>
            <h4>{item.content}</h4></div>
            })}

        <button className="ventBtn">Click to place order</button>
            </div>
    );
}

export default VentureInfo2;