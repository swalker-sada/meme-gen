import React, { Component } from "react";
import Image from "./Image";
import "./ImageList.css"
<<<<<<< HEAD

import logo from './images/usa.jpg'


=======
import logo from './images/usa.jpg';
>>>>>>> 5ff10f0da0e3e644e4a1440eb5267e8ca281d620


export default class Gallery extends Component {
  render() {
    return (
      <div>
        <div className="h1">
          MEME GENERATOR 
           </div>
           <img className="icon" src={logo} alt="Logo" style={{position: 'absolute', top: 10, right: 15, width: '7%', height: 80}}/>

       

        <div>
          <button className="btn-gallery" onClick={() => this.props.handleRandom()}>Gimme a Random Meme</button>
          
        
        </div>

        <div className="image-list">
          {this.props.images.map((image) => {
            return (
              <Image
                key={image.id}
                image={image}
                handleclick={this.props.handleclick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
