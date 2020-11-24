import React, {Fragment} from 'react';

const Usuarios = () => {
  return ( 
    <Fragment>
      <h2 className="text-center my-5">Listado de Usuarios</h2>

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
            <tr>
              <th scope="col">Nombres</th>
              <th scope="col">Apellidos</th>
              <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </Fragment>
   );
}
 
export default Usuarios;
