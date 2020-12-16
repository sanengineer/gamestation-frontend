import React, { Component } from "react";
import imagesliderr from "../../assets/21cineplex.jpg";
import imagesliderrr from "../../assets/bpn.jpg";
import imagesliderrrr from "../../assets/republika.jpg";
import "./ListGame.css";
import { Link } from "react-router-dom";
import Navbar from "../NavHeader";
import Footer from "../footer/index";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="wraaper">
          <div className="content">
            <div className="content-gambar">
              <div className="image">
                <img className="imagesliderr" src={imagesliderr} alt="Test" />
                <div className="contentimage">
                  <tr>
                    <td>
                      <h2>
                        <Link className="fontimage" to="/gameplay">
                          Rock Scissors Paper
                        </Link>
                      </h2>
                    </td>
                  </tr>
                </div>
              </div>
              <div className="image">
                <img className="imagesliderrr" src={imagesliderrr} alt="Test" />
                <div className="contentimage">
                  <h2 className="fontimage">Chicken Cross The Road</h2>
                </div>
              </div>
              <div className="image">
                <img
                  className="imagesliderrrr"
                  src={imagesliderrrr}
                  alt="Test"
                />
                <div className="contentimage">
                  <h2 className="fontimage">Snakes and ladders</h2>
                </div>
              </div>
            </div>
            {/* end cgambar */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
