import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../App';

describe('App HOC / main scene wrapper', function () {

    let  container;

    beforeEach(() => {
        container = shallow(<App />);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
