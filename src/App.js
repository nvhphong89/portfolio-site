import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title= {<strong><Link style={{fontFamily:"'Pacifico', cursive",fontSize: "30px",color: "white", opacity:".8", textDecoration: "none"}} to="/">Phong Nguyen</Link></strong>} scroll>
            <Navigation>
              <span className="pointing"><i className="far fa-hand-point-right"></i></span>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title= {<strong><Link style={{fontSize: "20px",color: "black", opacity:".8", textDecoration: "none"}} to="/">Phong Nguyen</Link></strong>}>
            <Navigation>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content">
              <Main />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
