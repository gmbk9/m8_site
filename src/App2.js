import React, { Component } from 'react';
//import logo from './logo.svg';
import './App2.css';

function nl_conv(t){
    let newText = t.split('\n').map((item, i) => {
    return "<br>{item}";
    });
}

class App2 extends Component {
  state={on:true}
  
  render() {
    var comp_obj = undefined;
    if(this.state.on){
        var target_text = "haybidy heaze\nwobbididy way weaze!"
        
    comp_obj = (
      <div className="App2">
      
      <div onClick={()=>{this.setState({on:!this.state.on});console.log(this.state.on);}}>foorp
      <br />
      fea</div>
      
      </div>
      
    );
    }
    else{
        comp_obj = (
      <div className="App2">
        <p onClick={()=>{this.setState({on:!this.state.on});console.log(this.state.on);}}>{'wat'}</p>
      
      </div>
        );
    }
    console.log(comp_obj);
    return comp_obj;
  }
}

export default App2;
