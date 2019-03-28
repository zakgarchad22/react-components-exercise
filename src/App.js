import React, { Component } from 'react';
import './App.css';



// SPOT CHECK 1
// class App extends Component {
//   getStuff(){
//     return "Wild function'ed text"}

//   render() {
//     return (<h1>Stuff: {this.getStuff()}</h1>)
//   }
// }

// export default App;

// SPOT CHECK 2
// class App extends Component {

//   getMorningGreeting() {
//     return <div>Good Morning</div>
//   }

//   getEveningGreeting() {
//     return <div>Good Evening</div>
//   }

//   render() {
//     return new Date().getHours() > 12 ?
//       this.getEveningGreeting() :
//       this.getMorningGreeting()
//   }
// }

// export default App;

// SPOT CHECK 3
// class App extends Component {

//   getMorningGreeting() {
//     return <div>Good Morning</div>
//   }

//   getEveningGreeting() {
//     return <div>Good Evening</div>
//   }

//   render() {
//     return [
//       this.getMorningGreeting(),
//       this.getEveningGreeting(),
//       <p>some text</p>
//     ]
//   }
// }

// export default App;

// EXERCISE 1
const companies = [
  { name: "Tesla", revenue: 140 },
  { name: "Microsoft", revenue: 300 },
  { name: "Google", revenue: 600 }]

class App extends Component {

  showCompany(name, revenue) {
    return (<div id={name} key={name} >{name} makes {revenue} every year</div>)
  }


  render() {
    return companies.map(c => this.showCompany(c.name, c.revenue))
  }
}

export default App

// EXERCISE 2
// class App extends Component {

//   getClassName(temperature) {
//     if (temperature < 15) {
//       return "freezing"
//     }
//     else if (temperature > 15 && temperature < 30) {
//       return "fair"
//     }
//     else return "hell-scape"
//   }
//   render() {
//     return <div className={this.getClassName(10)}></div>
//   }
// }

// export default App;

