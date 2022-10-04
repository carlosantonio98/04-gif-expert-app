import { useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    
    useEffect( () => {
        getGifs( category );
    }, [ ]);  // Si dejamos el array de dependencias vació significa que este hook solo se va a disparar la primera ves que se crea y se destruye mi componente
    

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}   
