import React from "react";
import './weather.css'

class Weather extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      periods: []
    };

  }

  componentDidMount() {

    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        let periods = []
        this.setState({
          periods: periods
        });
    })
    .catch((error) => {console.log(error)} );

  }

  render() {
    return(
      <>
        { 
          this.state.periods.map((value, index) => {
            return <div className="card" key={index}>
              <h2>{value.name}</h2>
              <p>{value.temperature} {value.temperatureUnit}</p>
              <p>{value.detailedForecast}</p>
            </div>;
          })
        }
      </>
    );
  }

}

export default Weather;