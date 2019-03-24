import React, { Component } from 'react';
//import logo from './logo.svg';
let button_texs = ["btn_off.png","btn_on.png"]
class NavButton extends Component {
    constructor(props){
        super(props);
        this.ha = this.ha.bind(this);
        this.state = {image_index:0};
        this.button_texs = ["btn_off.png","btn_on.png"];
    }
    
  ha(){
      this.props.onClick();
      this.setState({image_index:1});
      setTimeout(()=>{this.setState({image_index:0});},1000);
  }
  render() {
      return (
                <div onClick ={this.ha} className="gridderator_sub">
                    <div className="gridderator_sub2">
                        <img className="gridderator_sub_img" src={button_texs[this.state.image_index]} />
                        <p className="option_text">{this.props.display_text}</p>
                    </div>
                </div>
                );
            }
    }
    
class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {};
        this.parent = props["parent"];
        this.currently_viewing = props["currently_viewing"];
        this.pages = ["main","kokohadoko","yokuaru","yokunai","ishou","syasin","about_game","about_3d","gifts","other"]
        this.page_display_text = ["ほーむ","ここはどこ","よくあるしつもん","よくないしつもん","いしょういちらん","しゃしん❤","ゲーム","3Dのあれこれ","いただきもの？","そのほか。"]
    }
  
  page_state_gen(o,page_name){
      return ()=>{o.parent.setState({viewing:page_name});}
  }
  
  
  render() {
    let qx = this.pages.map((i,idx)=>{
        return (<NavButton ele_parent={this} currently_viewing={this.currently_viewing} id={i} onClick={this.page_state_gen(this, i)} className="gridderator_button" display_text={this.page_display_text[idx]} />)})
  
  
    let nav_bar_clicked = ()=>{
    }
  
    return (
  <div className="nav_bar" onClick={nav_bar_clicked}>
        <div className="gridderator_bg">
        </div>
        <div className="gridderator">
            {qx}
        </div>
    </div>
      
      
    );
  }
}

export default NavBar;
