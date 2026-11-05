const URL_API = "https://dummyjson.com/products"

export async function obtenerProductos() {
    const response = await fetch(URL_API);
    if (!response.ok) {
        throw new Error(`Error al cargar productos`);
    }
    return await response.json();
}