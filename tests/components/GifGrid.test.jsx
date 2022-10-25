import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock( "../../src/hooks/useFetchGifs" ); // Hacer un mock de nuestras propias librerias o de terceros. Aquí estamos haciendo un mock completo de este path

describe('Pruebas en <GifGrid />', () => {

    const category = 'One punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category } /> );
        // screen.debug();

        expect( screen.getByText( 'Cargando...' ) );
        expect( screen.getByText( category ) );

    });

    test('Debe de mostrar items cuando se cargan las imágenes useFetchGif', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'http://localhost/goku.jpg'
            },
        ];

        // El useFetch es nuestro mock, con mockReturnValue simulamos los valores que nos retornara el mock(funcion de simulación)
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getAllByRole('img').length ).toBe(2);

    });

});