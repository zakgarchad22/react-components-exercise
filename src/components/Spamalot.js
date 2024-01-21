import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{

    let arrayOfSpams = []
    for(let i=0 ; i< 500 ;i++){
        arrayOfSpams.push(<Spam key = {i} />)


    }
    return <div>{arrayOfSpams}</div>


}

export default Spamalot

