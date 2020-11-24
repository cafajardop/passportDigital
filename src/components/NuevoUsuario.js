import React, {Fragment} from 'react';

const NuevoUsuario = () => {
  return ( 
    <Fragment>
      <div className="row justify-content-center">
        <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                
                <h2 className="text-center mb-4 font-weight-bold">
                    Agregar Nuevo Usuario
                </h2>

                <form>
                  
                  <div className="form-group">
                        <label>Nombres</label>
                        <input 
                          type="text"
                          className="form-control"
                          placeholder="Nombre Usuario"
                          name="nombre"
                        />
                  </div>

                  <div className="form-group">
                        <label>Cedula</label>
                        <input 
                          type="text"
                          className="form-control"
                          placeholder="Cedula"
                          name="cedula"
                        />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                    >Agregar
                  </button>

                </form>
              </div>
            </div>
        </div>
      </div>      
    </Fragment>
   );
}
 
export default NuevoUsuario;
