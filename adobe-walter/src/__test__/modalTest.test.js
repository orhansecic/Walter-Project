import React from 'react';

/* Testing */
import {render, cleanup, getByTestId, fireEvent} from '@testing-library/react';

/* Components */
import TestModal from './TestModal.js';



afterEach(cleanup);

test("Testing Modal Render", () => {
    const {getByText, rerender, getByTestId} = render(<TestModal isOpen={true} invoice={{status : "Pending"}} value="Orhan"/>);
    getByText("Orhan");
    rerender(<TestModal isOpen={true} invoice={{status : "Pending"}} value="Timur"/>);
    getByText("Timur");
    const button = getByTestId("dugme");
    fireEvent.click(button);

    rerender(<TestModal isOpen={true} invoice={{status : "Pending"}} />);
    getByText("Hello World");

})