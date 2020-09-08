import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'; 
// import logo from "../logo.PNG";
// import styled from 'styled-components';

import { Navbar, NavbarToggler, NavItem, Collapse, NavbarBrand, Nav, NavLink, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

export default class NavigationBar extends Component {
    
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <Navbar color="faded" light expand="md">
                        {/* Brandname */}
                        <NavbarBrand href="/">
                            {/* <Image /> */}
                            <p>PIA </p>
                        </NavbarBrand>
                        {/* Add toggler to auto-collapse */}
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse className="navbar navbar-expand-lg navbar-light w-100" isOpen={this.state.isOpen} navbar>

                        <div class="row w-100 mr-0">
                            <div class="col-lg-7 pr-0">
                        {/*Pull left */}
                        <Nav className="nav navbar-nav center_nav pull-right" navbar>
                            <NavItem>
                                <NavLink href="/" className="active">
                                    Home
                                </NavLink>
                            </NavItem>

                            {/* Pull right */}
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="active">
                                Shop
                                </DropdownToggle>

                                <DropdownMenu className="nav-item submenu dropdown" >
                                <DropdownItem className="nav-item">
                                    Product Details
                                </DropdownItem>
                                <DropdownItem className="nav-item">
                                    Shopping Cart
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                                    <NavLink href="/" className="active">
                                        Contact
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="/" className="active">
                                        Blog
                                    </NavLink>
                            </NavItem>
                        </Nav>
                        </div>
                        </div>
                    </Collapse>
                    </Navbar>
                </div>           
            </React.Fragment>
                
        );
    }
}


// const NavWrapper = styled.nav`
//     background: #992e6b;
//     padding: 0.1rem 0.1rem;
//     .nav-link{
//         color: #ffffff !important;
//         font-size: 1.3rem;
//         text-transform: capitalize !important;
//     }
// `;

// const Image = styled.img`
//     width:170px;
//     height:150px;
// `;


