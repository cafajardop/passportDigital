import { useState, useEffect } from "react";
import axios from "axios";

export default function TypeDocument() {
  const [documento, guardardocumento] = useState([]);

  useEffect(() => {
    const obtenerTipoDocumento = async () => {
      const url = "http://cropsonline-001-site4.atempurl.com/TipoDocumento/GetType";
      const tipdocumentos = await axios.get(url);
      guardardocumento(tipdocumentos.data);
    };
    obtenerTipoDocumento();
  }, []);

  return documento;
}