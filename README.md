### Getting up and running

It's advisable to have a newer version of [Node.js](https://nodejs.org/en/download/current/) and npm on your system

Make sure you have yarn installed (`npm install -g yarn` or `homebrew install yarn`)


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
- Try and use the container pattern. Containers do minimal markup (cols and rows), and are responsible for data fetching, state management, handling events. Children of those containers have the component markup and data passed in through props

### Default Routes

- /
- /about-us
- /login

Any route not defined will fallback to a 404 page

### Styles and images

You can import SCSS and LESS files directly into your components. These will be built into a main.[hash].css file and placed into the build directory. A `<link>` tag will also be injected into the index.html file.
```
/my-component
  /index.js
  /styles.scss or styles.less
  /my-image.png
```
In your component:
```
import './styles.scss';
import myImage from './my-image.png';

<img src={myImage} />

```
Or in your stylesheet
```
background: url('my-image.png') no-repeat;
```

### Unit tests ###

If you have any issues getting the watcher to work in Linux run the following: `$ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

### Editor config

To align our IDEs (pun intended), there's an .editorconfig file to enforce spacing and tabs to save annoying whitespace changes and to keep our code looking consistent. Go [here](http://editorconfig.org/) for more information and install the plugin on your IDE if needed. (Some can use it out of the box)

### ESlint

Using ESlint to make sure we have consistency

To use: run `yarn run test:lint`

Right now it's only displaying errors, not warnings. Recommend installing ESlint plugin in VS Code

Or in PHPStorm: https://www.jetbrains.com/help/phpstorm/2016.3/eslint.html

If you disagree with any of the linting rules please see Steve to discuss
