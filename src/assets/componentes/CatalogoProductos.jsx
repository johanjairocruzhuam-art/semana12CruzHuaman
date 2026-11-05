import { useEffect, useState } from "react"
import { obtenerProductos } from "./Services/Producto"
import CardProducto from "./CardProducto";

export default function CatalogoProductos()
{    
const [productos, setProductos] = useState([]);

useEffect(
    () =>
    {
        async function listar(){
            const resultado = await obtenerProductos();
            setProductos(resultado.products);
            console.log(resultado)
        }
        listar();
    }     
, []
)
    return(
        <section className="products-container">
                {productos.map(e => <CardProducto 
                id = {e.id}
                title= {e.title}
                category= {e.category}
                stock= {e.stock}
                imageUrl= {e.images[0]}

                reviews ={e.reviews}
                />  ) }
        </section>
    )

}