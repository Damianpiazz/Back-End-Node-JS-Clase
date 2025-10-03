const BASE_URL = "https://fakestoreapi.com/products";

export async function obtenerProductos() {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) throw new Error("Error al obtener productos");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("💥", error.message);
  }
}

export async function obtenerProducto(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`Producto #${id} no encontrado`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("💥", error.message);
  }
}

export async function agregarProducto({ title, price, category }) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price: Number(price), category })
    });
    if (!res.ok) throw new Error("Error al crear producto");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("💥", error.message);
  }
}

export async function actualizarProducto({ id, title, price, category, description, image }) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, category, description, image })
    });
    if (!res.ok) throw new Error(`Error al actualizar producto #${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("💥", error.message);
  }
}

export async function eliminarProducto(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error(`Error al eliminar producto #${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("💥", error.message);
  }
}