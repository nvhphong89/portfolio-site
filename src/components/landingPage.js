import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Landing extends Component{
    render() {
        return(
            <div style={{width:'100%',margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img 
                        src="./assets/avatar1.png"
                        alt="avatar"
                        className="avatar-icon"
                        />
                        <div className="banner-text">
                            <h1>Web Developer</h1>
                            <hr/>
                            <p>
                                HTML/CSS | React | NodeJS | Express | MSSQL | MongoDB | AWS
                            </p>
                            <div className="social-links">
                                {/* linkedIn link */}
                                <a href="https://www.linkedin.com/in/phong-eric-nguyen-55449992/" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"/>
                                </a>
                                {/* Github link */}
                                <a href="https://github.com/nvhphong89" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Landing;