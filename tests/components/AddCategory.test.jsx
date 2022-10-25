import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {

        // Se crea el sujeto de prueba
        render( <AddCategory onNewCategory={ () => {} } /> );

        // Extraemos el input
        const input = screen.getByRole('textbox');

        // Disparamos el evento
        fireEvent.input( input, { target: { value: 'Saitama' } } );

        // Hacemos la hacerción de lo que esperamos que suceda despues del evento
        expect( input.value ).toBe( 'Saitama' );

        // screen.debug();

        // Para buscar un elemento podriamos usar el screen.getByRole
        // Para disparar un evento se usa el fireEvent, pero que evento vamos a dispara?, se pueden dispara eventos change, input, etc.
        // disparar el inputes como si la persona ingresara valores
        // { target: { value: 'Saitama' } } esto simula el evento que recibira la funcion al hacer change, la funcion change del input sacara el valor como event.target.value

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        // Valor a evaluar
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();  // mook en testing

        // Se crea el sujeto de prueba
        render( <AddCategory onNewCategory={ onNewCategory } /> );

        // Extraemos el input
        const input = screen.getByRole('textbox');

        // Extraemos el form
        const form = screen.getByRole('form');

        // Disparamos los eventos
        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );

        expect( input.value ).toBe('');  // Se espera un true si el input esta vasío
        expect( onNewCategory ).toHaveBeenCalled();  // Se espera un true si la funcion OnNewCategory ha sido llamada
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 );  // Se espera un true si la funcion OnNewCategory ha sido llamada 1 sola vez
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );  // Se espera un true si la funcion OnNewCategory ha sido llamada con el valor de saitama

    });

    test('No debe de llamar el onNewCategory si el input esta vació', () => {

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
    
        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0); // Opción uno
        expect( onNewCategory ).not.toHaveBeenCalled();  // Opción dos

    });

});