import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import loginReducer from "./loginReducer";
import usuariosReducer from "./usuariosReducer";
import alertaReducer from "./alertaReducer";
import questionReducer from "./questionsReducer";
import repliesReducer from "./repliesReducer";
import { authReducer } from "./authReducer";

function configureStore(initialState = {}) {
    const reducer = combineReducers({
        auth: () => ({ mock: true }),
        form: persistReducer(
            {
                key: "form", // key for localStorage key, will be: "persist:form"
                storage,
                debug: true,
                blacklist: [''],
            },
            loginReducer
        ),
        usuarios: usuariosReducer,
        alerta: alertaReducer,
        questions: questionReducer,
        replies: repliesReducer,
        autho: authReducer
    });

    // const store = createStore(persistReducer({
    //     key: "root",
    //     debug: true,
    //     storage,
    //     whitelist: ['auth'],
    // }, reducer), initialState);

    const store = createStore(persistReducer({
            key: "root",
            debug: true,
            storage,
            whitelist: ['auth'],
        }, reducer), compose(
        applyMiddleware(thunk) /**Solo se pasa si usamos el thunk */,
        /**Sirve para ver la herramienta developer tools de redux */
        /**Si no esta instalado devtools debemos anexar este codigo para que no se rompa en otro nav */
        typeof window === 'object'  && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !=='undefined' ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ));

    console.log("initialState", store.getState());

    const persistor = persistStore(store, null, () => {
        // if you want to get restoredState
        console.log("restoredState", store.getState());
    });

    return { store, persistor };
}

export default configureStore;
