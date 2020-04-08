import React from 'react';
// import CardList
// import CardList from './components/CardList';
// import Weather from './components/Weather';
import Card from './components/Card';

// const temps = [90, 100, 101, 101]
// const obj = {a:1, b:2, c:3}

class App extends React.Component {
  // <CardList />
  
  constructor(props) {
    super(props)
    this.state = 
      {
        periods: [],
        helloWorld: "Hi"
      }
  }

  componentDidMount() {
  
    fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
      .then(res => res.json())
      .then((result) => {
        // This /value/ is the Array of Objects returned from the server:
        // result is an Object
        // result.properties is also an Object
        // result.properties.periods is an Array of values we want.
        const array = result.properties.periods  
        // console.log(array)
        // const obj = array[0]
        // console.log(obj)
        // console.log(obj.number)
        // console.log(obj.name)
        // console.log(obj.temperature)
        // a is an Array defined here:
        // let a = [1,2,3]
        // This sets the "periods" state variable to a new value 
        // Which must be an Array and calls the render() method.
        // setState is like "this.state.periods = a" but works with React
        this.setState({periods: array})
        // this.setState({helloWorld:result.type})
      })
      .catch((error) => {console.log(error)} );
    }
    
  render() {
    // console.log(this.state.periods)
    // console.log("I AM RENDERING")
    return (
      <div>
        {this.state.periods.map((elem, index) => {
          console.log(elem)
          return (
          <Card key={index}>
            <h2>{elem.name}</h2>
            <h1>{`${elem.temperature} ${elem.temperatureUnit}`}</h1>
            <p>{elem.detailedForecast}.</p>
          </Card>
          )
        }
        )}
       </div> 
    )
  }
}

export default App;
