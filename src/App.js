import React, { Component } from 'react';
import './App.css';
import { Dummy } from './components/Dummy'
import Spamalot from './components/Spamalot';
import NavBar from './components/NavBar';
import Checkout from './components/Checkout';
import Menu from './components/Menu';



// SPOT CHECK 1
export class Sum extends Component {
  // YOUR CODE HERE...
}

// SPOT CHECK 2
class Nav extends Component {
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
  // YOUR CODE HERE...
}

// SPOT CHECK 3
class AboutUs extends Component {
  render() {
    return <p>This is an example of an about page~</p>
  }
}
class Profile extends Component {
  render() {
    return <p>This is an example of a user profile~</p>
  }
}

export class App extends Component {

  render() {
    let isUserLoggedIn = localStorage.getItem('loggedIn')
    let componentToDisplay = isUserLoggedIn ?
      <Profile /> :
      <AboutUs />
    return (
      <div className="app">

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 2</h4>
          <div className="exercise" id="spotcheck-2">
            <Nav />
            {/* YOUR CODE HERE... */}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spotcheck 3</h4>
          <div className="exercise" id="spotcheck-3">
            {componentToDisplay}
          </div>
        </div>

        <div className="ex-space">

          <h4 className="ex-title">Spotcheck 4</h4>
          <div className="exercise" id="spotcheck-4">
            {/* YOUR CODE HERE... */}
          </div>
        </div>

        <div className="ex-space">

          <h4 className="ex-title">Spotcheck 5</h4>
          <div className="exercise" id="spotcheck-5">
            {/* YOUR CODE HERE... */}
          </div>
        </div>
        <div className="ex-space">

          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {/* YOUR CODE HERE... */}
          </div>
        </div>
        <div className="ex-space">

          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {/* YOUR CODE HERE... */}
          </div>
        </div>
        <div className="ex-space">

          <h4 className="ex-title">Exercise 4</h4>
          <div className="exercise" id="ex-4">
            {/* YOUR CODE HERE... */}
          </div>
        </div>
      </div>
    )
  }
}


// SPOT CHECK 4
export const Banner = () => { }


// SPOT CHECK 5
export class About extends Component {
  /* your code here... */
}


export class SignUp extends Component {
  /* your code here... */
}

export class Blurb extends Component {
  /* your code here... */
}
