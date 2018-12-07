import React, {Component} from 'react';

class PopularCity extends Component {
    render() {
        return (
            <div className="cityNameHolder">
                <p>{this.props.cityName}</p>
                <img src={this.props.cityPhoto} alt="city img"/>
            </div>
        );
    }
}

export default PopularCity;
