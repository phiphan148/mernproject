import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom'
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';
import Home from './views/Home.js';
import Cities from './views/Cities.js';
import SignUp from './views/SignUp.js';
import LogIn from './views/LogIn.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <NavBar/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Cities" component={Cities}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/LogIn" component={LogIn}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
