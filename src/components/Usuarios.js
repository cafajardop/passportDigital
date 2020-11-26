import React, {Fragment, useEffect} from 'react';
/**Redux */
import {useSelector,useDispatch} from 'react-redux';
import {obtenerUsuariosAction} from '../actions/usuarioActions';
import Usuario from './Usuario'


const Usuarios = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
      debugger;
    /**Consultar api */
    const cargarUsuarios = () => dispatch (obtenerUsuariosAction());
    cargarUsuarios();
    // eslint-disable-next-line
  },[]);

  const usuarios = useSelector(state => state.usuarios.usuarios);
  const error = useSelector(state => state.usuarios.error);
  const cargando = useSelector(state => state.usuarios.loading);

  return (
    <Fragment>
      <h2 className="text-center my-5">Listado de Usuarios</h2>

      { error ? <p className="font-weight-bold alert alert-danger text-center
      mt-4">Hubo un error</p>: null}
      { cargando ? <p className="text-center">Cargando...</p>: null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombres</th>
              <th scope="col">Cedula</th>
              <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
          { usuarios.length === 0 ? (<tr><td colSpan={3}>No hay usuarios</td></tr>) : (
            usuarios.map(usuario => (
              <Usuario
                key={usuario.id}
                usuario={usuario}
              />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
   );
}

export default Usuarios;
