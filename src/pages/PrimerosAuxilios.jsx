import { Link } from "react-router-dom";
import {
  ArrowLeft,
  HeartPulse,
  Flame,
  Wind,
  Accessibility,
  ArrowRight,
} from "lucide-react";

function PrimerosAuxilios() {
  return (
    <main className="pagina-modulo pagina-modulo--auxilios">
      <Link className="volver" to="/menu">
        <ArrowLeft size={19} aria-hidden="true" />
        Volver al menú
      </Link>

      <header className="pagina-modulo__encabezado">
        <div className="pagina-modulo__icono">
          <HeartPulse size={36} aria-hidden="true" />
        </div>

        <p className="pagina-modulo__etiqueta">
          Atención inmediata
        </p>

        <h1>Primeros Auxilios</h1>

        <p>
          Aprende cómo responder de manera segura y ordenada ante situaciones
          que requieren atención inmediata.
        </p>
      </header>

      <section className="procedimientos">
        <article className="procedimiento">
          <div className="procedimiento__icono">
            <HeartPulse size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Emergencia cardiovascular
            </span>

            <h2>Reanimación cardiopulmonar</h2>

            <p>
              Conoce los pasos básicos para actuar ante una persona que no
              responde y no respira con normalidad.
            </p>
          </div>

          <Link className="procedimiento__boton" to="/primeros-auxilios/rcp">
            Ver procedimiento
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <Flame size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Lesiones térmicas
            </span>

            <h2>Quemaduras</h2>

            <p>
              Aprende las acciones iniciales y recomendaciones para atender
              diferentes tipos de quemaduras.
            </p>
          </div>

          <Link
            className="procedimiento__boton"
            to="/primeros-auxilios/quemaduras"
          >
            Ver procedimiento
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <Wind size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Vías respiratorias
            </span>

            <h2>Atragantamiento</h2>

            <p>
              Identifica una obstrucción de las vías respiratorias y conoce
              cómo brindar ayuda de forma segura.
            </p>
          </div>

          <Link
            className="procedimiento__boton"
            to="/primeros-auxilios/atragantamiento"
          >
            Ver procedimiento
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

     
      </section>
    </main>
  );
}

export default PrimerosAuxilios;