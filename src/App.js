import React from "react";
import Header from "./components/Header";
import Usuarios from "./components/Usuarios";
import NuevoUsuario from "./components/NuevoUsuario";
import EditarUsuario from "./components/EditarUsuario";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/**Redux */
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Usuarios} />
            <Route exact path="/usuarios/nuevo" component={NuevoUsuario} />
            <Route exact path="/usuarios/editar/:id" component={EditarUsuario}
            />
          </Switch>
        </div>
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
