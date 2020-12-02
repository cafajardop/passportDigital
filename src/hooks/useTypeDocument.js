import { useState, useEffect } from "react";
import axios from "axios";

export default function TypeDocument() {
  const [documento, guardardocumento] = useState([]);

  useEffect(() => {
    const obtenerTipoDocumento = async () => {
      const url = "http://localhost:4000/tipodocumento";
      const tipdocumentos = await axios.get(url);
      guardardocumento(tipdocumentos.data);
    };
    obtenerTipoDocumento();
  }, []);

  return documento;
}