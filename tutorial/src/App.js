import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child';

class  App extends Component {
  Test(){
    console.log('Test !')
  }
  //arrow function we can write it on one line if it contains one line
  //if one parametre doesn't need paranthesis
  
  Test=()=>{
    console.log('Test !')
  }
  render(){
    return (
      <div className="App">
        <Child/>
        {this.test}
      </div>
    );
  }

}

export default App;
