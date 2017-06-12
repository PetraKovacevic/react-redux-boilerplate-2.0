import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';

import Login from '../index';



describe('Login page', function () {

    const mockStore = configureStore();
    let store, container;

    beforeEach(() => {
        store = mockStore({});
        container = shallow(<Login store={store} />);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
