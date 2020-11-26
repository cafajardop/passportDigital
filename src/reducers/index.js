import {combineReducers} from 'redux'
import usuariosReducer from './usuariosReducer';
import alertaReducer from './alertaReducer';
import loginReducer from './loginReducer'

export default combineReducers({
  usuarios: usuariosReducer,
  alerta: alertaReducer,
  login: loginReducer
});

