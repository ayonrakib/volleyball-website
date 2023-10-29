import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './Navbar';


export default function Admin(){
    useEffect(()=>{
        let isAdmin:boolean = false;
        console.log("");
        if(!isAdmin){
            navigate("/#");
          }
    })
    const navigate = useNavigate();
    
    console.log("came in admin")

    return (
        <div>
        <NavBar/>
            I am admin!
        </div>
    )
}