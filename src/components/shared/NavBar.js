import React from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {
    BrowserView,
    MobileView
} from "react-device-detect";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

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
                                Charts
                            </NavText>
                            <NavItem eventKey="usuarios/nuevo">
                                <NavText>
                                    Line Chart
                                </NavText>
                            </NavItem>
                            <NavItem eventKey="charts/barchart">
                                <NavText>
                                    Bar Chart
                                </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="iraForm">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Formulario
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="logOn">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
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
                    <Navbar.Brand href="/">Pasaporte Digital</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Charts</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/usuarios/nuevo">Line Chart</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Bar Chart</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/iraForm">Formulario</Nav.Link>
                            <Nav.Link href="/logOn">Cerrar Sesion</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{marginTop:'8rem'}}>
                    {props.children}
                </div>
            </MobileView>
        </React.Fragment>
    )
}


export default NavBar;
