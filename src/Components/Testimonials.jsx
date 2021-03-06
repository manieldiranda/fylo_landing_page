import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import computerIcon from "../images/icon-access-anywhere.svg";
import securityIcon from "../images/icon-security.svg";
import collaborationIcon from "../images/icon-collaboration.svg";
import fileIcon from "../images/icon-any-file.svg";
import '../Css/Testimonials.css'
import profilePic1 from '../images/profile-1.jpg'
import profilePic2 from '../images/profile-2.jpg'
import profilePic3 from '../images/profile-3.jpg'

class Testimonials extends Component {
    render() {
        return (
            <div className={'testimonialsContainer'}>
                <Container className={'testimonialCardsContainer'}>
                    <Row className={'testimonialCardRow'}>
                        <Col className={'testimonialCard'}
                             xs={12}

                             sm={12}
                             md={4}
                        >
                            <p> Fylo has improved our team productivy by
                                an order of maagnitude. Since making the switch our team has become
                                a well-oiled collaboration machine.</p>
                            <p> <b>Satish Patel </b></p>
                            <p><img className={'profilePicture'} src={profilePic1}/> Founder and CEO</p>


                        </Col>
                        <Col className={'testimonialCard'}
                             xs={12}

                             sm={12}
                             md={4}
                        >
                            <p> Fylo has improved our team productivy by
                                an order of maagnitude. Since making the switch our team has become
                                a well-oiled collaboration machine.</p>
                            <p> <b>Satish Patel </b></p>
                            <p><img className={'profilePicture'} src={profilePic2}/> Founder and CEO</p>

                        </Col>
                        <Col className={'testimonialCard'}
                             xs={12}
                             sm={12}
                             md={4}
                        >

                            <p> Fylo has improved our team productivy by
                                an order of maagnitude. Since making the switch our team has become
                                a well-oiled collaboration machine.</p>
                            <p> <b>Satish Patel </b></p>
                            <p><img className={'profilePicture'} src={profilePic3}/> Founder and CEO</p>

                        </Col>

                    </Row>
                </Container>

            </div>
        );
    }
}

Testimonials.propTypes = {};

export default Testimonials;
