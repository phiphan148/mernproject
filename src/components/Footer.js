import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <img className="homeIcon" src={require("../images/homeIcon.png")} alt="circle"/>
            </div>
        );
    }
}

export default Footer;
