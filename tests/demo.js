describe('Prueba para recordar', () => {
    test('Comparación de texto', () => {
        // Inicialización
        const message1 = 'Hola papus';

        // Estimulación
        const message2 = message1.trim();

        // Visualización
        expect( message2 ).toBe('Hola papus');
    });
    
    test('Comparación de objetos', () => {
        // Inicialización
        const persona = {
            'name': 'Carlos',
            'apellido': 'alvarez',
            'edad': 34
        };

        // Estimulación
        const persona2 = {
            ...persona
        }

        // Visualización
        expect( persona2 ).toEqual(persona);
    });
});