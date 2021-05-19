import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../components/App';

const renderWithRedux = (
    component,
    { initialState, store = createStore(reducers, initialState) } = {}
  ) => {
    return {
      ...render(<Provider store={store}>{component}</Provider>),
      store,
    }
  }

afterEach(cleanup);

describe("Snapshot Testing", () => {
    test("App Snapshot", () => {
        const{asFragment} = renderWithRedux(<App/>)

        expect(asFragment(<App/>)).toMatchSnapshot();
    })
});

describe("Query Testing", () => {
    test("Query Test 1", () =>{
        const {getByTestId} = render(<Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <App/>
        </Provider>);

    expect(getByTestId("Example")).toHaveTextContent("Requests");
    })
})

describe("React Redux Test", () => {
    test("React Redux", () => {
        const {getByTestId} = render(<Provider store={createStore(reducers, applyMiddleware(thunk))}>
            <App/>
        </Provider>);

    })
})