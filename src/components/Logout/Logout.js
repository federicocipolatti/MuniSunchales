import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button id="btn" onClick={() => logout({ returnTo: window.location.origin })}>
        Cerrar Sesión
    </button>
  );
};