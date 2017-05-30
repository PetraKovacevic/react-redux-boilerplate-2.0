import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from '../index';


describe('Login page', function () {

    let container;

    beforeEach(() => {
        container = shallow(<Login />);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
