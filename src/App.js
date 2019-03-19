import React, { Component } from 'react';
import './App.css';

const companies = [
  { name: "Tesla", revenue: 140 },
  { name: "Microsoft", revenue: 300 },
  { name: "Google", revenue: 600 }]

class App extends Component {

  showCompany(name, revenue) {
    return (<div>{name} makes {revenue}</div>)
  }


  render() {
    return companies.map(c => this.showCompany(c.name, c.revenue))
  }
}

export default App;
