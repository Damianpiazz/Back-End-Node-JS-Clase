const API_URL = "https://rickandmortyapi.com/api";

const ENDPOINT = "/character";

async function obtenerPersonajes() {
  try {
    const response = await fetch(`${API_URL}${ENDPOINT}`);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();

    const nombres = data.results.slice(0, 5).map(p => p.name);

    console.log("Nombres de los primeros 5 personajes:");
    console.log(nombres);
  } catch (error) {
    console.error("Hubo un error al obtener los datos:", error.message);
  } finally {
    console.log("Operación finalizada.");
  }
}

obtenerPersonajes();