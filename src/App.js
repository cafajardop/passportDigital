import React from "react";
import Header from "./components/Header";
import Usuarios from './components/Usuarios';
import NuevoUsuario from './components/NuevoUsuario';
import EditarUsuario from './components/EditarUsuario';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />      
      <div className="container mt-5">
        <Switch>
            <Route exact path="/" component={Usuarios}/>
            <Route exact path="/usuarios/nuevo" component={NuevoUsuario}/>
            <Route exact path="/usuarios/editar/:id" component={EditarUsuario} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/**1. React router dom npm i react-router-dom */
