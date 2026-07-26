import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  ClipboardCheck,
  ShieldAlert,
  CircleCheck,
  Backpack,
  ArrowRight,
} from "lucide-react";

function Sismos() {
  return (
    <main className="pagina-modulo pagina-modulo--sismos">
      <Link className="volver" to="/menu">
        <ArrowLeft size={19} aria-hidden="true" />
        Volver al menú
      </Link>

      <header className="pagina-modulo__encabezado">
        <div className="pagina-modulo__icono">
          <Building2 size={36} aria-hidden="true" />
        </div>

        <p className="pagina-modulo__etiqueta">
          Prevención sísmica
        </p>

        <h1>Preparación ante Sismos</h1>

        <p>
          Conoce las medidas preventivas y las acciones que debes seguir antes,
          durante y después de un movimiento sísmico.
        </p>
      </header>

      <section className="procedimientos">
        <article className="procedimiento">
          <div className="procedimiento__icono">
            <ClipboardCheck size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Prevención
            </span>

            <h2>Antes del sismo</h2>

            <p>
              Identifica zonas seguras, prepara suministros y participa en los
              simulacros.
            </p>
          </div>

          <Link className="procedimiento__boton" to="/sismos/antes">
            Ver recomendaciones
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <ShieldAlert size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Protección
            </span>

            <h2>Durante el sismo</h2>

            <p>
              Mantén la calma, protégete y evita utilizar ascensores o correr
              hacia las salidas.
            </p>
          </div>

          <Link className="procedimiento__boton" to="/sismos/durante">
            Ver recomendaciones
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <CircleCheck size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Evaluación posterior
            </span>

            <h2>Después del sismo</h2>

            <p>
              Evalúa posibles riesgos y sigue las indicaciones de los
              responsables de emergencia.
            </p>
          </div>

          <Link className="procedimiento__boton" to="/sismos/despues">
            Ver recomendaciones
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <Backpack size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Suministros esenciales
            </span>

            <h2>Mochila de emergencia</h2>

            <p>
              Conoce los suministros básicos que deben estar disponibles para
              afrontar una emergencia.
            </p>
          </div>

          <Link className="procedimiento__boton" to="/sismos/mochila">
            Ver contenido
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>
      </section>
    </main>
  );
}

export default Sismos;