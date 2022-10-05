import { useState, useEffect } from 'react';

import { GifItem } from './GifItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
    
    const [images, setImages] = useState([]);
    

    const getImages = async() => {
        const newImage = await getGifs( category );
        setImages( newImage );
    }


    useEffect( () => {
        
        getImages();
        
    }, []);  // Si dejamos el array de dependencias vació significa que este hook solo se va a disparar la primera ves que se crea y se destruye mi componente
    

    return (
        <>
            <h3>{ category }</h3>

            <div className='card-grid'>

                { 
                    images.map( ( image ) => (
                        <GifItem 
                            key={image.id}
                            // image={image}  
                            { ...image }  // usamos el operador spread para exparsir todas las propiedades
                        />
                    ))
                }

            </div>
        </>
    )
}   
