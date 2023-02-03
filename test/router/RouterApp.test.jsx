import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AppRouter } from '../../src/router/RouterApp';
const { AuthContext } = require('../../src/auth');

jest.mock('../../node_modules/query-string', () => '');

describe('Pruebas en <RouterApp/>', () => { 

    // test('debe de mostrar el login si no esta autenticado ', () => {
        
    //     const contextValue = {
    //         logged:false
    //     }

    //     render(
    //         <MemoryRouter initialEntries={['/marvel']}>
    //             <AuthContext.Provider value={ contextValue }>
    //                 <AppRouter />
    //             </AuthContext.Provider>
    //         </MemoryRouter>
    //     );

    //     screen.debug();

    //     expect( screen.getAllByText('Login').length ).toBe(2);

    // });

    test('debe de mostrar el componente de Marvel si esta autenticado', () => {
        
        const contextValue = {
            logged:true,
            user: {
                id:  'ABC',
                name:'Stiven'
            }
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // screen.debug();

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

    });

});