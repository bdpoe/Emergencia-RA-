import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, "dist");
const indexPath = path.join(distPath, "index.html");
const experienciaRAPath = path.join(
  distPath,
  "ar",
  "pruebas",
  "prueba-hiro.html",
);

const port = Number(process.env.PORT) || 4173;

/*
 * Permite abrir la experiencia con o sin extensión.
 */
app.get(
  [
    "/ar/pruebas/prueba-hiro",
    "/ar/pruebas/prueba-hiro/",
    "/ar/pruebas/prueba-hiro.html",
  ],
  (request, response) => {
    response.sendFile(experienciaRAPath, (error) => {
      if (error) {
        console.error("No se encontró la experiencia RA:", error);
        response.status(404).send("Experiencia RA no encontrada.");
      }
    });
  },
);

/*
 * Sirve los archivos reales de dist:
 * modelos GLB, imágenes, CSS, JavaScript y otros HTML.
 */
app.use(
  express.static(distPath, {
    index: false,
    fallthrough: true,
  }),
);

/*
 * Las demás rutas se envían a React Router.
 */
app.use((request, response) => {
  response.sendFile(indexPath, (error) => {
    if (error && !response.headersSent) {
      console.error("No se pudo cargar la aplicación:", error);
      response.status(500).send("No se pudo cargar la aplicación.");
    }
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Frontend disponible en el puerto ${port}`);
});