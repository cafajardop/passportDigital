import React, {Component, Fragment} from "react";
import Header from "./components/shared/Header";
import Usuarios from "./components/users/Usuarios";
import NuevoUsuario from "./components/users/NuevoUsuario";
import EditarUsuario from "./components/users/EditarUsuario";
import Login from "./components/auth/Login";
import NavBar from "./components/shared/NavBar";
import IraForm from "./components/ira-form";
import { BrowserView } from "react-device-detect";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dexie from "dexie";

import Auth from "./components/auth/auth";

/*Redux*/
import configureStore from './reducers/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import LogOut from "./components/auth/logOut";

const { store, persistor } = configureStore();

class App extends Component {

    state = {
        login: true,
        expanded: false
    }

    getSession = (session) => {
        this.setState({
            login: session
        });
    }

    expandedMenu = () => {
        this.setState({
            expanded: !this.state.expanded
        });
    }

    render() {
        return (
            <Router>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Auth eventLogin={this.getSession} />
                        { this.state.login ? <Login eventLogin={this.getSession}/> :
                            <Fragment>
                                <BrowserView>
                                    <Header />
                                </BrowserView>
                                <div className="container mt-5">
                                    <Switch>
                                        <Route exact path="/" render={(props) => <NavBar info={props} toggleMenu={this.expandedMenu}> <Usuarios info={props} /> </NavBar>} />
                                        <Route exact path="/passportDigital" render={(props) => <NavBar info={props} toggleMenu={this.expandedMenu}> <Usuarios info={props} /> </NavBar>} />
                                        <Route exact path="/usuarios/nuevo" render={(props) => <NavBar info={props} toggleMenu={this.expandedMenu}> <NuevoUsuario info={props} /> </NavBar>}/>
                                        <Route exact path="/usuarios/editar/:id" render={(props) => <NavBar info={props} toggleMenu={this.expandedMenu}> <EditarUsuario info={props} /> </NavBar>}/>
                                        <Route exact path="/iraForm" render={(props) => <NavBar info={props} toggleMenu={this.expandedMenu}> <IraForm db={new Dexie('FormDatabase')} /> </NavBar>} />
                                        <Route exact path="/logOn" component={ LogOut } />
                                    </Switch>
                                </div>
                            </Fragment>
                        }
                    </PersistGate>
                </Provider>
            </Router>
        );
    }
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
/**4. Deplegar gitpages
 * npm run build
 * npm run deploy
 */
