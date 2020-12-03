import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {
    BrowserView,
    MobileView
} from "react-device-detect";
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import logo from "../../resources/images/logo-head-ecopetrol.png";

function NavBar(props) {
    return(
        <React.Fragment>
            <BrowserView>
                <SideNav
                    onSelect={(selected) => {
                        // Add your code here
                        const to = '/' + selected;
                        if (props.info.location.pathname !== to) {
                            document.getElementById('closeNav').click();
                            props.info.history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle id="closeNav" />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Usuarios
                            </NavText>
                            <NavItem eventKey="usuarios/nuevo">
                                <NavText>
                                    Nuevo Usuario
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="timer">
                                <NavText>
                                    Notificacion Timer
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="iraForm">
                            <NavIcon>
                                <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Formulario
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="passportDigital">
                            <NavIcon>
                                <i className="fa fa-fw fa-power-off" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Cerrar Sesion
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                {props.children}
            </BrowserView>
            <MobileView>
                <Navbar bg="light" className="bar-menu" expand="lg" collapseOnSelect={true} fixed="top">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="passportDigital">Home</Nav.Link>
                            <Nav.Link href="#">Usuarios</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/usuarios/nuevo">Nuevo Usuario</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/timer">Notificacion temporizador</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="iraForm">Formulario</Nav.Link>
                            <Nav.Link href="passportDigital">Cerrar Sesion</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{marginTop:'4rem'}}>
                    {props.children}
                </div>
            </MobileView>
        </React.Fragment>
    )
}


export default NavBar;
