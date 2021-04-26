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
  render() {
    return (
      <div className="category-tabs">
        <section>
          <Grid>
            <Cell col={4}>
            <div className="project-grid">
          <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background: "url(https://www.choosetrades.com/wp-content/uploads/2019/09/2-STP-5330.jpg) center/cover",
              }}
            >
              MyBee Web Application
            </CardTitle>
            <CardText>MyBee App is a platform to connect skilled trades with clients in real-time. This app also helps small businesses generate more revenue fast by analyzing growth strategies using the power of AI.</CardText>
            <CardText>NestJS, React, PostgreSQL, MongoDB</CardText>
            <CardActions border>
              <Button href="https://mybeeapp.io" target="_blank" colored>To Website</Button>
            </CardActions>
          </Card>
          
        </div>
            </Cell>
            <Cell col={4}>
            <div className="project-grid">
          
          <Card shadow={3} style={{minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "white",
                height: "176px",
                background: "url(https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-1039545254.jpg?w=1390&crop=1) center/cover",
              }}
            >
              Path Finding Visualization
            </CardTitle>
            <CardText>A web application built with JavaScript/Express visualizing path finding algorithms such as Dijkstra and A* to find shortest path from source node to destination node</CardText>
            <CardText>HTML/CSS, Express, JavaScript, Dijkstra and A* algorithm</CardText>
            <CardActions border>
              <Button href="https://github.com/nvhphong89/PathFindingVisualizer" target="_blank" colored>GitHub</Button>
              <Button href="https://youtu.be/4hRjv2t--0c" target="_blank" colored>Video Demo</Button>
              <Button href="https://fathomless-depths-53076.herokuapp.com/" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
          
        </div>
            </Cell>
            <Cell col={4}>
            <div className="project-grid">
        
          <Card shadow={3} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background: "url(https://marvel-b1-cdn.bc0a.com/f00000000225793/blog-c7ff.kxcdn.com/blog/wp-content/uploads/2019/11/Banner-Blog-1A-1.jpg) center/cover",
              }}
            >
              Sorting Algorithms Visualization
            </CardTitle>
            <CardText>Visualization is always a better way to study algorithms. This is a web tool which visualizes sorting algorithms, helps students to have good understanding of how they work.</CardText>
            <CardText>HTML/CSS, Express, JavaScript, sorting algorithms</CardText>
            <CardActions border>
              <Button href="https://github.com/nvhphong89/SortingVisualization" target="_blank" colored>GitHub</Button>
              <Button href="https://www.youtube.com/watch?v=n1g1TYdCoRM" target="_blank" colored>Video Demo</Button>
              <Button href="https://salty-spire-35624.herokuapp.com/" target="_blank" colored>Live Demo</Button>
            </CardActions>
          </Card>
        </div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}
export default Projects;
