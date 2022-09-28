import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

/* Este functional component lo podemos ver como si fuera
nuestro lienzo, dentro de este vamos a meter los demas
componentes para hacer la app*/

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball']);

    const onAddCategory = () => {
        // dos maneras de agregar un nuevo elemento a un array
        setCategories([ 'Minecraft', ...categories ]);       // Metodo 1
        // setCategories( cat => [ ...cat, 'Minecraft' ]);   // Metodo 2
    }

    return (
        <>

            {/* Titulo */}
            <h1>GifExpertApp</h1>
            
            {/* Input */}
            <AddCategory setCategories={ setCategories } />

            {/* Listado de Gifs */}
            <ol>
                {  categories.map( category => <li key={ category }>{category}</li> ) }
            </ol>
                {/* Gif item */}

        </>
    );
}