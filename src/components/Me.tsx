import React, { useEffect, useState } from "react";
import axios from "axios";



export default async function Me(){
    let [name,setName] = React.useState("");
async function getUser(){
    const user = await axios.get("/api/users/me");
    name = user.data.data.firstName
    setName(name);
    console.log(name);
  } 
    
    useEffect(() => {
        getUser();
    }
    )
    return(
        <>
        Hello Its Me {name}
        </>
    );
}