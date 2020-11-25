import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';/**Index.js */

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk) /**Solo se pasa si usamos el thunk */,
    /**Sirve para ver la herramienta developer tools de redux */
    /**Si no esta instalado devtools debemos anexar este codigo para que no se rompa en otro nav */
    typeof window === 'object'  && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !=='undefined' ?
     window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;

