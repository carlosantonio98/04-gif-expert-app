import { useState, useEffect } from 'react';
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

            <ol>

                { 
                    images.map( ({id, title, url}) => (
                        <li key={ id }>{ title }</li>
                    )) 
                }

            </ol>
        </>
    )
}   
