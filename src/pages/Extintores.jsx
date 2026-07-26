import { Link } from "react-router-dom";
import {
  ArrowLeft,
  FireExtinguisher,
  Tags,
  ListChecks,
  MoveHorizontal,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

function Extintores() {
  return (
    <main className="pagina-modulo pagina-modulo--extintores">
      <Link className="volver" to="/menu">
        <ArrowLeft size={19} aria-hidden="true" />
        Volver al menú
      </Link>

      <header className="pagina-modulo__encabezado">
        <div className="pagina-modulo__icono">
          <FireExtinguisher size={36} aria-hidden="true" />
        </div>

        <p className="pagina-modulo__etiqueta">
          Control de incendios
        </p>

        <h1>Uso de Extintores</h1>

        <p>
          Aprende a identificar el extintor adecuado y conoce el procedimiento
          básico para utilizarlo correctamente.
        </p>
      </header>

      <section className="procedimientos">
        <article className="procedimiento">
          <div className="procedimiento__icono">
            <Tags size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Clasificación
            </span>

            <h2>Tipos de extintores</h2>

            <p>
              Identifica los extintores según su agente y la clase de fuego que
              pueden controlar.
            </p>
          </div>

          <Link className="procedimiento__boton" to="/extintores/tipos">
            Ver contenido
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <ListChecks size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Procedimiento de uso
            </span>

            <h2>Técnica PASS</h2>

            <p>
              Aprende a retirar el seguro, apuntar, presionar y realizar el
              movimiento de barrido.
            </p>
          </div>

          <Link className="procedimiento__boton" to="/extintores/tecnica-pass">
            Ver contenido
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <MoveHorizontal size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Distancia segura
            </span>

            <h2>Distancia recomendada</h2>

            <p>
              Conoce desde qué distancia debes comenzar la descarga del
              extintor.
            </p>
          </div>

          <Link className="procedimiento__boton" to="/extintores/distancia">
            Ver contenido
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <ShieldCheck size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Uso responsable
            </span>

            <h2>Recomendaciones</h2>

            <p>
              Revisa las condiciones necesarias antes de intentar controlar un
              incendio.
            </p>
          </div>

          <Link
            className="procedimiento__boton"
            to="/extintores/recomendaciones"
          >
            Ver contenido
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>
      </section>
    </main>
  );
}

export default Extintores;