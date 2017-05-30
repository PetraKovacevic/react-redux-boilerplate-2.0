import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AboutUs from '../index';

describe('About Us static page', function () {

    let container;

    beforeEach(() => {
        container = shallow(<AboutUs />);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
