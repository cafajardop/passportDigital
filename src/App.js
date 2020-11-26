import React, { useState } from "react";
import Header from "./components/shared/Header";
import Usuarios from "./components/Usuarios";
import NuevoUsuario from "./components/NuevoUsuario";
import EditarUsuario from "./components/EditarUsuario";
import Login from "./components/Login";
import NavBar from "./components/shared/NavBar";
import IraForm from "./components/ira-form";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dexie from "dexie";

/**Redux */
import { Provider, useSelector,useDispatch } from "react-redux";
import store from "./store";

function App() {

  const [login, mostrarLogin] = useState(false);

  return (
    <Router>
      <Provider store={store}>
        { login ? <Login/> :
            <React.Fragment>
              <Header />
              <div className="container mt-5">
                <Switch>
                  <Route exact path="/" render={(props) => <NavBar info={props}> <Usuarios info={props} /> </NavBar>} />
                  <Route exact path="/usuarios/nuevo" component={NuevoUsuario} />
                  <Route exact path="/usuarios/editar/:id" component={EditarUsuario} />
                  <Route exact path="/iraForm" render={(props) => <NavBar info={props}> <IraForm db={new Dexie('FormDatabase')} /> </NavBar>} />
                </Switch>
              </div>
            </React.Fragment>
        }
      </Provider>
    </Router>
  );
}

export default App;

/**1. React router dom npm i react-router-dom */
/**2. Instalar json-server npm install -g json-server
 * desplegar el json.server
 * json-server db.json --port 4000
 */
/**3. Configuración en Redux
 * npm i react-redux redux redux-thunk
 */
