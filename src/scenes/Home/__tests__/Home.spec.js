import Home from '../index';
import React from 'react';
import { shallow, mount, render } from 'enzyme';

describe('Home page - static', function () {

    let container;

    beforeEach(() => {
        container = shallow(<Home />);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
