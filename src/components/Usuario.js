import React from 'react';
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2';

/**Redux */
import {useDispatch} from 'react-redux';
import {borrarUsuarioAction,obtenerUsuarioEditarAction} from '../actions/usuarioActions'; 

 const Usuario = ({usuario}) => {
   const { nombre, cedula , id } = usuario

   const dispatch = useDispatch();
   const history = useHistory();/**Habilitar history para redirección */

   /**Confirmacion de eliminar el usuario */
   const confirmarEliminarUsuario = id => {

    Swal.fire({
      title: 'Esta seguro?',
      text: "Un usuario que se elimina no se puede recuperar!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText:'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        /**Pasarlo al action */
          dispatch(borrarUsuarioAction(id));        
      }
    });
   }
  /**Función que redirige de forma programada */   
  const redireccionarEdicion = usuario => {
    dispatch( obtenerUsuarioEditarAction(usuario));
    history.push(`/usuarios/editar/${usuario.id}`)
  }

   return ( 
        <tr>          
          <td>{nombre}</td>
          <td>{cedula}</td>
          <td className="acciones">
            <button
                type="button"
                onClick={()=> redireccionarEdicion(usuario)}
                className= "btn btn-primary mr-2"
                >Editar
            </button>
            <button 
              type="button"
              className="btn btn-danger"
              onClick={() => confirmarEliminarUsuario(id)}
              >Eliminar
            </button>
          </td>
        </tr>
    );
 }
  
 export default Usuario;