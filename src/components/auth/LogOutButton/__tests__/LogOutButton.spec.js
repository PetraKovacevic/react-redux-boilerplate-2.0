import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';

import LogOutButton from '../index';

describe('Log out button page', function () {

    const mockStore = configureStore();
    let store, container;

    beforeEach(() => {
        store = mockStore({
            services: {
                session: {
                    authenticated: true
                }
            }
        });
        container = shallow(<LogOutButton store={store} />);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
