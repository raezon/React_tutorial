import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/items.js'

class  App extends Component {
  state={
    name:''
  }
  handleChange=(e)=>{
    this.setState({
      name:e.target.value
    })
  }
  handleSubmit=(e)=>{
    //stoper le rafrichissemnt de la page dans un onclick
    e.preventDefault();
    console.log(this.state.name)
  }

  render(){
 
    return (
      <div className="App">
        Form Part1
        <form onSubmit={this.handleSubmit}>
          <textarea type="text"  onChange={this.handleChange}/>
          <input type="submit"  value="send"/>
        
        </form>
        {this.state.name}

      </div>
    );
  }

}

export default App;
