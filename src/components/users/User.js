import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

/**Redux */
import { useDispatch } from "react-redux";
import {
  borrarUsuarioAction,
  obtenerUsuarioEditarAction,
} from "../../actions/usuarioActions";

const User = ({ usuario }) => {
  const {
    id,
    nombreusuario,
    primerapellido,
    segundoapellido,
    primernombre,
    segundonombre,
    cedula,
    tipodocumento,
    telefono,
    correo,
  } = usuario;

  const dispatch = useDispatch();
  const history = useHistory(); /**Habilitar history para redirección */
  const user = localStorage.getItem("userLocal");

  /**Confirmacion de eliminar el usuario */
  const confirmarEliminarUsuario = (id) => {
    if (nombreusuario === user) {
      Swal.fire({
        icon: "error",
        title: "No se puede eliminar asi mismo",
        text: "Hubo un error",
      });
      return;
    }

    Swal.fire({
      title: "Esta seguro?",
      text: "Un usuario que se elimina no se puede recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        /**Pasarlo al action */
        dispatch(borrarUsuarioAction(id));
      }
    });
  };

  /**Función que redirige de forma programada */
  const redireccionarEdicion = (usuario) => {
    dispatch(obtenerUsuarioEditarAction(usuario));
    history.push(`/usuarios/editar/${usuario.id}`);
  };

  return (
    <tr>
      <td>
        {primerapellido} {segundoapellido}
      </td>
      <td>
        {primernombre} {segundonombre}{" "}
      </td>
      <td>{tipodocumento}</td>
      <td>{cedula}</td>
      <td>{telefono}</td>
      <td>{correo}</td>
      <td className="acciones">
        <button
          onClick={() => redireccionarEdicion(usuario)}
          className="btn-ecopetrol"
        >
          Editar
        </button>

        <button
          onClick={() => confirmarEliminarUsuario(id)}
          className="btn-ecopetrol"
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default User;
