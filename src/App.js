import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";
import Center from "./Center";
import MetaTags from "react-meta-tags";
import Footer from "./Cards/Footer";
import About from "./About/About";

const styles = {
  background: "#000000",
  color: "#FFFFFF",
  height: "100vh",
};


class App extends React.Component {
  
  state = { lat:3, errorMessage: "" };

  

  render() {
   
      return (

        
        <div style={styles}>



          

          <Particles
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 900,
                  },
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 6,
                    color: "#f9ab00",
                  },
                },
              },
            }}
          />

          <Navbar Author={this}  > 
         </Navbar>

          <Header Lat={ this.state.lat } />

          <Footer />
        </div>
      );
    }
  }


export default App;
