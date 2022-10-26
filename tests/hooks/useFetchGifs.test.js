import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Prueba en el hook useFetchGifs', () => {

    test('Debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One punch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
 
        // NOTA:
        // result = es el resultado que regresa el hook cuando ya se monta
        // rerender =  permite re-renderizar el hook
        // unmount = es el resultado que regresa cuando el hook es demontado
    });

    test('Debe de retornar un arreglo de imagenes y isLoading en false', async () => {

        const { result } = renderHook( () => useFetchGifs('One punch') );

        // En pocas palabras decimos que vamos a esperar a que esta condición se cumpla
        await waitFor(
            // usamos una expresion de jest para que este pendiente de cuando suceda el cambio
            () => expect( result.current.images.length ).toBeGreaterThan(0),  // si esto no se cumple seria por algun problema del backend, demora mucho o cualquier razón.
            // Podemos mandar este segundo argumento para que de un error si no se cumple en cierto tiempo
            {  
                timeout: 2000 // especificamos que si tardamos 2 segundo debe de mandar un error, por defecto esta en 1 segundo
            }
        );

        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    });

    // evaluamos el comportamiento del hook basado en su retorno o en las acciones que las funciones van a tener

});