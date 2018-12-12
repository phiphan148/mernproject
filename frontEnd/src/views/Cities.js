import React from 'react'

class Cities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cityList: [],
            isFetching: false
        }
    };

    fetchData = () => {
        this.setState({isFetching: true});
        // fetch("http://localhost:5000/cities", {
        //     method: "GET",
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         // 'Access-Control-Allow-Credentials': false,
        //         // 'Access-Control-Allow-Headers': 'Authorization',
        //         // 'Content-Type': 'application/json'
        //     },
        //
        // })
        // {
        //     mode: 'no-cors' // 'cors' by default
        // }
        fetch("http://localhost:5000/cities")
            .then(response => response.json())
            .then(result => {
                this.setState({
                    cityList: result,
                    isFetching: false
                })
            })
            .catch(e => console.log(e));
    };

    componentDidMount() {
        this.fetchData();
    }

    listItems = () => {
        const listItems = this.state.cityList.map((city) =>
            <div key={city._id}>
                <p>{city.name}</p>
                <p> {city.country}</p>
            </div>
        );
        return listItems;
    };

    render() {
        return (
            <div className="contain">
                {this.listItems()}
            </div>
        )
    }
}

export default Cities
