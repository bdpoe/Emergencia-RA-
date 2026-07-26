import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Wind,
  Camera,
  ScanLine,
  MessageCircleOff,
  Hand,
  ShieldCheck,
  Phone,
  Repeat2,
  HeartPulse,
  Ban,
} from "lucide-react";

function Atragantamiento() {
  const señales = [
    {
      titulo: "No puede hablar",
      descripcion:
        "La persona intenta responder, pero no puede emitir palabras o sonidos.",
      icono: MessageCircleOff,
    },
    {
      titulo: "No puede respirar",
      descripcion:
        "Presenta dificultad extrema para ingresar aire o deja de respirar.",
      icono: Wind,
    },
    {
      titulo: "Tos débil o silenciosa",
      descripcion:
        "La tos no logra expulsar el objeto y puede volverse cada vez más débil.",
      icono: Hand,
    },
    {
      titulo: "Se lleva las manos al cuello",
      descripcion:
        "Este gesto suele indicar que existe una obstrucción grave de la vía respiratoria.",
      icono: ShieldCheck,
    },
  ];

  const pasos = [
    {
      numero: 1,
      titulo: "Confirma la obstrucción grave",
      descripcion:
        "Pregunta si se está atragantando. Si no puede hablar, respirar o toser con fuerza, actúa inmediatamente.",
      icono: MessageCircleOff,
    },
    {
      numero: 2,
      titulo: "Solicita ayuda",
      descripcion:
        "Pide a otra persona que contacte al servicio de emergencias. Si estás solo, activa la ayuda lo antes posible.",
      icono: Phone,
    },
    {
      numero: 3,
      titulo: "Da hasta cinco golpes en la espalda",
      descripcion:
        "Inclina ligeramente a la persona hacia adelante y aplica golpes firmes entre los omóplatos.",
      icono: Hand,
    },
    {
      numero: 4,
      titulo: "Realiza hasta cinco compresiones",
      descripcion:
        "Si la obstrucción continúa, realiza compresiones abdominales. En situaciones especiales pueden utilizarse compresiones torácicas.",
      icono: Wind,
    },
    {
      numero: 5,
      titulo: "Alterna las maniobras",
      descripcion:
        "Continúa alternando golpes en la espalda y compresiones hasta que el objeto sea expulsado o la persona pierda la respuesta.",
      icono: Repeat2,
    },
    {
      numero: 6,
      titulo: "Inicia RCP si pierde la respuesta",
      descripcion:
        "Si la persona queda inconsciente y no respira normalmente, colócala sobre una superficie firme e inicia RCP.",
      icono: HeartPulse,
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
              <Wind size={38} aria-hidden="true" />
            </div>

            <p className="detalle-procedimiento__etiqueta">
              Obstrucción de la vía respiratoria
            </p>

            <h1>Atención del Atragantamiento</h1>
          </div>

          <Link
            className="detalle-procedimiento__boton-ra-superior"
            to="/experiencia-ra/atragantamiento"
          >
            <Camera size={20} aria-hidden="true" />

            <span>
              <small>Experiencia interactiva</small>
              Iniciar experiencia RA
            </span>
          </Link>
        </div>

        <p className="detalle-procedimiento__introduccion">
          El atragantamiento ocurre cuando un alimento u objeto bloquea parcial
          o completamente la vía respiratoria e impide el paso normal del aire.
        </p>
      </header>

      <section className="detalle-procedimiento__seccion">
        <div className="detalle-procedimiento__titulo-seccion">
          <span>Identificación de la emergencia</span>
          <h2>¿Cómo reconocer un atragantamiento grave?</h2>
        </div>

        <div className="situaciones-rcp">
          {señales.map((señal) => {
            const Icono = señal.icono;

            return (
              <article className="situacion-rcp" key={señal.titulo}>
                <div className="situacion-rcp__icono">
                  <Icono size={27} aria-hidden="true" />
                </div>

                <div>
                  <h3>{señal.titulo}</h3>
                  <p>{señal.descripcion}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="alerta-procedimiento">
        <Ban size={26} aria-hidden="true" />

        <div>
          <h2>No introduzcas los dedos a ciegas en la boca</h2>

          <p>
            Solo retira el objeto cuando sea claramente visible y pueda
            extraerse con seguridad. Empujarlo puede empeorar la obstrucción.
          </p>
        </div>
      </section>

      <section className="detalle-procedimiento__seccion">
        <div className="detalle-procedimiento__titulo-seccion">
          <span>Procedimiento guiado</span>
          <h2>Pasos para atender un atragantamiento</h2>
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

          <h2>Practica la respuesta ante un atragantamiento</h2>

          <p>
            Activa la cámara para preparar una experiencia visual que mostrará
            la posición correcta y la secuencia de atención ante una obstrucción
            de la vía respiratoria.
          </p>
        </div>

        <Link
          className="bloque-ra__boton"
          to="/experiencia-ra/atragantamiento"
        >
          <Camera size={20} aria-hidden="true" />
          Iniciar experiencia RA
        </Link>
      </section>
    </main>
  );
}

export default Atragantamiento;