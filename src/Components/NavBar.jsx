import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import fyloNavLogo from '../images/logo.svg';
import Nav from 'react-bootstrap/Nav';
import '../Css/NavBar.css'

class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar className={'navigationBar'}>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src={fyloNavLogo}
                            className="d-inline-block align-top"
                        /></Navbar.Brand>
                    <Nav className="mr-auto"/>
                    <Nav>
                        <Nav.Link>
                            Features
                        </Nav.Link>
                        <Nav.Link >
                            Team
                        </Nav.Link>
                        <Nav.Link>
                            Sign In
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

NavBar.propTypes = {};

export default NavBar;
