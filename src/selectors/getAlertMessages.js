export const getAlertMessages =(msj) =>{
  const alerta = {
    msg: `${msj}`,
    classes: "alert alert-danger text-center text-uppercase p3",
  };

  return alerta;
}