import React, { Component } from 'react';
import './App.css';
import {Dummy} from './components/Dummy'
import Spamalot from './components/Spamalot';



// SPOT CHECK 1
// class Sum extends Component {
//   render() {
//     let num1 = 57;
//     let num2 = -12;
//     return (
//       <div>The sum is {num1 + num2}</div>
//     );
//   }
// }
// export default Sum;

// SPOT CHECK 2
// class NavBar extends Component {
//   render() {
//     return (
//       <div id="nav">
//         <span>Home</span>
//         <span>About</span>
//       </div>
//     )
//   }
// }

// class LandingPage extends Component {
//   render() {
//     return <h1>Welcome!</h1>
//   }
// }
// class App extends Component {

//   render() {
//     return (
//       <div className="app">
//         <NavBar />
//         <LandingPage />
//       </div>
//     )
//   }
// }

// export default App

// SPOT CHECK 3

// localStorage
// export default App;

// SPOT CHECK 4

// const Banner = () => <div className="banner">THE LOGO</div>

// export default Banner

// export default App

// SPOT CHECK 5
// export class About extends Component {
//   render() {
//     return (
//       <div>
//         <SignUp />
//         <Blurb />
//       </div>
//     )
//   }
// }

// export class SignUp extends Component {
//   render() {
//     return (
//       <div>
//         <input type="text" placeholder="Username" />
//       </div>
//     )
//   }
// }

// export class Blurb extends Component {
//   render() {
//     return <div>This is a great site.</div>
//   }
// }


// EXERCISE 1

//  class App extends Component {
//   render(){
//     return<Dummy />
//   }
// }

// export default App

// EXERCISE 2

class App extends Component{
  render(){
    return <Spamalot />
  }
}
export default App



