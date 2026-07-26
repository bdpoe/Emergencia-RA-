import { Link, useParams } from "react-router-dom";
import {
  ArrowDown,
  ArrowLeft,
  Ban,
  Camera,
  CircleDot,
  CookingPot,
  DoorOpen,
  Factory,
  FireExtinguisher,
  Flame,
  Gauge,
  Hand,
  ListChecks,
  MoveHorizontal,
  PhoneCall,
  PlugZap,
  ScanLine,
  ShieldCheck,
  Tags,
  TriangleAlert,
  Wind,
} from "lucide-react";

const contenidosExtintores = {
  tipos: {
    etiqueta: "Clasificación de extintores",
    titulo: "Tipos de Extintores",
    iconoPrincipal: Tags,

    introduccion:
      "Los extintores se seleccionan según el material que está ardiendo. Antes de utilizarlos, se debe revisar la clasificación indicada en su etiqueta.",

    tituloSituaciones: "Clases principales de fuego",

    situaciones: [
      {
        titulo: "Clase A",
        descripcion:
          "Materiales sólidos comunes como papel, madera, cartón, tela y algunos plásticos.",
        icono: Flame,
      },
      {
        titulo: "Clase B",
        descripcion:
          "Líquidos inflamables como gasolina, pinturas, disolventes, aceites y combustibles.",
        icono: CircleDot,
      },
      {
        titulo: "Clase C",
        descripcion:
          "Equipos o instalaciones eléctricas energizadas. Se requiere un agente que no conduzca electricidad.",
        icono: PlugZap,
      },
      {
        titulo: "Clase D",
        descripcion:
          "Metales combustibles presentes principalmente en ciertos procesos industriales.",
        icono: Factory,
      },
      {
        titulo: "Clase K",
        descripcion:
          "Aceites y grasas utilizados en cocinas, freidoras y equipos de preparación de alimentos.",
        icono: CookingPot,
      },
    ],

    alertaTitulo: "No utilices cualquier extintor",

    alertaDescripcion:
      "Un agente inadecuado puede aumentar el riesgo. Revisa siempre la clasificación, instrucciones y pictogramas de la etiqueta.",

    tituloPasos: "Cómo identificar el extintor adecuado",

    pasos: [
      {
        numero: 1,
        titulo: "Identifica el material que arde",
        descripcion:
          "Observa qué material inició el fuego sin acercarte innecesariamente ni exponerte al humo.",
        icono: Flame,
      },
      {
        numero: 2,
        titulo: "Revisa la etiqueta",
        descripcion:
          "Comprueba las letras, pictogramas y tipos de fuego para los cuales fue diseñado el extintor.",
        icono: Tags,
      },
      {
        numero: 3,
        titulo: "Verifica su condición",
        descripcion:
          "Comprueba que el equipo no presente daños visibles y que el indicador de presión se encuentre en su rango operativo, cuando corresponda.",
        icono: Gauge,
      },
      {
        numero: 4,
        titulo: "Mantén disponible una salida",
        descripcion:
          "Ubícate de manera que siempre puedas retroceder hacia una ruta de evacuación segura.",
        icono: DoorOpen,
      },
      {
        numero: 5,
        titulo: "No actúes ante un incendio desarrollado",
        descripcion:
          "Si existe demasiado humo, calor o propagación rápida, evacúa y solicita ayuda especializada.",
        icono: PhoneCall,
      },
    ],

    rutaExperiencia: "/ar/extintores/tipos-extintores.html",

    tituloRA: "Identifica las clases de fuego mediante RA",

    descripcionRA:
      "Enfoca el marcador Hiro para visualizar un extintor aumentado y consultar las clases A, B, C, D y K.",
  },

  "tecnica-pass": {
    etiqueta: "Procedimiento de utilización",
    titulo: "Técnica PASS",
    iconoPrincipal: ListChecks,

    introduccion:
      "PASS es una secuencia sencilla que ayuda a recordar las acciones básicas para utilizar un extintor portátil: retirar el seguro, apuntar, presionar y barrer.",

    tituloSituaciones: "Significado de la técnica PASS",

    situaciones: [
      {
        titulo: "P — Pull",
        descripcion:
          "Retira el pasador o seguro que impide accionar accidentalmente el extintor.",
        icono: Hand,
      },
      {
        titulo: "A — Aim",
        descripcion:
          "Apunta la boquilla o manguera hacia la base del fuego.",
        icono: ArrowDown,
      },
      {
        titulo: "S — Squeeze",
        descripcion:
          "Presiona la manija para liberar el agente extintor.",
        icono: FireExtinguisher,
      },
      {
        titulo: "S — Sweep",
        descripcion:
          "Realiza un movimiento de barrido de lado a lado cubriendo la base del fuego.",
        icono: MoveHorizontal,
      },
    ],

    alertaTitulo: "Mantén siempre una ruta de salida",

    alertaDescripcion:
      "No permitas que el fuego quede entre tú y la salida. Si el fuego aumenta o el humo impide ver, abandona el lugar.",

    tituloPasos: "Cómo aplicar la técnica PASS",

    pasos: [
      {
        numero: 1,
        titulo: "Ubícate de forma segura",
        descripcion:
          "Conserva una salida libre detrás de ti antes de intentar controlar el fuego.",
        icono: ShieldCheck,
      },
      {
        numero: 2,
        titulo: "Retira el seguro",
        descripcion:
          "Extrae completamente el pasador de seguridad.",
        icono: Hand,
      },
      {
        numero: 3,
        titulo: "Apunta hacia la base",
        descripcion:
          "Dirige la boquilla al lugar donde se origina el fuego.",
        icono: ArrowDown,
      },
      {
        numero: 4,
        titulo: "Presiona la manija",
        descripcion:
          "Acciona la manija para iniciar la descarga.",
        icono: FireExtinguisher,
      },
      {
        numero: 5,
        titulo: "Realiza el barrido",
        descripcion:
          "Mueve la descarga de lado a lado sobre la base del fuego.",
        icono: MoveHorizontal,
      },
    ],

    experienciaId: "extintores-pass",

    tituloRA: "Practica la técnica PASS mediante RA",

    descripcionRA:
      "La experiencia mostrará la secuencia de retirar, apuntar, presionar y barrer.",
  },

  distancia: {
    etiqueta: "Posición y distancia segura",
    titulo: "Distancia Recomendada",
    iconoPrincipal: MoveHorizontal,

    introduccion:
      "La distancia de operación depende del tipo, capacidad y diseño del extintor. Debe respetarse la información indicada por el fabricante.",

    tituloSituaciones: "Factores que modifican la distancia",

    situaciones: [
      {
        titulo: "Tipo de extintor",
        descripcion:
          "El alcance cambia según el agente extintor utilizado.",
        icono: FireExtinguisher,
      },
      {
        titulo: "Tamaño y capacidad",
        descripcion:
          "Los equipos pueden tener alcances y tiempos de descarga diferentes.",
        icono: Gauge,
      },
      {
        titulo: "Viento y ventilación",
        descripcion:
          "Las corrientes de aire pueden desviar el agente.",
        icono: Wind,
      },
      {
        titulo: "Intensidad del fuego",
        descripcion:
          "El calor puede impedir una aproximación segura.",
        icono: Flame,
      },
    ],

    alertaTitulo: "No existe una distancia universal",

    alertaDescripcion:
      "Consulta las instrucciones del extintor específico. Si el calor resulta intenso, evacúa.",

    tituloPasos: "Cómo mantener una posición segura",

    pasos: [
      {
        numero: 1,
        titulo: "Lee las instrucciones",
        descripcion:
          "Identifica el alcance aproximado indicado por el fabricante.",
        icono: Tags,
      },
      {
        numero: 2,
        titulo: "Colócate con la salida detrás",
        descripcion:
          "Mantén disponible una ruta de retroceso.",
        icono: DoorOpen,
      },
      {
        numero: 3,
        titulo: "Comienza desde una posición segura",
        descripcion:
          "Inicia la descarga sin acercarte directamente a las llamas.",
        icono: MoveHorizontal,
      },
      {
        numero: 4,
        titulo: "Considera la dirección del viento",
        descripcion:
          "Evita que el agente y el humo regresen hacia ti.",
        icono: Wind,
      },
      {
        numero: 5,
        titulo: "Retrocede si el fuego aumenta",
        descripcion:
          "Interrumpe el intento y evacúa cuando el fuego se intensifique.",
        icono: TriangleAlert,
      },
    ],

    experienciaId: "extintores-distancia",

    tituloRA: "Practica la posición segura mediante RA",

    descripcionRA:
      "La experiencia permitirá visualizar el extintor, el origen del fuego y una zona de operación.",
  },

  recomendaciones: {
    etiqueta: "Decisión y uso responsable",
    titulo: "Recomendaciones de Seguridad",
    iconoPrincipal: ShieldCheck,

    introduccion:
      "Un extintor portátil se utiliza únicamente cuando el fuego es pequeño, existe una salida disponible y la persona puede actuar sin exponerse.",

    tituloSituaciones: "¿Cuándo no debes intentar apagarlo?",

    situaciones: [
      {
        titulo: "El fuego está creciendo",
        descripcion:
          "Las llamas se extienden rápidamente hacia otros materiales.",
        icono: Flame,
      },
      {
        titulo: "Existe demasiado humo",
        descripcion:
          "La visibilidad disminuye o respirar se vuelve difícil.",
        icono: Wind,
      },
      {
        titulo: "No tienes una salida segura",
        descripcion:
          "El fuego bloquea la ruta de evacuación.",
        icono: DoorOpen,
      },
      {
        titulo: "No conoces el extintor",
        descripcion:
          "No puedes identificar si el equipo es apropiado.",
        icono: TriangleAlert,
      },
    ],

    alertaTitulo: "La prioridad siempre es evacuar",

    alertaDescripcion:
      "No arriesgues tu vida intentando controlar un incendio. Activa la alarma y solicita ayuda.",

    tituloPasos: "Verificación antes de utilizarlo",

    pasos: [
      {
        numero: 1,
        titulo: "Activa la alarma",
        descripcion:
          "Advierte a las personas cercanas.",
        icono: TriangleAlert,
      },
      {
        numero: 2,
        titulo: "Solicita ayuda",
        descripcion:
          "Comunica el incendio al servicio de emergencia.",
        icono: PhoneCall,
      },
      {
        numero: 3,
        titulo: "Evalúa el tamaño del fuego",
        descripcion:
          "Solo utiliza el extintor si el fuego es pequeño y localizado.",
        icono: Flame,
      },
      {
        numero: 4,
        titulo: "Selecciona el equipo correcto",
        descripcion:
          "Verifica la clasificación del extintor.",
        icono: Tags,
      },
      {
        numero: 5,
        titulo: "Mantén una salida libre",
        descripcion:
          "Evita quedar atrapado entre el fuego y la salida.",
        icono: DoorOpen,
      },
      {
        numero: 6,
        titulo: "Evacúa si no se controla",
        descripcion:
          "Si el fuego continúa, abandona el lugar.",
        icono: Ban,
      },
    ],

    experienciaId: "extintores-seguridad",

    tituloRA: "Recibe recomendaciones mediante RA",

    descripcionRA:
      "La experiencia mostrará un brigadista o bombero virtual con recomendaciones de seguridad.",
  },
};

function DetalleExtintores() {
  const { temaId } = useParams();
  const contenido = contenidosExtintores[temaId];

  if (!contenido) {
    return (
      <main className="pagina-error">
        <TriangleAlert size={52} aria-hidden="true" />

        <h1>Contenido no encontrado</h1>

        <p>El tema solicitado todavía no está disponible.</p>

        <Link to="/extintores">
          Regresar al módulo de Extintores
        </Link>
      </main>
    );
  }

  const IconoPrincipal = contenido.iconoPrincipal;

  const rutaExperiencia =
    contenido.rutaExperiencia ??
    `/experiencia-ra/${contenido.experienciaId}`;

  return (
    <main className="detalle-procedimiento detalle-procedimiento--extintores">
      <Link
        className="detalle-procedimiento__volver"
        to="/extintores"
      >
        <ArrowLeft size={19} aria-hidden="true" />
        Volver a Uso de Extintores
      </Link>

      <header className="detalle-procedimiento__encabezado">
        <div className="detalle-procedimiento__cabecera">
          <div className="detalle-procedimiento__presentacion">
            <div className="detalle-procedimiento__icono-principal">
              <IconoPrincipal size={38} aria-hidden="true" />
            </div>

            <p className="detalle-procedimiento__etiqueta">
              {contenido.etiqueta}
            </p>

            <h1>{contenido.titulo}</h1>
          </div>

          <a
            className="detalle-procedimiento__boton-ra-superior"
            href={rutaExperiencia}
          >
            <Camera size={20} aria-hidden="true" />

            <span>
              <small>Experiencia interactiva</small>
              Iniciar experiencia RA
            </span>
          </a>
        </div>

        <p className="detalle-procedimiento__introduccion">
          {contenido.introduccion}
        </p>
      </header>

      <section className="detalle-procedimiento__seccion">
        <div className="detalle-procedimiento__titulo-seccion">
          <span>Información esencial</span>
          <h2>{contenido.tituloSituaciones}</h2>
        </div>

        <div className="situaciones-tema">
          {contenido.situaciones.map((situacion) => {
            const Icono = situacion.icono;

            return (
              <article
                className="situacion-tema"
                key={situacion.titulo}
              >
                <div className="situacion-tema__icono">
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
          <h2>{contenido.alertaTitulo}</h2>
          <p>{contenido.alertaDescripcion}</p>
        </div>
      </section>

      <section className="detalle-procedimiento__seccion">
        <div className="detalle-procedimiento__titulo-seccion">
          <span>Procedimiento guiado</span>
          <h2>{contenido.tituloPasos}</h2>
        </div>

        <div className="lista-pasos">
          {contenido.pasos.map((paso) => {
            const Icono = paso.icono;

            return (
              <article
                className="paso-procedimiento"
                key={paso.numero}
              >
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

          <h2>{contenido.tituloRA}</h2>
          <p>{contenido.descripcionRA}</p>
        </div>

        <a
          className="bloque-ra__boton"
          href={rutaExperiencia}
        >
          <Camera size={20} aria-hidden="true" />
          Iniciar experiencia RA
        </a>
      </section>
    </main>
  );
}

export default DetalleExtintores;