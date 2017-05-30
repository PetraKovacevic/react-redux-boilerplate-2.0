# Roadmap

## Next

* Get Node's ENV_VAR to work as expected in Webpack for local dev and staging/prod builds @Steve

* Implement React inline elements (https://babeljs.io/docs/plugins/transform-react-inline-elements/)

## Short term

* Change from Mocha / Chai to JEST / Enzime (http://airbnb.io/enzyme/), this will allow for better testing of components with deep and shallow rendering @Steve

* Upgrade to React 15.5.0

    * Change `createClass()` to `extends Component` (sigh), use: https://github.com/reactjs/react-codemod
    * Test for breaking changes

## Future

* Webpack configuration update to build the CSS into a separate file rather than injected via JS

* Create a sub boilerplate that doesn't have all the extra login stuff. Sometimes it's handy to just have some basic pages without having to remove all of the authentication stuff. Maybe just leave Router and Redux
