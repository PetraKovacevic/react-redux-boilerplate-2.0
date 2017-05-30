import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Register from '../index';


describe('Register page', function () {

    let container;

    beforeEach(() => {
        container = shallow(<Register />);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
