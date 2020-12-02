import React, {useEffect} from 'react';
/**Redux */
import {useSelector,useDispatch} from 'react-redux';
import {obtenerUsuariosAction} from '../../actions/usuarioActions';
import ListUsersScreen from './ListUsersScreen';
import ProfileuserScreen from './ProfileuserScreen';

const UsersScreen = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("activa useeffect");
    /**Consultar api */
    const cargarUsuarios = () => dispatch (obtenerUsuariosAction());
    cargarUsuarios();
  },[]);

  const nombreusuarioLogin = localStorage.getItem('userLocal');  

  const usuarios = useSelector(state => state.usuarios.usuarios);  
  const filter = usuarios.filter(user => user.nombreusuario === nombreusuarioLogin);
  const [ user ] = filter;
  const {rol} = user;

  return (    
    <div>
        {rol ==="ADMIN" ?
          <ListUsersScreen/>
        :        
          <ProfileuserScreen
            key={user.id}
            usuario={user}
          />
        }
    </div>
   );
}

export default UsersScreen;