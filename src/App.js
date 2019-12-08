import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    dlugosc: "",
    szerokosc: '',
    wysokosc: '',
    tektura: 'C',
    bigi: '',
    X: '',
    Y: '',
    bigiFabryczne: ""
  }


  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    }
    )
  }
  handleSelect = e => {
    this.setState({
      tektura: e.target.value,
    }
    )
  }

  handleClick = () => {
    if (this.state.tektura === "BC") {
      this.setState({
        bigi: <p>10// {this.state.szerokosc * 1 + 1} v {this.state.dlugosc * 1 + 1} v {this.state.szerokosc * 1 + 1} v {this.state.dlugosc * 1 - 1} v 30</p>,
        X: (this.state.dlugosc * 1 + this.state.szerokosc * 1) * 2 + 72,
        bigiFabryczne: <p>{Math.ceil(this.state.szerokosc / 2 + 4)} v {this.state.wysokosc * 1 + 10} v {Math.ceil(this.state.szerokosc / 2 + 4)} </p>,
        Y: Math.ceil(this.state.szerokosc / 2 + 4) + this.state.wysokosc * 1 + 10 + Math.ceil(this.state.szerokosc / 2 + 4)
      })

    } else if (this.state.tektura === "C") {
      this.setState({
        bigi: <p>10// {this.state.szerokosc} v {this.state.dlugosc - 1} v {this.state.szerokosc - 1} v {this.state.dlugosc - 1} v 30</p>,
        X: this.state.szerokosc * 1 + this.state.dlugosc * 1 - 1 + this.state.szerokosc * 1 - 1 + this.state.dlugosc * 1 - 1 + 68,
        bigiFabryczne: <p>{Math.ceil(this.state.szerokosc / 2 + 3)} v {this.state.wysokosc * 1 + 6} v {Math.ceil(this.state.szerokosc / 2 + 3)} </p>,
        Y: Math.ceil(this.state.szerokosc / 2 + 3) + this.state.wysokosc * 1 + 6 + Math.ceil(this.state.szerokosc / 2 + 3)

      })
    }
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.tektura} onChange={this.handleSelect}>
          <option value="C">C</option>
          <option value="BC">BC</option>
        </select>
        <input type='number' id='dlugosc' value={this.state.dlugosc} onChange={this.handelChange}></input>
        <input type='number' id='szerokosc' onChange={this.handelChange}></input>
        <input type='number' id='wysokosc' onChange={this.handelChange}></input>
        <button onClick={this.handleClick}>Policz</button>
        {this.state.bigi ? <h4>Bigi:</h4> : null}
        {this.state.bigi}
        {this.state.bigiFabryczne ? <h4>Bigi fabryczne:</h4> : null}
        {this.state.bigiFabryczne}
        {this.state.X && this.state.Y ? <h4>Formatka:</h4> : null}
        {this.state.X} {this.state.X && this.state.Y ? 'X' : null} {this.state.Y}
      </div>

    );
  }
}

export default App;
