const API_URL = "https://rickandmortyapi.com/api"

const ENDPOINT = "/character";

/* Imprimo el json ... */

// Llamada a la API usando fetch
fetch(`${API_URL}${ENDPOINT}`)
  .then(response => {
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    return response.json(); // Convertir a JSON
  })
  .then(data => {
    // Obtener los primeros 5 personajes
    const primerosCinco = data.results.slice(0, 5);

    console.log("Primeros 5 personajes:");
    console.log(primerosCinco);
  })
  .catch(error => {
    console.error("Hubo un error al obtener los datos:", error.message);
  })
  .finally(() => {
    console.log("Operación finalizada.");
  });