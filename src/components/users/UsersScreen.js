import React, {useEffect} from 'react';
/**Redux */
import {useSelector,useDispatch} from 'react-redux';
import {obtenerUsuariosAction} from '../../actions/usuarioActions';
import ListUsersScreen from './ListUsersScreen';
import ProfileuserScreen from './ProfileuserScreen';
import {getUserLogin} from '../../actions/estadoLoginActions';

const UsersScreen = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    /**Consultar api */
    const cargarUsuarios = () => dispatch (obtenerUsuariosAction());
    cargarUsuarios();
    const loadUserLogin = () => dispatch(getUserLogin());
    loadUserLogin();
  },[]);

  const userLogin = useSelector(state => state.form.login);

  return (
    <div>
      {
        userLogin == null ?
            <div>Cargando</div> :
            userLogin.rol ==="ADMIN" ?
                <ListUsersScreen/>
                :
                <ProfileuserScreen
                    key={userLogin.id}
                    usuario={userLogin}
                />
      }
    </div>
   );
}

export default UsersScreen;