import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/items.js'

class  App extends Component {
  state={
    items:[
        {id:1,name:'ahmed',age:22},
        {id:2,name:'tarek',age:25},
        
    ]
}

  render(){
 
    return (
      <div className="App">
        <Items items={this.state.items}/>
        {Math.random()*10}

      </div>
    );
  }

}

export default App;
