import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Flame,
  Camera,
  ScanLine,
  Droplets,
  ShieldCheck,
  Shirt,
  Phone,
  Ban,
  TriangleAlert,
} from "lucide-react";

function Quemaduras() {
  const situaciones = [
    {
      titulo: "Calor o fuego",
      descripcion:
        "Contacto con llamas, superficies calientes, vapor o líquidos a alta temperatura.",
      icono: Flame,
    },
    {
      titulo: "Sustancias químicas",
      descripcion:
        "Contacto de la piel o los ojos con productos corrosivos o irritantes.",
      icono: Droplets,
    },
    {
      titulo: "Electricidad",
      descripcion:
        "Lesión provocada por una descarga eléctrica o contacto con una fuente energizada.",
      icono: TriangleAlert,
    },
  ];

  const pasos = [
    {
      numero: 1,
      titulo: "Aleja a la persona del peligro",
      descripcion:
        "Interrumpe el contacto con la fuente de calor, electricidad o sustancia peligrosa sin exponerte.",
      icono: ShieldCheck,
    },
    {
      numero: 2,
      titulo: "Enfría la zona afectada",
      descripcion:
        "Coloca la quemadura bajo agua corriente fresca durante varios minutos. No utilices hielo directamente.",
      icono: Droplets,
    },
    {
      numero: 3,
      titulo: "Retira objetos ajustados",
      descripcion:
        "Retira anillos, relojes o prendas cercanas antes de que aparezca inflamación, siempre que no estén adheridos.",
      icono: Shirt,
    },
    {
      numero: 4,
      titulo: "Protege la quemadura",
      descripcion:
        "Cubre la zona con una gasa limpia o material estéril, sin ejercer presión.",
      icono: ShieldCheck,
    },
    {
      numero: 5,
      titulo: "Solicita atención médica",
      descripcion:
        "Busca ayuda profesional si la quemadura es extensa, profunda o afecta rostro, manos, articulaciones o vías respiratorias.",
      icono: Phone,
    },
  ];

  return (
    <main className="detalle-procedimiento detalle-procedimiento--auxilios">
      <Link
        className="detalle-procedimiento__volver"
        to="/primeros-auxilios"
      >
        <ArrowLeft size={19} aria-hidden="true" />
        Volver a Primeros Auxilios
      </Link>

      <header className="detalle-procedimiento__encabezado">
        <div className="detalle-procedimiento__cabecera">
          <div className="detalle-procedimiento__presentacion">
            <div className="detalle-procedimiento__icono-principal">
              <Flame size={38} aria-hidden="true" />
            </div>

            <p className="detalle-procedimiento__etiqueta">
              Lesiones térmicas
            </p>

            <h1>Atención de Quemaduras</h1>
          </div>

          <Link
            className="detalle-procedimiento__boton-ra-superior"
            to="/experiencia-ra/quemaduras"
          >
            <Camera size={20} aria-hidden="true" />

            <span>
              <small>Experiencia interactiva</small>
              Iniciar experiencia RA
            </span>
          </Link>
        </div>

        <p className="detalle-procedimiento__introduccion">
          Una quemadura es una lesión causada por calor, fuego, electricidad,
          productos químicos u otras fuentes que dañan la piel y los tejidos.
        </p>
      </header>

      <section className="detalle-procedimiento__seccion">
        <div className="detalle-procedimiento__titulo-seccion">
          <span>Identificación del riesgo</span>
          <h2>¿En qué situaciones puede producirse?</h2>
        </div>

        <div className="situaciones-rcp">
          {situaciones.map((situacion) => {
            const Icono = situacion.icono;

            return (
              <article
                className="situacion-rcp"
                key={situacion.titulo}
              >
                <div className="situacion-rcp__icono">
                  <Icono size={27} aria-hidden="true" />
                </div>

                <div>
                  <h3>{situacion.titulo}</h3>
                  <p>{situacion.descripcion}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="alerta-procedimiento">
        <Ban size={26} aria-hidden="true" />

        <div>
          <h2>No apliques hielo, cremas ni remedios caseros</h2>

          <p>
            No revientes las ampollas ni retires prendas adheridas a la piel.
            Estas acciones pueden aumentar el daño y el riesgo de infección.
          </p>
        </div>
      </section>

      <section className="detalle-procedimiento__seccion">
        <div className="detalle-procedimiento__titulo-seccion">
          <span>Procedimiento guiado</span>
          <h2>Pasos para atender una quemadura</h2>
        </div>

        <div className="lista-pasos">
          {pasos.map((paso) => {
            const Icono = paso.icono;

            return (
              <article className="paso-procedimiento" key={paso.numero}>
                <div className="paso-procedimiento__numero">
                  {paso.numero}
                </div>

                <div className="paso-procedimiento__icono">
                  <Icono size={25} aria-hidden="true" />
                </div>

                <div className="paso-procedimiento__contenido">
                  <h3>{paso.titulo}</h3>
                  <p>{paso.descripcion}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bloque-ra bloque-ra--destacado">
        <div className="bloque-ra__icono">
          <ScanLine size={34} aria-hidden="true" />
        </div>

        <div className="bloque-ra__contenido">
          <p className="bloque-ra__etiqueta">
            Experiencia de Realidad Aumentada
          </p>

          <h2>Practica la atención inicial de una quemadura</h2>

          <p>
            Activa la cámara para preparar una experiencia visual que mostrará
            cómo enfriar, proteger y atender correctamente la zona afectada.
          </p>
        </div>

        <Link
          className="bloque-ra__boton"
          to="/experiencia-ra/quemaduras"
        >
          <Camera size={20} aria-hidden="true" />
          Iniciar experiencia RA
        </Link>
      </section>
    </main>
  );
}

export default Quemaduras;