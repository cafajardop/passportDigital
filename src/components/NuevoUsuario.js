import React,{useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

/**Actions Redux */
import { crearNuevoUsuarioAction } from '../actions/usuarioActions'
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions';

const NuevoUsuario = ({history}) => {

  /**State del componente */
  const [nombre, guardarnombre] = useState('');
  const [cedula, guardarCedula] = useState('');

  /**Acceder al state del store */
  const cargando = useSelector(state=>state.usuarios.state);
  const error = useSelector(state => state.usuarios.error);
  const alerta = useSelector(state => state.alerta.alerta);

  /**Utilizar dispatch y crear funcion */
  const dispatch = useDispatch();

  /**Enviar la accion */
  const agregarUsuario = (usuario) => dispatch(crearNuevoUsuarioAction (usuario));

  /**Enviando Datos */
  const submitNuevoUsuario = e =>{
    e.preventDefault();

    /**Validar Formulario */
    if(nombre.trim() === '' || cedula.trim() ===''){
      const alerta = {
        msg:'Campos Obligatorios',
        classes: 'alert alert-danger text-center text-uppercase p3'
      }

      dispatch(mostrarAlertaAction(alerta));
      return;
    }

    /**Si no hay errores */
    dispatch(ocultarAlertaAction());

    /**Crear nuevo usuario */
    agregarUsuario({
      nombre,
      cedula
    });

    /**Redireccionar */
    history.push('/');
  }

  return (
      <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
              <div className="card-body">

                <h2 className="text-center mb-4 font-weight-bold">
                    Agregar Nuevo Usuario
                </h2>

                  {alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}

                <form
                  onSubmit={submitNuevoUsuario}
                >

                  <div className="form-group">
                        <label>Nombres</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nombre Usuario"
                          name="nombre"
                          value={nombre}
                          onChange={e => guardarnombre(e.target.value)}
                        />
                  </div>

                  <div className="form-group">
                        <label>Cedula</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Cedula"
                          name="cedula"
                          value={cedula}
                          onChange={e => guardarCedula(e.target.value)}
                        />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                    >Agregar
                  </button>

                </form>

                {cargando ? <p>Cargando..</p>: null}
                {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error yyyy</p> : null}

              </div>
            </div>
        </div>
      </div>
   );
}

export default NuevoUsuario;
