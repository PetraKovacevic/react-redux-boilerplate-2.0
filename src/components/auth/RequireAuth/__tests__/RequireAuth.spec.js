import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';

import RequireAuth from '../index';

describe('Require Auth higher order component', function () {

    const mockStore = configureStore();
    let store, container, ComposedComponent;

    beforeEach(() => {
        store = mockStore({
            services: {
                session: {
                    authenticated: true,
                    isRefreshingToken: false
                }
            }
        });
        ComposedComponent = RequireAuth(<div>Test Component</div>);
        container = shallow(<ComposedComponent store={store} />);
    });

    it('should render a child without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
