import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Camera,
  CameraOff,
  LoaderCircle,
  ScanLine,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

const experiencias = {
  rcp: {
    titulo: "Experiencia RA de RCP",
    descripcion:
      "Prepara la cámara para visualizar la futura experiencia guiada de reanimación cardiopulmonar.",
    rutaRetorno: "/primeros-auxilios/rcp",
    claseTema: "experiencia-ra--auxilios",
  },
  atragantamiento: {
    titulo: "Experiencia RA de Atragantamiento",
    descripcion:
      "Prepara la cámara para visualizar una guía interactiva sobre la atención de una obstrucción de la vía respiratoria.",
    rutaRetorno: "/primeros-auxilios/atragantamiento",
    claseTema: "experiencia-ra--auxilios",
  },

  quemaduras: {
    titulo: "Experiencia RA de Quemaduras",
    descripcion:
      "Prepara la cámara para visualizar una guía interactiva sobre la atención inicial de quemaduras.",
    rutaRetorno: "/primeros-auxilios/quemaduras",
    claseTema: "experiencia-ra--auxilios",
  },

  "extintores-tipos": {
  titulo: "Experiencia RA: Tipos de Extintores",
  descripcion:
    "Prepara la cámara para identificar diferentes clases de fuego y el extintor correspondiente.",
  rutaRetorno: "/extintores/tipos",
  claseTema: "experiencia-ra--extintores",
},

"extintores-pass": {
  titulo: "Experiencia RA: Técnica PASS",
  descripcion:
    "Prepara la cámara para practicar la secuencia de uso de un extintor portátil.",
  rutaRetorno: "/extintores/tecnica-pass",
  claseTema: "experiencia-ra--extintores",
},

"extintores-distancia": {
  titulo: "Experiencia RA: Distancia Segura",
  descripcion:
    "Prepara la cámara para visualizar la posición y orientación frente al origen del fuego.",
  rutaRetorno: "/extintores/distancia",
  claseTema: "experiencia-ra--extintores",
},

"extintores-seguridad": {
  titulo: "Experiencia RA: Decisión Segura",
  descripcion:
    "Prepara la cámara para evaluar si un escenario permite utilizar un extintor o exige evacuar.",
  rutaRetorno: "/extintores/recomendaciones",
  claseTema: "experiencia-ra--extintores",
},

"evacuacion-plano": {
  titulo: "Experiencia RA: Plano de Evacuación",
  descripcion:
    "Prepara la cámara para visualizar rutas, salidas y elementos de seguridad asociados al entorno.",
  rutaRetorno: "/rutas-evacuacion/plano",
  claseTema: "experiencia-ra--evacuacion",
},

"evacuacion-salidas": {
  titulo: "Experiencia RA: Salidas de Emergencia",
  descripcion:
    "Prepara la cámara para identificar señales y direcciones hacia una salida segura.",
  rutaRetorno: "/rutas-evacuacion/salidas",
  claseTema: "experiencia-ra--evacuacion",
},

"evacuacion-punto": {
  titulo: "Experiencia RA: Punto de Encuentro",
  descripcion:
    "Prepara la cámara para localizar la dirección y ubicación de la zona segura exterior.",
  rutaRetorno: "/rutas-evacuacion/punto-encuentro",
  claseTema: "experiencia-ra--evacuacion",
},

"evacuacion-tiempo": {
  titulo: "Experiencia RA: Recorrido de Evacuación",
  descripcion:
    "Prepara la cámara para realizar un recorrido guiado desde la ubicación inicial hasta una zona segura.",
  rutaRetorno: "/rutas-evacuacion/tiempo",
  claseTema: "experiencia-ra--evacuacion",
},


"sismos-antes": {
  titulo: "Experiencia RA: Antes del Sismo",
  descripcion:
    "Prepara la cámara para identificar riesgos, zonas seguras y rutas de evacuación.",
  rutaRetorno: "/sismos/antes",
  claseTema: "experiencia-ra--sismos",
},

"sismos-durante": {
  titulo: "Experiencia RA: Durante el Sismo",
  descripcion:
    "Prepara la cámara para reconocer zonas de protección y riesgos que deben evitarse.",
  rutaRetorno: "/sismos/durante",
  claseTema: "experiencia-ra--sismos",
},

"sismos-despues": {
  titulo: "Experiencia RA: Después del Sismo",
  descripcion:
    "Prepara la cámara para seguir una evacuación guiada hacia el punto de encuentro.",
  rutaRetorno: "/sismos/despues",
  claseTema: "experiencia-ra--sismos",
},

"sismos-mochila": {
  titulo: "Experiencia RA: Mochila de Emergencia",
  descripcion:
    "Prepara la cámara para reconocer y seleccionar los artículos esenciales de una mochila de emergencia.",
  rutaRetorno: "/sismos/mochila",
  claseTema: "experiencia-ra--sismos",
},





};

function ExperienciaRA() {
  const { experienciaId } = useParams();
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [estado, setEstado] = useState("inicial");
  const [mensajeError, setMensajeError] = useState("");

  const experiencia = experiencias[experienciaId];

  async function activarCamara() {
    if (!navigator.mediaDevices?.getUserMedia) {
      setEstado("error");
      setMensajeError(
        "El navegador o dispositivo no permite acceder a la cámara.",
      );
      return;
    }

    try {
      setEstado("cargando");
      setMensajeError("");

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: {
            ideal: "environment",
          },
        },
        audio: false,
      });

      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      setEstado("activa");
    } catch (error) {
      console.error("No se pudo activar la cámara:", error);

      setEstado("error");

      if (error.name === "NotAllowedError") {
        setMensajeError(
          "El permiso de cámara fue rechazado. Habilítalo desde la configuración del navegador.",
        );
      } else if (error.name === "NotFoundError") {
        setMensajeError(
          "No se encontró una cámara disponible en este dispositivo.",
        );
      } else {
        setMensajeError(
          "No se pudo iniciar la cámara. Revisa los permisos y vuelve a intentarlo.",
        );
      }
    }
  }

  function detenerCamara() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setEstado("inicial");
  }

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  if (!experiencia) {
    return (
      <main className="pagina-error">
        <TriangleAlert size={52} aria-hidden="true" />
        <h1>Experiencia no encontrada</h1>
        <p>La experiencia solicitada todavía no está disponible.</p>
        <Link to="/menu">Regresar al menú</Link>
      </main>
    );
  }

  return (
    <main className={`experiencia-ra ${experiencia.claseTema}`}>
      <Link
        className="experiencia-ra__volver"
        to={experiencia.rutaRetorno}
        onClick={detenerCamara}
      >
        <ArrowLeft size={19} aria-hidden="true" />
        Volver al procedimiento
      </Link>

      <header className="experiencia-ra__encabezado">
        <p>Preparación de experiencia</p>
        <h1>{experiencia.titulo}</h1>
        <span>{experiencia.descripcion}</span>
      </header>

      <section className="visor-ra">
        <video
          ref={videoRef}
          className={`visor-ra__video ${
            estado === "activa" ? "visor-ra__video--visible" : ""
          }`}
          autoPlay
          muted
          playsInline
        />

        {estado !== "activa" && (
          <div className="visor-ra__estado">
            {estado === "inicial" && (
              <>
                <div className="visor-ra__icono">
                  <Camera size={44} aria-hidden="true" />
                </div>

                <h2>Cámara desactivada</h2>

                <p>
                  Presiona el botón inferior para permitir el acceso a la cámara
                  del dispositivo.
                </p>
              </>
            )}

            {estado === "cargando" && (
              <>
                <LoaderCircle
                  className="visor-ra__cargando"
                  size={48}
                  aria-hidden="true"
                />

                <h2>Inicializando experiencia...</h2>

                <p>Preparando la cámara del dispositivo.</p>
              </>
            )}

            {estado === "error" && (
              <>
                <div className="visor-ra__icono visor-ra__icono--error">
                  <CameraOff size={44} aria-hidden="true" />
                </div>

                <h2>No se pudo activar la cámara</h2>
                <p>{mensajeError}</p>
              </>
            )}
          </div>
        )}

        {estado === "activa" && (
          <>
            <div className="marcador-ra">
              <span />
              <ScanLine size={42} aria-hidden="true" />
            </div>

            <div className="visor-ra__mensaje">
              <span>Inicializando experiencia...</span>
              <strong>enfoque al paciente...</strong>
              <small>Preparando inmersion...</small>
            </div>
          </>
        )}
      </section>

      <section className="experiencia-ra__controles">
        {estado !== "activa" ? (
          <button type="button" onClick={activarCamara}>
            <Camera size={20} aria-hidden="true" />
            Activar cámara
          </button>
        ) : (
          <button
            className="boton-secundario"
            type="button"
            onClick={detenerCamara}
          >
            <CameraOff size={20} aria-hidden="true" />
            Desactivar cámara
          </button>
        )}
      </section>

      <section className="aviso-camara">
        <ShieldCheck size={24} aria-hidden="true" />

        <p>
          La cámara solamente se utiliza durante esta pantalla. Al salir de la
          experiencia, el acceso se detendrá automáticamente.
        </p>
      </section>
    </main>
  );
}

export default ExperienciaRA;
