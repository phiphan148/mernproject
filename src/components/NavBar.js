import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
    menuClick = () =>{
        if(document.getElementById('nav').classList.contains("menuClose")){
        document.getElementById('nav').classList.remove("menuClose");
        document.getElementById('nav').classList.add("menuOpen");
        } else {
            document.getElementById('nav').classList.remove("menuOpen");
            document.getElementById('nav').classList.add("menuClose");
        }
    };
    render() {
        return (
            <div className="header">
                <div className="navBar">
                    <div className="navLeft">
                        <img src={require('../images/profile.png')} alt="profile"/>
                    </div>
                    <div className="navRight">
                        <img onClick={this.menuClick} src={require('../images/menu-ico.png')} alt="nav ico"/>
                    </div>
                </div>
                <div id="nav" className="menuContent menuClose">
                    <p><Link to={'/'}>Home</Link></p>
                    <p><Link to={'/Cities'}>Cities</Link></p>
                    <p><Link to={'/SignUp'}>Create Account</Link></p>
                    <p><Link to={'/LogIn'}>Log in</Link></p>
                </div>
            </div>

        );
    }
}

export default NavBar;
