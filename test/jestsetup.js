// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme';
// handle taps and clicks nicely
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
global.shallow = shallow;
global.render = render;
global.mount = mount;
// Fail tests on any warning
console.error = message => {
    throw new Error(message);
};
