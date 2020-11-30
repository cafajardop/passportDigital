import React from "react";

/*Redux*/
import configureStore from "./reducers/index";
import { Provider } from "react-redux";
import { AppRouter } from "./routers/AppRouter";

const { store } = configureStore();

export const PassportApp = () => {

  return(
    <Provider store={store}>
       <AppRouter/>
    </Provider>
  ); 
};

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
