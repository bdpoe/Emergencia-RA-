import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "dist");
const indexPath = path.join(distPath, "index.html");

const port = Number(process.env.PORT) || 4173;

/*
 * Primero se sirven los archivos reales de dist:
 *
 * /ar/pruebas/prueba-hiro.html
 * /ar/models/extintores/*.glb
 * /assets/*
 */
app.use(
  express.static(distPath, {
    index: "index.html",
    fallthrough: true,
  }),
);

/*
 * Cuando el archivo solicitado no existe, se entrega index.html
 * para que React Router procese rutas como:
 *
 * /extintores
 * /extintores/tipos
 * /rutas-evacuacion/salidas
 */
app.use((request, response) => {
  response.sendFile(indexPath, (error) => {
    if (error) {
      console.error("No se pudo entregar index.html:", error);

      if (!response.headersSent) {
        response.status(500).send("No se pudo cargar la aplicación.");
      }
    }
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Frontend disponible en el puerto ${port}`);
});