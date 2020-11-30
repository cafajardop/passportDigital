import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../components/shared/Header";
import Usuarios from "../components/users/Usuarios";
import NavBar from "../components/shared/NavBar";
import NuevoUsuario from "../components/users/NuevoUsuario";
import EditarUsuario from "../components/users/EditarUsuario";
import styled from 'styled-components';

const Contenedor = styled.div`      
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
    <>
        <Contenedor>
           <Headers>
              <Header/>
           </Headers>
            <SideBar>
                <NavBar/>
            </SideBar>           
           <Main>
                <Switch>
                    <Route exact path="/" render={(props) => (<NavBar info={props} toggleMenu='true'>{" "} <Usuarios info={props} />{" "} </NavBar>)}/>
                    <Route exact path="/usuarios/nuevo" render={(props) => <NavBar info={props} toggleMenu='true'> <NuevoUsuario info={props} /> </NavBar>}/>
                    <Route exact path="/usuarios/editar/:id" render={(props) => <NavBar info={props} toggleMenu='true'> <EditarUsuario info={props} /> </NavBar>}/>

                    <Redirect to="/usuarios" />
              </Switch>
            
           </Main>           
        </Contenedor>
    </>
  );
};
