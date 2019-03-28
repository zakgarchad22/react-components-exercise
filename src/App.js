import React, { Component } from 'react';
import './App.css';



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
class NavBar extends Component {
  render() {
    return (
      <div id="nav">
        <span>Home</span>
        <span>About</span>
      </div>
    )
  }
}

class LandingPage extends Component {
  render() {
    return <h1>Welcome!</h1>
  }
}
class App extends Component {

  render() {
    return (
      <div className="app">
        <NavBar />
        <LandingPage />
      </div>
    )
  }
}

export default App

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
//       <div>some text</div>
//     ]
//   }
// }

// export default App;

// EXERCISE 1
// const companies = [
//   { name: "Tesla", revenue: 140 },
//   { name: "Microsoft", revenue: 300 },
//   { name: "Google", revenue: 600 }]

// class App extends Component {

//   showCompany(name, revenue) {
//     return (<div id={name} key={name} >{name} makes {revenue} every year</div>)
//   }


//   render() {
//     return companies.map(c => this.showCompany(c.name, c.revenue))
//   }
// }

// export default App

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

