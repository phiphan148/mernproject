import React, {Component} from 'react';
import Banner from '../components/Banner.js'
import PopularCity from '../components/PopularCity.js'
// import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: [{
                name: "NewYork",
                src: "https://photos.mandarinoriental.com/is/image/MandarinOriental/new-york-2017-columbus-circle-01?$MO_masthead-property-mobile$"
            },
                {
                    name: "Berlin",
                    src: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view-870x400.jpg"
                },
                {
                    name: "Saigon",
                    src: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view-870x400.jpg"
                },
                {
                    name: "Munich",
                    src: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view-870x400.jpg"
                },
                {
                    name: "Tokyo",
                    src: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view-870x400.jpg"
                },
                {
                    name: "London",
                    src: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view-870x400.jpg"
                },
                {
                    name: "Paris",
                    src: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view-870x400.jpg"
                },
                {
                    name: "Vienn",
                    src: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view-870x400.jpg"
                },
                {
                    name: "Barcelona",
                    src: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view-870x400.jpg"
                },
                {
                    name: "Toronto",
                    src: "https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2016/11/24111943/Berlin-city-view-870x400.jpg"
                }],
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
                    <img className="circle" src={require("../images/circled-right.png")} alt="circle"/>
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
