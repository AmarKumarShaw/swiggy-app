import React from "react";
import "./Card.css"

const Card = ({resData}) => {

    
    return (
        <div className="flex flex-wrap gap-2 my-4 ">
            {console.log(resData)} 
           
       {resData.map((resData)=>{
        const {Id,URL,Resturant_Name,City,star_rating} = resData;
            return(
                <div key={Id}  >
            <img className="card-img" src={URL} alt="" />
            <h2>{Resturant_Name}</h2>
            <h3>{City}</h3>
            <h4>{star_rating}</h4>
        </div>
                
            )
        })}
           
        </div>
    )
}

export default Card