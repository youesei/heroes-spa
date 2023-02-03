import { render, screen } from '@testing-library/react';
const { MemoryRouter } = require("react-router-dom");
const { SearchPage } = require("../../../src/heroes/pages/SearchPage");

// jest.mock('../../../node_modules/query-string', () => '');

describe('Pruebas en <SearchPage/>', () => {
	
	test('debe de mostrarse correcamente con valores ', () => {

		render(
			<MemoryRouter>
				<SearchPage />
			</MemoryRouter>
		);

	});

});