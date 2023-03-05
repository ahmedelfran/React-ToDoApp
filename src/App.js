
import './App.css';
import React, { Component } from 'react';
import Add from './Components/add/add';
import List from './Components/list/list';

class App extends Component {
  state = {
    items : [
      {id:1,name:'ahmed',age:22},
      {id:2,name:'sayed',age:35},
      {id:3,name:'mohmmed',age:17},
    ]
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render() {
    return (
      <div className="App container ">
        <h1> TO DO List </h1>
        <List items={this.state.items} deleteItem={this.deleteItem}/>
        <Add addItem={this.addItem} />
      </div>
    );
  }
  
}

export default App;
