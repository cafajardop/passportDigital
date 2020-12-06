import { useState, useEffect } from "react";
import axios from "axios";
import clientAxios from '../config/axios';

export default function RoleUsers() {
  const URL = clientAxios.baseURL;

  const [rol, guardarrol] = useState([]);
  useEffect(() => {
    const obtenerRoles = async () => {      
      const url = `${URL}rolpasaporte`;
      const tipRol = await axios.get(url);
      guardarrol(tipRol.data.rol);
    };
    obtenerRoles();
  }, []);

  return rol;
}