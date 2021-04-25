import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render() {
        return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Phong Nguyen</h2>
                    <img src="./contact-image.JPG" alt="contactImage" style={{height:"250px", borderRadius:"10px"}}/>
                    <p>
                        lorem ipsum dolor sit amet, consectetur
                    </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}><i class="fas fa-mobile-alt"></i>    (705) 977-1804</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}><i class="far fa-envelope"></i>nvh.phong.89@gmail.com</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontSize:"30px", fontFamily:"Anton"}}><i class="fab fa-skype"></i> nvhphong89</ListItemContent>
                            </ListItem>
                        </List>
                    </div>

                </Cell>
            </Grid>
        </div>
        )
    }
}
export default Contact;