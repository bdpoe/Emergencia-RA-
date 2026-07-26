import { Link } from "react-router-dom";
import {
  Activity,
  FireExtinguisher,
  DoorOpen,
  Building2,
  ArrowRight,
} from "lucide-react";

function MenuPrincipal() {
  return (
    <main className="menu">
      <header className="menu__encabezado">
        <p className="menu__etiqueta">Universidad Autónoma del Perú</p>

        <h1 className="menu__titulo">Prepárate para actuar</h1>

        <p className="menu__descripcion">
          Explora los módulos educativos y aprende cómo responder de manera
          segura, rápida y organizada ante diferentes situaciones de
          emergencia.
        </p>
      </header>

      <section className="menu__modulos">
        <article className="modulo modulo--auxilios">
          <div className="modulo__icono">
            <Activity size={32} aria-hidden="true" />
          </div>

          <div className="modulo__contenido">
            <span className="modulo__categoria">Atención inmediata</span>

            <h2>Primeros Auxilios</h2>

            <p>
              Aprende procedimientos básicos para atender lesiones y
              situaciones que requieren una respuesta inmediata.
            </p>
          </div>

          <div className="modulo__acciones">
            <Link
              className="boton-modulo"
              to="/primeros-auxilios"
            >
              Ingresar
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className="modulo modulo--extintores">
          <div className="modulo__icono">
            <FireExtinguisher size={32} aria-hidden="true" />
          </div>

          <div className="modulo__contenido">
            <span className="modulo__categoria">Control de incendios</span>

            <h2>Uso de Extintores</h2>

            <p>
              Identifica los tipos de extintores y aprende a aplicar
              correctamente la técnica PASS.
            </p>
          </div>

          <div className="modulo__acciones">
            <Link className="boton-modulo" to="/extintores">
              Ingresar
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className="modulo modulo--evacuacion">
          <div className="modulo__icono">
            <DoorOpen size={32} aria-hidden="true" />
          </div>

          <div className="modulo__contenido">
            <span className="modulo__categoria">Desplazamiento seguro</span>

            <h2>Rutas de Evacuación</h2>

            <p>
              Reconoce las salidas de emergencia, las zonas seguras y los
              puntos de encuentro.
            </p>
          </div>

          <div className="modulo__acciones">
            <Link
              className="boton-modulo"
              to="/rutas-evacuacion"
            >
              Ingresar
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </article>

        <article className="modulo modulo--sismos">
          <div className="modulo__icono">
            <Building2 size={32} aria-hidden="true" />
          </div>

          <div className="modulo__contenido">
            <span className="modulo__categoria">Prevención sísmica</span>

            <h2>Sismos</h2>

            <p>
              Conoce las acciones recomendadas antes, durante y después de un
              movimiento sísmico.
            </p>
          </div>

          <div className="modulo__acciones">
            <Link className="boton-modulo" to="/sismos">
              Ingresar
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}

export default MenuPrincipal;