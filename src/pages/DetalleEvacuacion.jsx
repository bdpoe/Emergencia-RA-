import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  DoorOpen,
  Footprints,
  Map,
  MapPin,
  MoveRight,
  Navigation,
  Route,
  ShieldCheck,
  Signpost,
  TriangleAlert,
  Users,
} from "lucide-react";

const contenidosEvacuacion = {
  plano: {
    etiqueta: "Reconocimiento del entorno",
    titulo: "Plano de Evacuación",
    iconoPrincipal: Map,

    introduccion:
      "El plano de evacuación permite reconocer la ubicación actual, las rutas disponibles, las salidas de emergencia, los equipos de seguridad y los puntos de encuentro.",

    tituloSituaciones: "Elementos principales del plano",

    situaciones: [
      {
        titulo: "Ubicación actual",
        descripcion:
          "Identifica el punto donde te encuentras mediante la indicación «Usted está aquí».",
        icono: MapPin,
      },
      {
        titulo: "Rutas señalizadas",
        descripcion:
          "Reconoce las líneas o flechas que muestran el recorrido hacia una salida segura.",
        icono: Route,
      },
      {
        titulo: "Salidas de emergencia",
        descripcion:
          "Ubica las puertas destinadas a abandonar el edificio durante una emergencia.",
        icono: DoorOpen,
      },
      {
        titulo: "Punto de encuentro",
        descripcion:
          "Identifica el lugar exterior donde deben reunirse las personas evacuadas.",
        icono: Users,
      },
    ],

    alertaTitulo: "Revisa el plano antes de una emergencia",

    alertaDescripcion:
      "No esperes a que ocurra una emergencia para conocer el recorrido. Observa previamente las rutas principales y alternativas.",

    tituloPasos: "Cómo interpretar un plano de evacuación",

    pasos: [
      {
        numero: 1,
        titulo: "Localiza tu posición",
        descripcion:
          "Busca la indicación «Usted está aquí» para determinar desde dónde iniciarías la evacuación.",
        icono: MapPin,
      },
      {
        numero: 2,
        titulo: "Identifica la salida más cercana",
        descripcion:
          "Observa la ruta señalizada que conduce hacia una salida de emergencia.",
        icono: DoorOpen,
      },
      {
        numero: 3,
        titulo: "Reconoce una ruta alternativa",
        descripcion:
          "Ubica otro recorrido que puedas utilizar si la salida principal está bloqueada.",
        icono: Route,
      },
      {
        numero: 4,
        titulo: "Ubica el punto de encuentro",
        descripcion:
          "Identifica el área exterior donde debes permanecer después de evacuar.",
        icono: Users,
      },
    ],
  },

  salidas: {
    etiqueta: "Abandono seguro del edificio",
    titulo: "Salidas de Emergencia",
    iconoPrincipal: DoorOpen,

    introduccion:
      "Las salidas de emergencia permiten abandonar una instalación de forma rápida y ordenada. Deben permanecer identificadas, iluminadas y libres de obstáculos.",

    tituloSituaciones: "Cómo reconocer una salida segura",

    situaciones: [
      {
        titulo: "Señalización visible",
        descripcion:
          "La salida debe estar identificada mediante señales legibles y ubicadas en lugares visibles.",
        icono: Signpost,
      },
      {
        titulo: "Acceso despejado",
        descripcion:
          "El recorrido hacia la puerta no debe estar bloqueado por muebles, cajas, equipos u otros objetos.",
        icono: MoveRight,
      },
      {
        titulo: "Apertura disponible",
        descripcion:
          "La puerta debe poder abrirse sin necesidad de realizar maniobras complejas durante la evacuación.",
        icono: DoorOpen,
      },
      {
        titulo: "Iluminación de emergencia",
        descripcion:
          "La salida y el recorrido deben poder identificarse incluso si se interrumpe la energía eléctrica.",
        icono: ShieldCheck,
      },
    ],

    alertaTitulo: "No utilices una salida bloqueada",

    alertaDescripcion:
      "Si una salida presenta humo, fuego, daños estructurales o algún bloqueo, utiliza inmediatamente una ruta alternativa segura.",

    tituloPasos: "Cómo actuar al dirigirte hacia una salida",

    pasos: [
      {
        numero: 1,
        titulo: "Mantén la calma",
        descripcion:
          "Escucha las indicaciones y evita correr, gritar o empujar a otras personas.",
        icono: ShieldCheck,
      },
      {
        numero: 2,
        titulo: "Sigue las señales",
        descripcion:
          "Desplázate siguiendo las flechas, luces y señales de evacuación.",
        icono: Signpost,
      },
      {
        numero: 3,
        titulo: "Avanza de manera ordenada",
        descripcion:
          "Camina con rapidez controlada y conserva una distancia segura respecto de otras personas.",
        icono: Footprints,
      },
      {
        numero: 4,
        titulo: "Comprueba la salida",
        descripcion:
          "Antes de atravesarla, verifica que no exista humo intenso, fuego u otro peligro inmediato.",
        icono: CheckCircle2,
      },
      {
        numero: 5,
        titulo: "No regreses al edificio",
        descripcion:
          "Una vez afuera, dirígete al punto de encuentro y espera las indicaciones del personal responsable.",
        icono: Users,
      },
    ],
  },

  "punto-encuentro": {
    etiqueta: "Reunión posterior a la evacuación",
    titulo: "Punto de Encuentro",
    iconoPrincipal: Users,

    introduccion:
      "El punto de encuentro es un área segura ubicada fuera de la instalación. Allí se verifica que las personas hayan evacuado y se reciben nuevas instrucciones.",

    tituloSituaciones: "Características del punto de encuentro",

    situaciones: [
      {
        titulo: "Ubicación exterior",
        descripcion:
          "Debe encontrarse fuera del edificio y alejado del peligro inmediato.",
        icono: Building2,
      },
      {
        titulo: "Área identificada",
        descripcion:
          "Debe contar con señalización visible para facilitar su reconocimiento.",
        icono: MapPin,
      },
      {
        titulo: "Espacio suficiente",
        descripcion:
          "Debe permitir la reunión ordenada de las personas evacuadas.",
        icono: Users,
      },
      {
        titulo: "Acceso para emergencias",
        descripcion:
          "No debe bloquear el ingreso de bomberos, ambulancias ni otros vehículos de respuesta.",
        icono: Navigation,
      },
    ],

    alertaTitulo: "No abandones el punto de encuentro",

    alertaDescripcion:
      "Permanece en el área asignada hasta recibir autorización. Alejarte puede dificultar el conteo y provocar que alguien intente buscarte dentro del edificio.",

    tituloPasos: "Qué hacer al llegar al punto de encuentro",

    pasos: [
      {
        numero: 1,
        titulo: "Ubícate en el área indicada",
        descripcion:
          "Dirígete directamente al punto asignado sin detenerte cerca de las salidas.",
        icono: MapPin,
      },
      {
        numero: 2,
        titulo: "Mantén el grupo organizado",
        descripcion:
          "Permanece junto a tu grupo, salón, oficina o área de trabajo.",
        icono: Users,
      },
      {
        numero: 3,
        titulo: "Participa en el conteo",
        descripcion:
          "Responde cuando se verifique la presencia de las personas evacuadas.",
        icono: CheckCircle2,
      },
      {
        numero: 4,
        titulo: "Reporta información importante",
        descripcion:
          "Comunica si observaste a una persona herida, atrapada o ausente.",
        icono: TriangleAlert,
      },
      {
        numero: 5,
        titulo: "Espera la autorización",
        descripcion:
          "No regreses al edificio hasta que el personal responsable confirme que es seguro.",
        icono: ShieldCheck,
      },
    ],
  },

  tiempo: {
    etiqueta: "Desplazamiento y respuesta",
    titulo: "Tiempo Estimado de Evacuación",
    iconoPrincipal: Clock3,

    introduccion:
      "El tiempo de evacuación depende de la distancia, la cantidad de personas, las condiciones del recorrido y el tipo de emergencia. La prioridad es evacuar con rapidez, pero sin perder el control.",

    tituloSituaciones: "Factores que influyen en el tiempo",

    situaciones: [
      {
        titulo: "Distancia hasta la salida",
        descripcion:
          "Los recorridos más largos requieren mayor tiempo de desplazamiento.",
        icono: Route,
      },
      {
        titulo: "Cantidad de personas",
        descripcion:
          "La concentración de personas puede generar demoras en pasillos, escaleras y puertas.",
        icono: Users,
      },
      {
        titulo: "Obstáculos en la ruta",
        descripcion:
          "Los objetos, daños o bloqueos pueden reducir la velocidad de evacuación.",
        icono: TriangleAlert,
      },
      {
        titulo: "Conocimiento del recorrido",
        descripcion:
          "Reconocer previamente las salidas y rutas alternativas facilita una evacuación más rápida.",
        icono: Map,
      },
    ],

    alertaTitulo: "Rapidez no significa correr",

    alertaDescripcion:
      "Correr, empujar o adelantar de forma desordenada puede provocar caídas y bloquear la evacuación de otras personas.",

    tituloPasos: "Cómo reducir el tiempo de evacuación",

    pasos: [
      {
        numero: 1,
        titulo: "Reconoce las rutas previamente",
        descripcion:
          "Identifica las salidas principales y alternativas antes de que ocurra una emergencia.",
        icono: Map,
      },
      {
        numero: 2,
        titulo: "Responde inmediatamente",
        descripcion:
          "Inicia la evacuación cuando se active la alarma o se emita la indicación correspondiente.",
        icono: Clock3,
      },
      {
        numero: 3,
        titulo: "Evita recoger objetos",
        descripcion:
          "No retrases la evacuación intentando recuperar mochilas, equipos u otras pertenencias.",
        icono: ArrowRight,
      },
      {
        numero: 4,
        titulo: "Mantén un desplazamiento continuo",
        descripcion:
          "Avanza sin detenerte innecesariamente y evita bloquear puertas o pasillos.",
        icono: Footprints,
      },
      {
        numero: 5,
        titulo: "Participa en los simulacros",
        descripcion:
          "Los simulacros permiten conocer el recorrido y mejorar la coordinación del grupo.",
        icono: ShieldCheck,
      },
    ],
  },
};

function DetalleEvacuacion() {
  const { temaId } = useParams();
  const contenido = contenidosEvacuacion[temaId];

  if (!contenido) {
    return (
      <main className="pagina-error">
        <TriangleAlert size={52} aria-hidden="true" />

        <h1>Contenido no encontrado</h1>

        <p>El tema de evacuación solicitado todavía no está disponible.</p>

        <Link to="/rutas-evacuacion">
          Regresar al módulo de Rutas de Evacuación
        </Link>
      </main>
    );
  }

  const IconoPrincipal = contenido.iconoPrincipal;

  return (
    <main className="detalle-procedimiento detalle-procedimiento--evacuacion">
      <Link
        className="detalle-procedimiento__volver"
        to="/rutas-evacuacion"
      >
        <ArrowLeft size={19} aria-hidden="true" />
        Volver a Rutas de Evacuación
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
    </main>
  );
}

export default DetalleEvacuacion;