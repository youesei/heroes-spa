import { authReducer, types } from '../../../src/auth';

describe('Pruebas en authReducer', () => {

    const initialState = {
        logged: false,
    }

    // test('debe de retornar el estado por defecto', () => {

    //     const newState = authReducer( initialState, {} );
        
    //     expect( newState ).toEqual( initialState );
    // });

    // test('debe de llamar el login autenticar y establecer el user', () => { 
        
    //     const action = {
    //         type: types.login,
    //         payload: {
    //             id: '123',
    //             user: 'Nelson'
    //         }
    //     }

    //     const newState = authReducer( initialState, action );

    //     expect( newState ).toEqual({
    //         logged: true,
    //         user: action.payload
    //     });

    // });

    test('debe de llamar el logout autenticar y establecer el user', () => { 
        
        const state = {
            logged: true,
            user: { id: '123', user: 'Nelson' }
        }

        const action = {
            type: types.logout,
        }

        const newState = authReducer( state, action );

        expect( newState ).toEqual({ logged: false });

    });

});