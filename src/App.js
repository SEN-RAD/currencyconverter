import React, {Component} from 'react';
import Converter from './Converter';


class App extends Component {
    constructor() {
    super()
    this.state = {
      response: ' ',
      input: ' ',
      currency1: ' ',
      currency2: ' '
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSelectChange1 = (event) => {
    this.setState({ currency1: event.target.value })
  }

  onSelectChange2 = (event) => {
    this.setState({ currency2: event.target.value })
  }

  onClickRate = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "0tAyGpuIdK5W85wjUlNgAJLVZTz5U4Xt");

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${this.state.currency2}&from=${this.state.currency1}&amount=${this.state.input}`, requestOptions)
  .then(response => response.json())
  .then((data) => {this.setState({response: data.result})})
  };


  render() {

    const { response  } = this.state;
    const value = `The value is ${response}`; 

    return (
      <div className="tc">
        <h1 className= 'f1'> Andresito's Currency Converter </h1>
        <br />
        <Converter inputChange={this.onInputChange}
                   selectChange1={this.onSelectChange1}
                   selectChange2={this.onSelectChange2}
                   getRate={this.onClickRate}
        />
        <p className='f3'> {value}  </p>
      </div>
    );
  }
}

export default App; 
