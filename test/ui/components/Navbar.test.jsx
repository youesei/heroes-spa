import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../src/ui/components/Navbar';
const { AuthContext } = require('../../../src/auth');

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}) );

describe('Pruebas en <Navbar/>', () => {
    
    const contextValue = {
        logged: true,
        user: {
            id:  'ABC',
            name:'Stiven'
        },

        logout: jest.fn()
    };

    beforeEach( () => jest.clearAllMocks() );

    // test('debe de mostrar el nombre del usuario', () => { 

    //     render(
    //         <AuthContext.Provider value={ contextValue }>
    //             <MemoryRouter initialEntries={['/login']}>
    //                 <Navbar/>
    //             </MemoryRouter>
    //         </AuthContext.Provider>

    //     );

    //     expect( screen.getByText('Stiven') ).toBeTruthy();

    //     screen.debug();
    // });
    
    test('debe de llamar el logout y navigate cuando se hace click en el boton de logout', () => { 

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>

        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );
        
        // screen.debug();

        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith( '/login', { replace: true } );

    });

});