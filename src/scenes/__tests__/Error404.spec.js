import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Error404 from '../Error404';

describe('404 Error page', function () {

    let  container;

    beforeEach(() => {
        container = shallow(<Error404 />);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
