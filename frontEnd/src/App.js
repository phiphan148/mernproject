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
    state = {
        response: '',
        post: '',
        responseToPost: '',
    };
    componentDidMount() {
        this.callApi()
            .then(res => this.setState({ response: res.express }))
            .catch(err => console.log(err));
    }
    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };
    handleSubmit = async e => {
        e.preventDefault();
        const response = await fetch('/api/world', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ post: this.state.post }),
        });
        const body = await response.text();
        this.setState({ responseToPost: body });
    };
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
                    <p>{this.state.response}</p>
                    <form onSubmit={this.handleSubmit}>
                        <p>
                            <strong>Post to Server:</strong>
                        </p>
                        <input
                            type="text"
                            value={this.state.post}
                            onChange={e => this.setState({ post: e.target.value })}
                        />
                        <button type="submit">Submit</button>
                    </form>
                    <p>{this.state.responseToPost}</p>
                </div>
            </Router>
        );
    }
}

export default App;
