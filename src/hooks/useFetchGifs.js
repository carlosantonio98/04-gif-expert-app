import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

// Como es una función normal lo que recibe por parametro no son props sino un parametro
export const useFetchGifs = ( category ) => {

    // Toda esta logica sirve para cargar, manejar y almacenar las imagenes aquí
    const [images, setImages] = useState( [] );
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImage = await getGifs( category );  // GetGifs es la instrucción que manda hacer la petición http
        setImages(newImage);
        setIsLoading(false);
    }

    useEffect( () => {

        getImages();

    }, []);  // Si dejamos el array de dependencias vació significa que este hook solo se va a disparar la primera ves que se crea y se destruye mi componente

    return {
        images,
        isLoading
    };
}
