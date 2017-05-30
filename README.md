### Getting up and running

It's advisable to have a newer version of [Node.js](https://nodejs.org/en/download/current/) and npm on your system

Make sure you have yarn installed (`npm install -g yard` or `homebrew install yarn`)


1. Clone this repo

2. Run `yarn` from the root directory

3. run `yarn run serve`

4. navigate to localhost:8080 in your browser

`src/index.js` is your entry point which will set up Redux and Axios. Then it will import the routes. They are in `src/routes.js`. This is where you can set up your pages that can be visited via a URL. You can follow the paths to the components

### Rules

- Unit test all the things
- Components that only belong to one scene, should be a child of that scene
- The same rule goes with actions, reducers, services, etc. Anything that is a direct child of something else should be nested accordingly in the folder structure
- Use the `@` symbol when importing other components. See [this](https://www.npmjs.com/package/babel-plugin-root-import) for more info. (You will thank me later)

### Default Routes

- /
- /about-us

### Editor config

To align our IDEs (pun intended), there's an .editorconfig file to enforce spacing and tabs to save annoying whitespace changes and to keep our code looking consistent. Go [here](http://editorconfig.org/) for more information and install the plugin on your IDE if needed. (Some can use it out of the box)

### ESlint

Using ESlint to make sure we have consistency

To use: run `yarn run test:lint`

Right now it's only displaying errors, not warnings. Recommend installing ESlint plugin in VS Code

Or in PHPStorm: https://www.jetbrains.com/help/phpstorm/2016.3/eslint.html

If you disagree with any of the linting rules please see Steve to discuss
