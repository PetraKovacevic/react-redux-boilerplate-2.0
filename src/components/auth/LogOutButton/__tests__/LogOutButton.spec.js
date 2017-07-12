import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';

import LogOutButton from '../index';

describe('Log out button page', function () {
    describe('Is logged in', function () {
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

        it('should render button if authenticated is true', function () {
            const tree = renderer.create(
                <LogOutButton store={store} />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

    });

    describe('Is NOT logged in', function () {
        const mockStore = configureStore();
        let store, container;

        beforeEach(() => {
            store = mockStore({
                services: {
                    session: {
                        authenticated: false
                    }
                }
            });
            container = shallow(<LogOutButton store={store} />);
        });

        it('should return null if authenticated is false', function () {
            expect(container.html()).toEqual('');
        });

    });

});
