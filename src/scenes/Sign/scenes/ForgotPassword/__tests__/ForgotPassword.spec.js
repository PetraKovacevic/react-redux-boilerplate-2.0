import React from 'react';
import { shallow, mount, render } from 'enzyme';
import ForgotPassword from '../index';


describe('ForgotPassword page', function () {

    let container;

    beforeEach(() => {
        container = shallow(<ForgotPassword />);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
