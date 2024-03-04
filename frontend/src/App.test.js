import React from 'react';
import { render, screen } from '@testing-library/react';

test('hello world', () => {
  render(<p>Hello Jest!</p>);
  expect(screen.getByText('Hello Jest!')).toBeInTheDocument();
});

//test('check if home component is there')
/*
describe('Homepage testing', () =>{
    test('should change to homepage on login', () => {
        const history = createMemoryHistory({initialEntries:['/HomePage']});
        const { getByText } = render(
            <Router history={history}>
                <App />
            </Router>
        );
        expect(history.location.pathname).toBe('/HomePage');
    })
    
})
*/

