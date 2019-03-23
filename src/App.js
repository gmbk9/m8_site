import React, { Component } from 'react';
import Nav_bar from './components/nav_bar.js';
import Test_component from './components/test_component.js';
//import logo from './logo.svg';
import './App.css';

var mogo = "kao110.png"
function mutton(){
    
}
//<img className="hl1" style={{float:"left"}}>ありあねほーむへ<br/>ようこそ❤！</h2>
class App extends Component {
    constructor(props){
        super(props);
        this.state = {viewing:"main"};
        this.main_page = this.main_page.bind(this);
        this.syasin = this.syasin.bind(this);
        this.pages = ["main","kokohadoko","yokuaru","yokunai","ishou","syasin","about_game","about_3d","gifts","other"]
        this.page_funcs = [this.main_page,this.main_page,"yokuaru","yokunai","ishou","syasin","about_game","about_3d","gifts","other"]
        this.page_dict = {"main":this.main_page,"syasin":this.syasin};
    }
  kokohadoko(){};
  yokuaru(){};
  yokunai(){};
  ishou(){};
  about_game(){};
  about_3d(){};
  gifts(){};
  other(){};
  main_page(){
      return (
      <div className="App">
      <Nav_bar parent={this} />
      
      <div className="header0">
      </div>
      <div className="header2" >
          <div className="header3">
            <img className="hl1" src="112222t.png" />
          </div>
          <img src={mogo} className="header_img" alt="logo" />
          <img src={"br11.png"} className="header_img_bg" alt="logo" />
      </div>
      
      <div className="msg1">
        <img className="crc_img" src="divcrc1.png" />
        <p className="msg1_txt">
          ようこそ！<br /><br />
          アリアネのゲームを<br />
          販売するためのサイトです<br />
          （大嘘）<br/>
          上のメニューから<br />
          コンテンツ選んで<br />
          楽しみましょう！
        </p>
      </div>
      
          <img src={"kao112.png"} className="kao2" alt="MISSING_IMG2" />
          <img src={"kao111.png"} className="kao3" alt="MISSING_IMG3" />
      
    </div>
      
      
    );
  }
  syasin() {
      return (
      <div className="App">
      <div className="overlay"></div> 
            <Nav_bar parent={this} />
      
        <div className="aria_img_div">
            <img className="aria2" src="325215123623156133.png" />
        </div>
        
        <div className="bg2_div">
        
        </div>
        <div className="bg3_div">
        
        </div>
        
        <div className="ctr_msg">
        <p className="atext_2"><br /><br /><br /><br />
        いままでのさつえいの、<br />
        がぞうしゅうなの！<br />
        いままで、いっぱいとられてきたのに、<br />
        まだかずすくないのだけれど…<br />
        カイハツチューのものらしいいの…<br />
        これからもっともっと<br />
        ふえていけば、うれしいのね❤！</p>
        </div>

        <div className="carousel_underlay">
        <div className="carousel_underlay_text">右と左のアイコンで好きな画像集を選択してクリックすると、<br />
        ギャラリーを閲覧（またはDL)できます。</div>
        </div>
        <div className="bg_div">
        
            <div className="container">

                <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="false">

                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                        <div className="item active">
                          <a href="https://1drv.ms/f/s!AlAYx0f0hRL1gUY71tWLo5p4xuyB">
                          <img className="d-block w-100" src="srcrm_paral.png" alt="First slide" />
                          </a>
                        </div>
                        <div className="item">
                          <a href="https://1drv.ms/f/s!AlAYx0f0hRL1cfCUsbGX4DaqxgY">
                            <img className="d-block w-100" src="mhtk_paral.png" alt="Second slide" />
                          </a>
                        </div>
                        <div className="item">
                          <a href="https://1drv.ms/f/s!AlAYx0f0hRL1gRX9IckG778zzU9x">
                          <img className="d-block w-100" src="chr_paral.png" alt="Third slide" />
                          </a>
                        </div>
                    </div>


                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                        
                </div>

            </div>
        </div>
        
        </div>
      
        );
      
  }
  kaihatu_chuu(){
      return(
        <div className="App">
            <Nav_bar parent={this} />
            <span className="kaihatu_chuu_msg">開発中(´･ω･`)</span>
        </div>
      );
  }
  render() {
              if(!(this.state.viewing in this.page_dict)){return this.kaihatu_chuu()};
              return (this.page_dict[this.state.viewing]());
  }
}

export default App;
