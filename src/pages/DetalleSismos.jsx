import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Backpack,
  Ban,
  BellRing,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  DoorOpen,
  Flashlight,
  Footprints,
  HeartPulse,
  House,
  MapPin,
  Radio,
  ScanLine,
  ShieldAlert,
  ShieldCheck,
  Smartphone,
  TriangleAlert,
  Users,
  Zap,
} from "lucide-react";

const contenidosSismos = {
  antes: {
    etiqueta: "Preparación y prevención",
    titulo: "Antes del Sismo",
    iconoPrincipal: ClipboardCheck,

    introduccion:
      "La preparación previa permite reconocer los riesgos, organizar una respuesta y reducir la confusión durante un movimiento sísmico.",

    tituloSituaciones: "Acciones de preparación",

    situaciones: [
      {
        titulo: "Identifica zonas seguras",
        descripcion:
          "Reconoce las zonas internas de protección y los espacios exteriores establecidos para la evacuación.",
        icono: ShieldCheck,
      },
      {
        titulo: "Conoce las rutas de salida",
        descripcion:
          "Ubica las escaleras, puertas y rutas que conducen hacia una zona segura.",
        icono: DoorOpen,
      },
      {
        titulo: "Prepara tu mochila",
        descripcion:
          "Mantén disponibles artículos esenciales para atender las primeras necesidades después de la emergencia.",
        icono: Backpack,
      },
      {
        titulo: "Participa en simulacros",
        descripcion:
          "Practica las acciones de protección, evacuación y reunión con la comunidad universitaria.",
        icono: Users,
      },
    ],

    alertaTitulo: "No improvises durante la emergencia",

    alertaDescripcion:
      "Conoce anticipadamente dónde protegerte, qué salida utilizar y dónde se encuentra el punto de encuentro.",

    tituloPasos: "Cómo prepararte antes de un sismo",

    pasos: [
      {
        numero: 1,
        titulo: "Reconoce los riesgos del entorno",
        descripcion:
          "Identifica vidrios, estantes, luminarias, equipos u objetos que podrían caer o desplazarse.",
        icono: TriangleAlert,
      },
      {
        numero: 2,
        titulo: "Ubica una zona segura interna",
        descripcion:
          "Reconoce los espacios señalizados o las zonas alejadas de ventanas y objetos inestables.",
        icono: ShieldCheck,
      },
      {
        numero: 3,
        titulo: "Identifica la ruta de evacuación",
        descripcion:
          "Conoce la salida principal y una ruta alternativa en caso de bloqueo.",
        icono: DoorOpen,
      },
      {
        numero: 4,
        titulo: "Localiza el punto de encuentro",
        descripcion:
          "Identifica la zona exterior donde debes reunirte después de evacuar.",
        icono: MapPin,
      },
      {
        numero: 5,
        titulo: "Mantén preparada la mochila",
        descripcion:
          "Colócala en un lugar conocido, visible y de fácil acceso.",
        icono: Backpack,
      },
      {
        numero: 6,
        titulo: "Participa en los simulacros",
        descripcion:
          "Practica el procedimiento y comunica cualquier obstáculo o dificultad encontrada.",
        icono: BellRing,
      },
    ],

    experienciaId: "sismos-antes",

    tituloRA: "Reconoce las zonas seguras mediante RA",

    descripcionRA:
      "La experiencia permitirá visualizar puntos de protección, rutas de salida y riesgos presentes en el entorno.",
  },

  durante: {
    etiqueta: "Protección durante el movimiento",
    titulo: "Durante el Sismo",
    iconoPrincipal: ShieldAlert,

    introduccion:
      "Durante un sismo, la prioridad es mantener la calma, protegerse de objetos que puedan caer y seguir el procedimiento establecido para el lugar.",

    tituloSituaciones: "Principales acciones de protección",

    situaciones: [
      {
        titulo: "Mantén la calma",
        descripcion:
          "Evita correr, gritar o realizar movimientos que puedan generar desorden.",
        icono: HeartPulse,
      },
      {
        titulo: "Protégete",
        descripcion:
          "Ubícate en una zona segura interna y protege especialmente la cabeza y el cuello.",
        icono: ShieldCheck,
      },
      {
        titulo: "Aléjate de riesgos",
        descripcion:
          "Mantente lejos de ventanas, vidrios, estantes, luminarias y objetos que puedan caer.",
        icono: TriangleAlert,
      },
      {
        titulo: "Sigue las indicaciones",
        descripcion:
          "Atiende las instrucciones de docentes, brigadistas o responsables de emergencia.",
        icono: Users,
      },
    ],

    alertaTitulo: "No corras hacia las escaleras durante el movimiento",

    alertaDescripcion:
      "El desplazamiento apresurado puede ocasionar caídas, golpes y acumulación de personas en las salidas.",

    tituloPasos: "Qué hacer durante un sismo",

    pasos: [
      {
        numero: 1,
        titulo: "Mantén la calma",
        descripcion:
          "Respira, controla tus movimientos y evita generar pánico entre las personas cercanas.",
        icono: HeartPulse,
      },
      {
        numero: 2,
        titulo: "Ubícate en la zona segura",
        descripcion:
          "Dirígete únicamente hacia una zona interna cercana si puedes hacerlo sin exponerte.",
        icono: ShieldCheck,
      },
      {
        numero: 3,
        titulo: "Protege la cabeza y el cuello",
        descripcion:
          "Utiliza los brazos u otro elemento disponible para reducir el riesgo de lesiones.",
        icono: ShieldAlert,
      },
      {
        numero: 4,
        titulo: "Aléjate de ventanas",
        descripcion:
          "Evita vidrios, fachadas, estanterías, equipos suspendidos y objetos inestables.",
        icono: TriangleAlert,
      },
      {
        numero: 5,
        titulo: "No utilices ascensores",
        descripcion:
          "Los ascensores pueden detenerse o presentar fallas durante la emergencia.",
        icono: Ban,
      },
      {
        numero: 6,
        titulo: "Espera la indicación para evacuar",
        descripcion:
          "Cuando el movimiento termine y la ruta sea segura, inicia la evacuación ordenadamente.",
        icono: BellRing,
      },
    ],

    experienciaId: "sismos-durante",

    tituloRA: "Practica cómo protegerte mediante RA",

    descripcionRA:
      "La experiencia mostrará zonas internas de protección y riesgos que deben evitarse durante un movimiento sísmico.",
  },

  despues: {
    etiqueta: "Evaluación y evacuación",
    titulo: "Después del Sismo",
    iconoPrincipal: CheckCircle2,

    introduccion:
      "Después del movimiento, se debe evaluar el entorno, evacuar de manera ordenada y permanecer atento ante posibles réplicas.",

    tituloSituaciones: "Riesgos posteriores al movimiento",

    situaciones: [
      {
        titulo: "Réplicas",
        descripcion:
          "Pueden presentarse nuevos movimientos capaces de afectar estructuras previamente debilitadas.",
        icono: Zap,
      },
      {
        titulo: "Objetos inestables",
        descripcion:
          "Muebles, vidrios, equipos o partes de la edificación podrían caer después del movimiento.",
        icono: TriangleAlert,
      },
      {
        titulo: "Rutas bloqueadas",
        descripcion:
          "Algunas salidas pueden presentar daños, obstáculos, humo u otros peligros.",
        icono: DoorOpen,
      },
      {
        titulo: "Personas lesionadas",
        descripcion:
          "Puede ser necesario comunicar la ubicación de personas que requieren asistencia.",
        icono: HeartPulse,
      },
    ],

    alertaTitulo: "No regreses al edificio sin autorización",

    alertaDescripcion:
      "Permanece en el punto de encuentro hasta que los responsables confirmen que es seguro retirarse o ingresar nuevamente.",

    tituloPasos: "Qué hacer después de un sismo",

    pasos: [
      {
        numero: 1,
        titulo: "Evalúa los peligros cercanos",
        descripcion:
          "Observa si existen vidrios, cables, objetos caídos, humo o daños visibles.",
        icono: TriangleAlert,
      },
      {
        numero: 2,
        titulo: "Inicia la evacuación",
        descripcion:
          "Sigue la ruta señalizada y utiliza una alternativa si la salida principal no es segura.",
        icono: Footprints,
      },
      {
        numero: 3,
        titulo: "No corras ni empujes",
        descripcion:
          "Desplázate de manera ordenada para evitar caídas y congestión en las salidas.",
        icono: Users,
      },
      {
        numero: 4,
        titulo: "Dirígete al punto de encuentro",
        descripcion:
          "Aléjate del edificio y reúnete en la zona exterior establecida.",
        icono: MapPin,
      },
      {
        numero: 5,
        titulo: "Reporta personas lesionadas o ausentes",
        descripcion:
          "Comunica la situación al responsable. No regreses por tu cuenta a buscar personas.",
        icono: HeartPulse,
      },
      {
        numero: 6,
        titulo: "Sigue la información oficial",
        descripcion:
          "Atiende las indicaciones de las autoridades y responsables de la emergencia.",
        icono: Radio,
      },
    ],

    experienciaId: "sismos-despues",

    tituloRA: "Practica la evacuación posterior mediante RA",

    descripcionRA:
      "La experiencia permitirá identificar riesgos, seguir la ruta disponible y llegar al punto de encuentro.",
  },

  mochila: {
    etiqueta: "Suministros esenciales",
    titulo: "Mochila de Emergencia",
    iconoPrincipal: Backpack,

    introduccion:
      "La mochila de emergencia reúne artículos básicos para atender necesidades inmediatas después de un sismo u otra emergencia.",

    tituloSituaciones: "Elementos esenciales",

    situaciones: [
      {
        titulo: "Agua y alimentos",
        descripcion:
          "Incluye agua y alimentos no perecibles adecuados para las necesidades de las personas.",
        icono: Backpack,
      },
      {
        titulo: "Primeros auxilios",
        descripcion:
          "Mantén un botiquín básico y los medicamentos personales necesarios.",
        icono: HeartPulse,
      },
      {
        titulo: "Iluminación y comunicación",
        descripcion:
          "Incluye una linterna, radio a pilas y baterías disponibles.",
        icono: Flashlight,
      },
      {
        titulo: "Documentos y contacto",
        descripcion:
          "Conserva información básica de identificación y números importantes.",
        icono: Smartphone,
      },
    ],

    alertaTitulo: "Adapta la mochila a tus necesidades",

    alertaDescripcion:
      "Considera medicamentos, artículos para niños, adultos mayores, personas con discapacidad u otras necesidades particulares.",

    tituloPasos: "Cómo preparar la mochila",

    pasos: [
      {
        numero: 1,
        titulo: "Selecciona una mochila resistente",
        descripcion:
          "Debe ser fácil de transportar, reconocible y adecuada para los artículos que contendrá.",
        icono: Backpack,
      },
      {
        numero: 2,
        titulo: "Incluye agua y alimentos",
        descripcion:
          "Elige productos no perecibles, fáciles de consumir y con fechas de vencimiento vigentes.",
        icono: Backpack,
      },
      {
        numero: 3,
        titulo: "Agrega un botiquín",
        descripcion:
          "Incluye materiales básicos de primeros auxilios y medicamentos personales.",
        icono: HeartPulse,
      },
      {
        numero: 4,
        titulo: "Incorpora iluminación",
        descripcion:
          "Guarda una linterna, baterías y otros elementos que permitan orientarte.",
        icono: Flashlight,
      },
      {
        numero: 5,
        titulo: "Prepara medios de comunicación",
        descripcion:
          "Incluye una radio a pilas y una lista física de teléfonos importantes.",
        icono: Radio,
      },
      {
        numero: 6,
        titulo: "Revisa periódicamente el contenido",
        descripcion:
          "Controla vencimientos, baterías, medicamentos y condiciones de los artículos.",
        icono: CheckCircle2,
      },
    ],

    experienciaId: "sismos-mochila",

    tituloRA: "Prepara una mochila de emergencia mediante RA",

    descripcionRA:
      "La experiencia permitirá reconocer y seleccionar los artículos esenciales que deben colocarse dentro de la mochila.",
  },
};

function DetalleSismos() {
  const { temaId } = useParams();
  const contenido = contenidosSismos[temaId];

  if (!contenido) {
    return (
      <main className="pagina-error">
        <TriangleAlert size={52} aria-hidden="true" />

        <h1>Contenido no encontrado</h1>

        <p>El tema de sismos solicitado todavía no está disponible.</p>

        <Link to="/sismos">Regresar al módulo de Sismos</Link>
      </main>
    );
  }

  const IconoPrincipal = contenido.iconoPrincipal;

  return (
    <main className="detalle-procedimiento detalle-procedimiento--sismos">
      <Link className="detalle-procedimiento__volver" to="/sismos">
        <ArrowLeft size={19} aria-hidden="true" />
        Volver a Preparación ante Sismos
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

          <Link
            className="detalle-procedimiento__boton-ra-superior"
            to={`/experiencia-ra/${contenido.experienciaId}`}
          >
            <Camera size={20} aria-hidden="true" />

            <span>
              <small>Experiencia interactiva</small>
              Iniciar experiencia RA
            </span>
          </Link>
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
              <article className="situacion-tema" key={situacion.titulo}>
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

          <h2>{contenido.tituloRA}</h2>
          <p>{contenido.descripcionRA}</p>
        </div>

        <Link
          className="bloque-ra__boton"
          to={`/experiencia-ra/${contenido.experienciaId}`}
        >
          <Camera size={20} aria-hidden="true" />
          Iniciar experiencia RA
        </Link>
      </section>
    </main>
  );
}

export default DetalleSismos;

