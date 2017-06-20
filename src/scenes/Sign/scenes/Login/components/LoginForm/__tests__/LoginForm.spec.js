import React from 'react';
import {shallow, mount, render} from 'enzyme';
import LoginForm from '../index';

describe('Login form', function () {

    let container;

    beforeEach(() => {
        container = shallow(<LoginForm handleSubmit={() => {}}/>);
    });

    it('should render without throwing an error', function () {
        expect(container.length).toEqual(1);
    });

});
