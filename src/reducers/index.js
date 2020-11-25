import {combineReducers} from 'redux'
import usuariosReducer from './usuariosReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
  usuarios: usuariosReducer,
  alerta: alertaReducer
});

