import React, {Component} from 'react';
import Banner from '../components/Banner.js'
import PopularCity from '../components/PopularCity.js'
import { Link } from 'react-router-dom'
// import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minNum: 0,
        }
    }

    generateRandomNumber = () => {
        setInterval(() => this.setState({minNum: Math.random() * 6}), 5000);
    };
    display = () => {
        let cities = [];
        this.state.cityList.map((city, index) => cities.push(<PopularCity key={index} cityName={city.name}
                                                                          cityPhoto={city.src}/>));
        this.generateRandomNumber();
        return cities.slice(this.state.minNum, this.state.minNum + 4);
    };

    render() {
        return (
            <div className="contain">
                <Banner/>
                <p className="section">Find your perfect trip, designed by insiders who know and love their
                    cities.</p>
                <div className="section">
                    <Link to={'/cities'}><img className="circle" src={require("../images/circled-right.png")} alt="circle"/></Link>
                </div>
                {/*<div className="section popularCities">*/}
                {/*<h5>Popular MYtinerary</h5>*/}
                {/*<Slider>*/}
                {/*{this.state.cityList.map((article, index) =>*/}
                {/*<div key={index} className="test">*/}
                {/*<img src={article.src} alt=""/>*/}
                {/*</div>)}*/}
                {/*</Slider>*/}
                {/*<div className="cityDisplay">*/}
                {/*{this.display()}*/}
                {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Home;
