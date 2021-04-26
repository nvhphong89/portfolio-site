import React, {Component} from 'react';
import {Grid, Cell, Button} from 'react-mdl';
import timelineElements from './timelineElements';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import WorkIcon from './workIcon';
import SchoolIcon from './schoolIcon';
import "react-vertical-timeline-component/style.min.css";
class Resume extends Component{
    render() {
        let workIconStyle = {background:"#0774d3"};
        let schoolIconStyle = {background:"#ff8c00"};
        return (
        <div>
            <Grid>
                <Cell className="resume-left-column" col={4}>
                    <div style={{textAlign: 'center'}}>
                        <img src="./assets/contact-image.JPG" alt="avatar" style={{height:"200px", borderRadius:"100px"}}/>
                    </div>
                    <h2 style={{paddingTop:"em"}}>
                        Phong Nguyen
                    </h2>
                    <h4 style={{color: "grey"}}>Web Developer</h4>
                    <hr style={{borderTop:"3px solid #000428", width:"50%"}}/>
                    <p>5 years in IT industry, 1 year experience as Web Developer, well-versed in numerous programming tools and languages. Proficient in both backend and frontend development.</p>
                    <hr style={{borderTop:"3px solid #000428", width:"50%"}}/>
                    <h5>Address</h5>
                    <p>64-2451 Bridletown Circle, Scarborough, ON M1W2Y4</p>
                    <h5>Phone</h5>
                    <p>(705) 977-1804</p>
                    <h5>Email</h5>
                    <p>nvh.phong.89@gmail.com</p>
                    <hr style={{borderTop:"3px solid #000428", width:"50%"}}/>
                </Cell>
                <Cell col={8} className="resume-right-column">
                    <div>
                        <Button target="_blank" href="https://www.dropbox.com/scl/fi/9u9l68r2qtarsfzh7mb1k/Phong-Nguyen-Resume.docx?dl=0&rlkey=esaynoislyvkauozowm4f4una" raised accent>Download Resume</Button>
                        <h1>My Experience</h1>
                        <VerticalTimeline>
                            {timelineElements.map(element=>{
                                let isWorkIcon = element.icon === "work";
                                let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !=="";
                                return(
                                    <VerticalTimelineElement
                                    className="vertical-timeline-element--education" 
                                    key={element.id}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={isWorkIcon ? workIconStyle: schoolIconStyle}
                                    icon={isWorkIcon ? <WorkIcon/>: <SchoolIcon/>}
                                    >
                                    <h5 style={{fontWeight: "bold"}} className="verticle-timeline-element-title">
                                        {element.title}
                                    </h5>
                                    <h6 className="verticle-timeline-element-subtitle">
                                        {element.location}
                                    </h6>
                                    <div id="description">
                                        {element.description.map(item =>{
                                            return(
                                                <p>{item}</p>
                                            )
                                        })}
                                    </div>
                                    {showButton && (<a 
                                    href={element.url}
                                    className={`button ${isWorkIcon? "workButton": "schoolButton"}`}
                                    target="_blank"
                                    >{element.buttonText}</a>)}
                                    </VerticalTimelineElement>
                                )
                            })}
                        </VerticalTimeline>
                    </div>
                    

                </Cell>
            </Grid>
        </div>
        )
    }
}
export default Resume;