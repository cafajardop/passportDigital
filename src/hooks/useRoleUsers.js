import { useState, useEffect } from "react";
import axios from "axios";

export default function RoleUsers() {
  const [rol, guardarrol] = useState([]);

  useEffect(() => {
    const obtenerRoles = async () => {
      const url = "http://localhost:4000/roles";
      const tipRol = await axios.get(url);
      guardarrol(tipRol.data);
    };
    obtenerRoles();
  }, []);

  return rol;
}