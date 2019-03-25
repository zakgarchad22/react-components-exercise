import React, { Component } from 'react';
import './App.css';

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

// EXERCISE 2
class App extends Component {

  getClassName(temperature) {
    if (temperature < 15) {
      return "freezing"
    }
    else if (temperature > 15 && temperature < 30) {
      return "fair"
    }
    else return "hell-scape"
  }
  render() {
    return <div className={this.getClassName(10)}></div>
  }
}

export default App;
