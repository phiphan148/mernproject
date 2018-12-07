import React, {Component} from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <img src={require("../images/logo.png")} alt="logo"/>
            </div>
        );
    }
}

export default Banner;
