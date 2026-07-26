import { Link } from "react-router-dom";
import {
  ArrowLeft,
  HeartPulse,
  Phone,
  ShieldCheck,
  Hand,
  Repeat2,
  TriangleAlert,
  Camera,
  Waves,
  Zap,
  Activity,
  ScanLine,
} from "lucide-react";

function RCP() {
  const situaciones = [
    {
      titulo: "Paro cardiorrespiratorio",
      descripcion:
        "La persona no responde y no respira con normalidad o solamente presenta jadeos.",
      icono: HeartPulse,
    },
    {
      titulo: "Ahogamiento",
      descripcion:
        "La persona ha sido retirada del agua, no responde y no respira con normalidad.",
      icono: Waves,
    },
    {
      titulo: "Descarga eléctrica",
      descripcion:
        "La persona ha recibido una descarga, se encuentra inconsciente y no respira normalmente.",
      icono: Zap,
    },
    {
      titulo: "Colapso repentino",
      descripcion:
        "La persona cae repentinamente, no responde al llamado y no presenta respiración normal.",
      icono: Activity,
    },
  ];

  const pasos = [
    {
      numero: 1,
      titulo: "Verifica la seguridad",
      descripcion:
        "Comprueba que el lugar sea seguro para ti, para la persona afectada y para quienes se encuentren alrededor.",
      icono: ShieldCheck,
    },
    {
      numero: 2,
      titulo: "Comprueba la respuesta",
      descripcion:
        "Acércate, háblale en voz alta y toca suavemente sus hombros para comprobar si responde.",
      icono: Hand,
    },
    {
      numero: 3,
      titulo: "Solicita ayuda",
      descripcion:
        "Pide ayuda inmediatamente y solicita que llamen al servicio de emergencias y busquen un desfibrilador.",
      icono: Phone,
    },
    {
      numero: 4,
      titulo: "Comprueba la respiración",
      descripcion:
        "Observa si el pecho se mueve y verifica si la persona respira con normalidad. Los jadeos no se consideran respiración normal.",
      icono: Activity,
    },
    {
      numero: 5,
      titulo: "Inicia las compresiones",
      descripcion:
        "Coloca ambas manos en el centro del pecho y realiza compresiones firmes, rápidas y continuas.",
      icono: HeartPulse,
    },
    {
      numero: 6,
      titulo: "Continúa el procedimiento",
      descripcion:
        "Mantén las compresiones hasta que llegue ayuda especializada, la persona responda o el lugar deje de ser seguro.",
      icono: Repeat2,
    },
  ];

  return (
    <main className="detalle-procedimiento detalle-procedimiento--auxilios">
      <Link className="detalle-procedimiento__volver" to="/primeros-auxilios">
        <ArrowLeft size={19} aria-hidden="true" />
        Volver a Primeros Auxilios
      </Link>

      <header className="detalle-procedimiento__encabezado">
        <div className="detalle-procedimiento__cabecera">
          <div className="detalle-procedimiento__presentacion">
            <div className="detalle-procedimiento__icono-principal">
              <HeartPulse size={38} aria-hidden="true" />
            </div>

            <p className="detalle-procedimiento__etiqueta">
              Emergencia cardiovascular
            </p>

            <h1>Reanimación Cardiopulmonar</h1>
          </div>

          <Link
            className="detalle-procedimiento__boton-ra-superior"
            to="/experiencia-ra/rcp"
          >
            <Camera size={20} aria-hidden="true" />

            <span>
              <small>Experiencia interactiva</small>
              Iniciar experiencia RA
            </span>
          </Link>
        </div>

        <p className="detalle-procedimiento__introduccion">
          La reanimación cardiopulmonar es una maniobra de emergencia que ayuda
          a mantener temporalmente la circulación de la sangre cuando una
          persona no responde y no respira con normalidad.
        </p>
      </header>

      <section className="detalle-procedimiento__seccion">
        <div className="detalle-procedimiento__titulo-seccion">
          <span>Identificación de la emergencia</span>
          <h2>¿Cuándo se debe aplicar RCP?</h2>
        </div>

        <div className="situaciones-rcp">
          {situaciones.map((situacion) => {
            const Icono = situacion.icono;

            return (
              <article className="situacion-rcp" key={situacion.titulo}>
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
        <TriangleAlert size={26} aria-hidden="true" />

        <div>
          <h2>Actúa solo si la persona no responde y no respira normalmente</h2>

          <p>
            Solicita ayuda profesional inmediatamente. Si la persona respira con
            normalidad, no inicies compresiones torácicas.
          </p>
        </div>
      </section>

      <section className="detalle-procedimiento__seccion">
        <div className="detalle-procedimiento__titulo-seccion">
          <span>Procedimiento guiado</span>
          <h2>Pasos para realizar RCP</h2>
        </div>

        <div className="lista-pasos">
          {pasos.map((paso) => {
            const Icono = paso.icono;

            return (
              <article className="paso-procedimiento" key={paso.numero}>
                <div className="paso-procedimiento__numero">{paso.numero}</div>

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
            Objetivo principal de la plataforma
          </p>

          <h2>Aprende RCP mediante una experiencia de Realidad Aumentada</h2>

          <p>
            Activa la cámara para iniciar el flujo de experiencia RA. En la
            siguiente fase, el sistema reconocerá un marcador y mostrará una
            guía visual con animaciones paso a paso.
          </p>
        </div>

        <Link className="bloque-ra__boton" to="/experiencia-ra/rcp">
          <Camera size={20} aria-hidden="true" />
          Iniciar experiencia RA
        </Link>
      </section>
    </main>
  );
}

export default RCP;
