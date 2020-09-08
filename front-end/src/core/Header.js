import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <div className="top_menu">
                <div className="container">
                    <Row>
                        <Col lg="7">
                            <div className="float-left">
                                <p>Phone: +92 335 7193040</p>
                                <p>email: info@electrop.com</p>
                            </div>
                        </Col>
                        <Col lg="5">
                            <div className="float-right">
                                <ul className="right_side">
                                    <li>
                                        <a href="cart.html">
                                            gift card
                                        </a>
                                    </li>
                                    <li>
                                        <a href="tracking.html">
                                            track order
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
