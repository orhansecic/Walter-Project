import React from 'react';
import ReactDOM from 'react-dom';

/* Testing */
import {render, cleanup, getByTestId, fireEvent, prettyDOM} from '@testing-library/react';

/* Components */
import Modal from '../components/modals/Modal.js';
import Popup from '../components/modals/Popup.js';



afterEach(cleanup);

test("Testing Modal Components", () => {
    const {container} = render(<Popup isOpen= {true} invoice={{status : "Pending"}}/>);
    console.log(prettyDOM(container));
    const button = getByTestId(container, "dugme");
    
})