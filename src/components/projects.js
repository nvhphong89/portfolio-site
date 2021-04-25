import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategory() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          <Card shadow={1} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url() center/cover",
              }}
            >
              React Project 1
            </CardTitle>
            <CardText>lorem ipsum dolor sit amet, consectet</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={1} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url() center/cover",
              }}
            >
              React Project 1
            </CardTitle>
            <CardText>lorem ipsum dolor sit amet, consectet</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={1} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url() center/cover",
              }}
            >
              React Project 1
            </CardTitle>
            <CardText>lorem ipsum dolor sit amet, consectet</CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>HTML/CSS</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>NodeJS</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => {
            this.setState({ activeTab: tabId });
          }}
          ripple
        >
          <Tab>React</Tab>
          <Tab>React</Tab>
          <Tab>React</Tab>
        </Tabs>
        <section>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategory()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
export default Projects;
