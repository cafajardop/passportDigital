import { useState, useEffect } from "react";
import axios from "axios";
import clientAxios from '../config/axios';

export default function TypeDocument(user) {
  const URL = clientAxios.baseURL;
  
  const [documento, guardardocumento] = useState([]);
  useEffect(() => {
    const obtenerTipoDocumento = async () => {
      const url = `${URL}tipodocumentoPasaporte`;
      const tipdocumentos = await axios.get(url);      
      guardardocumento(tipdocumentos.data.tipodocumento);      
    };
    obtenerTipoDocumento();
  }, []);

  return documento;
}