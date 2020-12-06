import React, {Fragment, useEffect,useMemo,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

/**Redux */
import {useSelector,useDispatch} from 'react-redux';
import {obtenerUsuariosAction} from '../../actions/usuarioActions';
import User from './User'
import clientAxios from '../../config/axios';


const ListUsersScreen = () => {
  const URL = clientAxios.baseURL;
  const [consultar, guardarConsultar] = useState(false);
  const [usuarioseffect, guardarobtenerusuario] = useState([]);
  
  useEffect(()=>{
    const obtenerUsuarios = async () => {

      if(!consultar){
        const url = `${URL}usuariopasaporte`;
        const usuariosObtener = await axios.get(url);                    
        guardarobtenerusuario(usuariosObtener.data.usuarios);
        guardarConsultar(true)
      }
    };
    obtenerUsuarios();
  },[consultar])
  
  const error = useSelector(state => state.usuarios.error);
  const cargando = useSelector(state => state.usuarios.loading);
     
  return (   
    <Fragment>
      <h2 className="text-center mt-4">Listado de Funcionarios</h2>
      <hr/>

        <div className="col-md-12 align-self-center text-right">
            <div className="mb-2">
                <Link
                    to={"/usuarios/nuevo"}
                    className="btn btn-success btn-sm mr-2">
                    Agregar &#43;
                </Link>
            </div>
        </div>

      { error ? <p className="font-weight-bold alert alert-danger text-centermt-4">Hubo un error</p>: null}
      { cargando ? <p className="text-center">Cargando...</p>: null}

      <table className="table table">
        <thead>
            <tr>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Documento Identidad</th>
              <th scope="col">Cedula</th>
              <th scope="col">Telefono</th>
              <th scope="col">Correo</th>
              <th scope="col">Acceso</th>              
            </tr>
        </thead>
        <tbody>
          { usuarioseffect.length === 0 ? (<tr><td colSpan={3}>No hay usuarios</td></tr>) : (
            usuarioseffect.map(usuario => (
              <User
                key={usuario._id}
                usuario={usuario}
                guardarConsultar={guardarConsultar}
              />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
   );
}

export default ListUsersScreen;