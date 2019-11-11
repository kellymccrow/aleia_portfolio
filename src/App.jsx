import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './style.scss';

class App extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="wrap">

        <div className="nav-container">
          <div class="nav-wrap">
              <div class="name">
                  <a href="#" data-to=".section1">Aleia</a>
              </div>
              <ul class="nav">
                  <li><a href="#" data-to=".section2">Music Videos</a></li>
                  <li><a href="#" data-to=".section3">Commissions</a></li>
                  <li><a href="#">About</a></li>
              </ul>
          </div>
          <div class="copyright">
              <p>Copyright © All rights reserved.</p>
          </div>

          <div class="icons">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-instagram"></i>
              <i class="far fa-envelope"></i>
          </div>  
        </div>
        
        <section className="section1">
            {/* <div className="screen1">
              <div className="img-wrap">
                <div className="hero-image"></div>                  
              </div>
              <div className="hero-text">
                <h1>Aleia</h1>
                <div class="line"></div>
                <h2>Creative Director</h2> 
              </div>
            </div> */}

            <div className="screen2">
              <div className="img-wrap">
                <div className="hero-image">
                  <div className="white-text">
                    <h1>Aleia</h1>
                    <div class="line"></div>
                    <h2>Creative Director</h2>  
                  </div>  
                </div>                  
              </div>
              <div className="dark-text">
                <h1>Aleia</h1>
                <div class="line"></div>
                <h2>Creative Director</h2> 
              </div>
            </div>
        </section>

        <section className="section2">
          <div className="container">
            <div className="music-title">
              <div className="line line1"></div>
              <h1 className="mv-title">Music Videos</h1>
              <div className="line line2"></div>
            </div>

 
          </div>    
        </section>
      
        <section className="section3">
          <div className="commissions">
              <h1 className="c1">Commissions</h1>             
              <h1 className="c2">Commissions</h1>
          </div>
          <h1 className="com-side">Commissions</h1>

          <div className="s3-content">
              <div className="commission">
                  <h1 className ="com1" data-state="close">Vogue<i className="fas fa-chevron-right"></i></h1>         
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae animi magnam sapiente magni quis sint placeat deserunt libero dolor adipisci?</p>
              </div>
              <div className="commission">
                  <h1 className ="com2" data-state="close">SSense<i className="fas fa-chevron-right"></i></h1>          
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, eius. Id maxime, quam dignissimos unde ipsum obcaecati? Doloribus maxime deleniti culpa, aliquid hic est accusantium dolorum quibusdam, voluptas quam rem.</p>
              </div>
              <div className="commission">
                  <h1 className ="com3" data-state="close">Refinery 29<i className="fas fa-chevron-right"></i></h1>                
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ipsum corrupti quas nam omnis quisquam cumque tenetur temporibus minima, molestias debitis ex iure, quod ipsa animi reprehenderit reiciendis saepe assumenda.</p>
              </div>
              <div className="commission">
                  <h1 className ="com4" data-state="close">Kara<i className="fas fa-chevron-right"></i></h1>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi delectus amet aut rerum? Maiores animi, quasi quia aut atque aliquid.</p>
              </div>
              <div className="commission">
                  <h1 className ="com5" data-state="close">Nike<i className="fas fa-chevron-right"></i></h1>              
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero deleniti dolores deserunt placeat consequatur. Minus voluptas veritatis vero aliquid voluptatum.</p>
              </div>                                                 
          </div>
        </section>
      
        <section className="section4">
          <div className="img-banner">
            <div className="img-container one"></div>
            <div className="img-container two"></div>
            <div className="img-container three"></div>
            <div className="img-container four"></div>
            <div className="img-container five"></div>
          </div>
        </section>

        <footer>
            <p>snailposter.bigcartel.com</p>
        </footer>
      </div>
    );   
  }
      
}

export default App;
