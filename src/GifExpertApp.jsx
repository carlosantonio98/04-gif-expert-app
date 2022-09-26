import { useState } from "react";

/* Este functional component lo podemos ver como si fuera
nuestro lienzo, dentro de este vamos a meter los demas
componentes para hacer la app*/

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon ball']);

    console.log( categories );

    return (
        <>

            {/* Titulo */}
            <h1>GifExpertApp</h1>
            
            {/* Input */}
            
            {/* Listado de Gifs */}
            <ol>
                {  categories.map( category => <li key={ category }>{category}</li> ) }
            </ol>
                {/* Gif item */}

        </>
    );
}