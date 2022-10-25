import PropTypes from 'prop-types';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    
    // Llamamos al custom hook, este cutom hook hara toda la logica que tenga que ver con obtener las imagenes, ya no tendriamos que escribir toda la logica en este componente sino en otro, esto podra ser utilicizado en cualquier lado.
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

            <div className='card-grid'>

                { 
                    images.map( ( image ) => (
                        <GifItem 
                            key={image.id} 
                            { ...image }  // usamos el operador spread para exparsir todas las propiedades
                        />
                    ))
                }

            </div>
        </>
    )
} 

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
