import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../components/shared/Header";
import UsersScreen from "../components/users/UsersScreen";
import NavBar from "../components/shared/NavBar";
import NewuserScreen from "../components/users/NewuserScreen";
import EdituserScreen from "../components/users/EdituserScreen";
import styled from 'styled-components';
import IraformScreen from "../components/questions/IraformScreen";
import Dexie from "dexie";
import {
    BrowserView
} from "react-device-detect";
import Timer from '../components/questions/Timer';

const Contenedor = styled.div`{
  height:auto;
  display: grid;  
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  grid-template-rows: 10px 1fr;
  grid-template-columns: 60px 1fr;
}`;

const SideBar = styled.div `  
  grid-area: sidebar;
`
const Headers = styled.div `  
  grid-area: header;
`
const Main = styled.div `  
  grid-area: main;
  margin: 50px 25px 0 25px;  
`

export const DashboardRoutes = () => {
  return (
      <React.Fragment>
          <Contenedor>
              <Headers>
                  <BrowserView>
                      <Header />
                  </BrowserView>
              </Headers>
              <SideBar>

              </SideBar>
              <Main>
                  <Switch>
                      <Route exact path="/" render={(props) => (<NavBar info={props} toggleMenu='true'>{" "} <UsersScreen info={props} />{" "} </NavBar>)}/>
                      <Route exact path="/usuarios/nuevo" render={(props) => <NavBar info={props} toggleMenu='true'> <NewuserScreen info={props} /> </NavBar>}/>
                      <Route exact path="/usuarios/editar/:id" render={(props) => <NavBar info={props} toggleMenu='true'> <EdituserScreen info={props} /> </NavBar>}/>
                      <Route exact path="/iraForm" render={ (props) => <NavBar info={props} toggleMenu='true'> <IraformScreen db={new Dexie('FormDatabase')} /> </NavBar> } />
                      <Route exact path="/timer" component={Timer}/>
                  </Switch>
              </Main>
          </Contenedor>
      </React.Fragment>
  );
};
