import React, { Component } from 'react';
import './App.css';
import SayHello from './components/SayHello';
import Card from './components/Card';
// import cadena, { sayHello } from './helpers/helpers-func';


// console.log(cadena);
// sayHello();

const data = [
  {
    title: "My title",
    subTitle: "My Subtitle"
  },
  {
    title: "My title 2",
    subTitle: "My Subtitle 2"
  }, 
  {
    title: "My title 3",
    subTitle: "My Subtitle 3"
  }
]
class App extends Component {
  renderList(){
    return data.map((item, index) => {
      return <Card key={`id-${index}`} title={item.title} subTitle={item.subTitle} />
    })
  }
  render() {
    return (
      <div>
        <SayHello name="Ironhack" />
        {this.renderList()}
      </div>
    );
  }
}

export default App;
