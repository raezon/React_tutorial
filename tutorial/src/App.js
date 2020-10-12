import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './components/items.js'

class  App extends Component {
  state={
    items:[
      {id:1,name:"ahmed",age:22,count:2},
      {id:2,name:"tarek",age:25,count:1},
      {id:3,name:"yasser",age:26,count:3},
   
    ]
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
        Condition Output
        <Items items={this.state.items}/>
        {this.state.name}

      </div>
    );
  }

}

export default App;
