import { Link } from "react-router-dom";
import {
  ArrowRight,
  Camera,
  GraduationCap,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import logoAutonoma from "../assets/logo-autonoma.png";

function Inicio() {
  return (
    <main className="inicio">
      <div className="inicio__decoracion inicio__decoracion--uno" />
      <div className="inicio__decoracion inicio__decoracion--dos" />

      <section className="inicio__contenido">
        <header className="inicio__universidad">
          <img
            className="inicio__logo"
            src={logoAutonoma}
            alt="Logo de la Universidad Autónoma del Perú"
          />

          <div className="inicio__universidad-texto">
            <span>Universidad Autónoma del Perú</span>
            <small>Plataforma educativa interactiva</small>
          </div>
        </header>

        

        <h1 className="inicio__titulo">
          EMERGENCIAS
          <span> RA</span>
        </h1>

        <h2 className="inicio__subtitulo">
          Plataforma Interactiva para la Preparación y Atención de Emergencias
          mediante Realidad Aumentada
        </h2>

        <p className="inicio__descripcion">
          Aprende cómo actuar ante situaciones de emergencia mediante
          contenidos educativos, procedimientos guiados y experiencias
          interactivas.
        </p>

        <div className="inicio__caracteristicas">
          <div>
            <ShieldCheck size={20} aria-hidden="true" />
            <span>Prevención</span>
          </div>

          <div>
            <GraduationCap size={20} aria-hidden="true" />
            <span>Capacitación</span>
          </div>

          <div>
            <Camera size={20} aria-hidden="true" />
            <span>Realidad Aumentada</span>
          </div>
        </div>

        <Link className="inicio__enlace" to="/menu">
          Iniciar plataforma
          <ArrowRight size={20} aria-hidden="true" />
        </Link>

        <p className="inicio__pie">
         
        </p>
      </section>
    </main>
  );
}

export default Inicio;