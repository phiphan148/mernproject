import React from 'react';
import {fetchCitiesWithRedux} from "../actions/cityActions";
import {connect} from 'react-redux';

class Cities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: "",
            renderCities: false,
        }
    }

    componentDidMount() {
        // this.props.dispatch(fetchCitiesWithRedux());
        this.props.fetchCitiesWithRedux();
    };

    handleChange = (e) => {
        this.setState({
            cityName: e.target.value,
            renderCities: false,
        });
    };

    keyPress = (e) => {
        if (e.keyCode === 13) {
            if(this.state.renderCities === false){
            this.setState({
                renderCities: true
            })}  else {
                this.setState({
                    renderCities: false
                });
            }
        }
    };

    listItems = () => {
        let listItems;
        let cityListDiplay = (city) => (<div className="cityPhotoHolder" key={city._id}>
            <p className="cityName">{city.name}</p>
            <img className="cityDisplay" src={city.src} alt="img"/>
        </div>);
        if (this.state.renderCities === false) {
            listItems = this.props.cities.map((city) =>
                cityListDiplay(city)
            );

        } else {
            listItems = this.props.cities.filter(city => city.name.toLocaleLowerCase().includes(this.state.cityName.toLocaleLowerCase())).map((city) =>
                cityListDiplay(city)
            );
        }
        return listItems;
    };

    render() {
        const searchIcoStyle = {
            height: 17
        };
        return (
            <div className="contain cityDisplay">
                <div className="section searchBar">
                    <input id="searchText" type="text" value={this.state.cityName} onKeyDown={this.keyPress}
                           onChange={this.handleChange}/>
                    <div className="searchIconHolder"><img style={searchIcoStyle}
                                                           src={require("../images/search-ico.png")} alt="search"/>
                    </div>
                </div>
                {this.listItems()}
            </div>
        )
    }
}


const mapStateToProps = state => ({
    cities: state.cityReducer.cities,
    loading: state.cityReducer.loading,
    error: state.cityReducer.error,
});

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCitiesWithRedux: () => {
            dispatch(fetchCitiesWithRedux())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cities)
