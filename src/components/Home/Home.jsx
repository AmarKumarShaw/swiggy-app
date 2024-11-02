import React from "react";
import Card from "../Cards/Card";
import { resData } from "../Data";


const Home  = () => {
    return(
        <div>  
     {
           resData.map((data)=>{
            return(
               <Card resData={data}/> 
            )
        })
     }
        </div>
    )
}
export default Home;