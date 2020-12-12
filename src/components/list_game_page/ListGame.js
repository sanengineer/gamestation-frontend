import React, {Component} from 'react';
import logo from '../../assets/babastudio-logo.png';
import imageslider from '../../assets/banner-desktop.jpg';
import imagesliderr from '../../assets/21cineplex.jpg';
import imagesliderrr from '../../assets/bpn.jpg';
import imagesliderrrr from '../../assets/republika.jpg';
import './ListGame.css'
import {Link} from 'react-router-dom'

class App extends Component{
    render(){
      return(
        <div className="wraaper">
                    
                
                <div className="content">
                   
                    <div className="content-gambar">
                        <div className="image">
                            <img className="imagesliderr" src={imagesliderr} />
                            <div className="contentimage">
                            <tr>
                            <td><h2><Link className="fontimage" to="/gameplay">Rock Scissors Paper</Link></h2></td>     
                        </tr>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imagesliderrr" src={imagesliderrr} />
                            <div className="contentimage">
                                <h2 className="fontimage">Chicken Cross The Road</h2>
                            </div>
                        </div>
                        <div className="image">
                            <img className="imagesliderrrr" src={imagesliderrrr} />
                            <div className="contentimage">
                                <h2 className="fontimage">Snakes and ladders</h2>
                            </div>
                        </div>

                    </div>
                    {/* end cgambar */}
                    <div className="content-gambar">                        
                        <div className="content-youtube">
                             <iframe width="560" height="315" src="https://www.youtube.com/embed/lvI12tC7zro" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="content-youtube2">
                             <iframe width="560" height="315" src="https://www.youtube.com/embed/Joh97f9O7r0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>

                    </div>
                    
                </div>
      
        </div>
      )
    }
}
export default App;