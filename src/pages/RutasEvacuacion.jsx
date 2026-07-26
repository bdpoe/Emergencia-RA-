import { Link } from "react-router-dom";
import {
  ArrowLeft,
  DoorOpen,
  Map,
  LogOut,
  MapPin,
  Timer,
  ArrowRight,
} from "lucide-react";

function RutasEvacuacion() {
  return (
    <main className="pagina-modulo pagina-modulo--evacuacion">
      <Link className="volver" to="/menu">
        <ArrowLeft size={19} aria-hidden="true" />
        Volver al menú
      </Link>

      <header className="pagina-modulo__encabezado">
        <div className="pagina-modulo__icono">
          <DoorOpen size={36} aria-hidden="true" />
        </div>

        <p className="pagina-modulo__etiqueta">
          Desplazamiento seguro
        </p>

        <h1>Rutas de Evacuación</h1>

        <p>
          Reconoce las señales, salidas y zonas seguras para realizar una
          evacuación organizada.
        </p>
      </header>

      <section className="procedimientos">
        <article className="procedimiento">
          <div className="procedimiento__icono">
            <Map size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Orientación
            </span>

            <h2>Plano de evacuación</h2>

            <p>
              Consulta la ubicación de las rutas y los elementos de seguridad
              del establecimiento.
            </p>
          </div>

          <Link
            className="procedimiento__boton"
            to="/rutas-evacuacion/plano"
          >
            Ver plano
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <LogOut size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Salida segura
            </span>

            <h2>Salidas de emergencia</h2>

            <p>
              Identifica las salidas habilitadas que deben utilizarse durante
              una evacuación.
            </p>
          </div>

          <Link
            className="procedimiento__boton"
            to="/rutas-evacuacion/salidas"
          >
            Ver contenido
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <MapPin size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Zona segura
            </span>

            <h2>Punto de encuentro</h2>

            <p>
              Conoce el lugar seguro donde deben reunirse las personas
              evacuadas.
            </p>
          </div>

          <Link
            className="procedimiento__boton"
            to="/rutas-evacuacion/punto-encuentro"
          >
            Ver contenido
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>

        <article className="procedimiento">
          <div className="procedimiento__icono">
            <Timer size={28} aria-hidden="true" />
          </div>

          <div className="procedimiento__contenido">
            <span className="procedimiento__categoria">
              Tiempo de respuesta
            </span>

            <h2>Tiempo estimado</h2>

            <p>
              Revisa recomendaciones para desplazarte sin correr y sin generar
              desorden.
            </p>
          </div>

          <Link
            className="procedimiento__boton"
            to="/rutas-evacuacion/tiempo"
          >
            Ver contenido
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </article>
      </section>
    </main>
  );
}

export default RutasEvacuacion;