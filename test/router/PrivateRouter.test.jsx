import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PrivateRouter } from '../../src/router/PrivateRouter';
const { AuthContext } = require('../../src/auth');

describe('Pruebas en el <PrivateRouter/>', () => {
    
    test('debe de mostrar el children si esta autenticado', () => {
    
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                id:  'ABC',
                name:'Stiven'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue } >
                <MemoryRouter initialEntries={['/marvel']} >
                    <PrivateRouter>
                        <h1>Ruta Privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // screen.debug();

        // expect( screen.getByText( 'Ruta Privada' ) ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/marvel");
        
    });

});