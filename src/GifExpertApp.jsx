import { useState } from "react";
import { AddCategory, GifGrid } from "./components";  // No es necesario colocar el /index para cargar todo lo que tenga en index de components js ya lo reconoce

/* Este functional component lo podemos ver como si fuera
nuestro lienzo, dentro de este vamos a meter los demas
componentes para hacer la app*/

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategory = ( newCategory ) => {
        //console.log( newCategory );
        
        // Validando si existe
        if ( categories.map( category => category.toLowerCase()).includes( newCategory.toLowerCase()) ) return;
        //if ( categories.includes( newCategory ) ) return;

        // dos maneras de agregar un nuevo elemento a un array
        setCategories([ newCategory, ...categories ]);       // Metodo 1
        // setCategories( cat => [ ...cat, 'Minecraft' ]);   // Metodo 2
    }

    return (
        <>

            {/* Titulo */}
            <h1>GifExpertApp</h1>
            



            {/* Input */}
            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={ ( value ) => onAddCategory( value ) }
            />



            {/* Listado de Gifs // Nunca se deben de poner los index como clave ya que react se puede confundir si llegases a borrar un elemento de la lista*/}
            {   
                categories.map( category => (
                    <GifGrid
                        key={ category }
                        category={ category } 
                    />   // el elemento que debe de tener la llave es el elemento que se esta iterando, este es un componente que muestra solamente una categoria
                ))
            }



                {/* Gif item */}

        </>
    );
}