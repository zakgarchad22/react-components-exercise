import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
spam = []
counter = 0

render() {
while(this.counter < 500){
    this.counter++
        this.spam.push(<Spam />)
   
}
return this.spam
}
}

export default Spamalot

