import { Route, Routes } from "react-router-dom";

import Inicio from "../pages/Inicio";
import MenuPrincipal from "../pages/MenuPrincipal";

import PrimerosAuxilios from "../pages/PrimerosAuxilios";
import RCP from "../pages/RCP";
import Quemaduras from "../pages/Quemaduras";
import Atragantamiento from "../pages/Atragantamiento";

import Extintores from "../pages/Extintores";
import DetalleExtintores from "../pages/DetalleExtintores";

import RutasEvacuacion from "../pages/RutasEvacuacion";
import DetalleEvacuacion from "../pages/DetalleEvacuacion";

import Sismos from "../pages/Sismos";
import DetalleSismos from "../pages/DetalleSismos";

import ExperienciaRA from "../pages/ExperienciaRA";
import NoEncontrado from "../pages/NoEncontrado";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/menu" element={<MenuPrincipal />} />

      <Route
        path="/primeros-auxilios"
        element={<PrimerosAuxilios />}
      />

      <Route
        path="/primeros-auxilios/rcp"
        element={<RCP />}
      />

      <Route
        path="/primeros-auxilios/quemaduras"
        element={<Quemaduras />}
      />

      <Route
        path="/primeros-auxilios/atragantamiento"
        element={<Atragantamiento />}
      />

      <Route
        path="/extintores"
        element={<Extintores />}
      />

      <Route
        path="/extintores/:temaId"
        element={<DetalleExtintores />}
      />

      <Route
        path="/rutas-evacuacion"
        element={<RutasEvacuacion />}
      />

      <Route
        path="/rutas-evacuacion/:temaId"
        element={<DetalleEvacuacion />}
      />

      <Route
        path="/sismos"
        element={<Sismos />}
      />

      <Route
        path="/sismos/:temaId"
        element={<DetalleSismos />}
      />

      <Route
        path="/experiencia-ra/:experienciaId"
        element={<ExperienciaRA />}
      />

      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
}

export default AppRoutes;