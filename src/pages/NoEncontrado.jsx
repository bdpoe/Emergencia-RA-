import { Link } from "react-router-dom";

function NoEncontrado() {
  return (
    <main>
      <h1>Página no encontrada</h1>

      <p>La dirección solicitada no existe.</p>

      <Link to="/">Regresar al inicio</Link>
    </main>
  );
}

export default NoEncontrado;