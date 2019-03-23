import React, { Component } from 'react';
//import logo from './logo.svg';
let button_texs = ["btn_off.png","btn_on.png"]
class Nav_button extends Component {
    constructor(props){
        super(props);
        this.ha = this.ha.bind(this);
        this.image_index = 0;
        this.state = {image_index:(props.currently_viewing === props.id)+0};
        this.button_texs = ["btn_off.png","btn_on.png"];
    }
    
  ha(){
      this.props.onClick();
      //this.setState({image_index:1});
  }
  render() {
      let ret_val = (
                <div onClick ={this.ha} className="gridderator_sub">
                    <div className="gridderator_sub2">
                        <img className="gridderator_sub_img" src={button_texs[this.state.image_index]} />
  <p className="option_text">{this.props.display_text}</p>
                    </div>
                </div>
                );
        return ret_val;
            }
    }
    
class Nav_bar extends Component {
    constructor(props){
        super(props);
        this.parent = props["parent"];
        this.pages = ["main","kokohadoko","yokuaru","yokunai","ishou","syasin","about_game","about_3d","gifts","other"]
        this.page_display_text = ["ほーむ","ここはどこ","よくあるしつもん","よくないしつもん","いしょういちらん","しゃしん❤","ゲーム","3Dのあれこれ","いただきもの？","そのほか。"]
        this.state = {viewing:"main"};
    }
  
  page_state_gen(o,page_name){
      return ()=>{o.parent.setState({viewing:page_name});}
  }
  
  render() {
    let q = <Nav_button ele_parent={this} currently_viewing={this.parent.state.viewing} id="syasin" onClick={this.page_state_gen(this,"syasin")} className="gridderator_button" display_text="しゃしん❤" />
    let q2 = this.pages.map((i,idx)=>{return (<Nav_button ele_parent={this} currently_viewing={this.parent.state.viewing} id={i} onClick={this.page_state_gen(this,{i})} className="gridderator_button" display_text={this.page_display_text[idx]} />)})
  
    return (
    <div className="nav_bar">
        <div className="gridderator_bg">
        </div>
        <div className="gridderator">
            <Nav_button ele_parent={this} id="main" currently_viewing={this.parent.state.viewing} onClick={this.page_state_gen(this,"main")} className="gridderator_button" display_text="ほーむ"/>
            <Nav_button ele_parent={this} id="kokohadoko" currently_viewing={this.parent.state.viewing} onClick={this.page_state_gen(this,"kokohadoko")} className="gridderator_button" display_text="ここはどこ"/>
            <Nav_button ele_parent={this} id="yokuaru" currently_viewing={this.parent.state.viewing} onClick={this.page_state_gen(this,"yokuaru")} className="gridderator_button" display_text="よくあるしつもん"/>
            <Nav_button ele_parent={this} id="yokunai" currently_viewing={this.parent.state.viewing} onClick={this.page_state_gen(this,"yokunai")} className="gridderator_button" display_text="よくないしつもん"/>
            <Nav_button ele_parent={this} id="ishou" currently_viewing={this.parent.state.viewing} onClick={this.page_state_gen(this,"ishou")} className="gridderator_button" display_text="いしょういちらん"/>
            {q}
            <Nav_button ele_parent={this} id="about_game" currently_viewing={this.parent.state.viewing} onClick={this.page_state_gen(this,"about_game")} className="gridderator_button" display_text="ゲーム" />
            <Nav_button ele_parent={this} id="about_3d" currently_viewing={this.parent.state.viewing} onClick={this.page_state_gen(this,"about_3d")} className="gridderator_button" display_text="3Dのあれこれ" />
            <Nav_button ele_parent={this} id="gifts" currently_viewing={this.parent.state.viewing} onClick={this.page_state_gen(this,"gifts")} className="gridderator_button" display_text="いただきもの？"/>
            <Nav_button ele_parent={this} id="other" currently_viewing={this.parent.state.viewing} onClick={this.page_state_gen(this,"other")} className="gridderator_button" display_text="そのほか。"/>
        </div>
    </div>
      
      
    );
  }
}

export default Nav_bar;
