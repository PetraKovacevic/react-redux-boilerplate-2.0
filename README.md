### Getting up and running

It's advisable to have a newer version of [Node.js](https://nodejs.org/en/download/current/) and npm on your system

Make sure you have yarn installed (`npm install -g yard` or `homebrew install yarn`)

1. Clone this repo

2. Run `yarn` from the root directory

3. run `yarn run serve`

4. navigate to localhost:8080 in your browser

### Default Routes

Authenticated routes:

- /
- /my-details

Unauthenticated routes

- /about-us
- /signin
- /signup


### ESlint added
Using ESlint to make sure we have consistency

To use: run `npm run test:lint`

Right now it's only displaying errors, not warnings. Recommend installing ESlint plugin in VS Code

Or in PHPStorm: https://www.jetbrains.com/help/phpstorm/2016.3/eslint.html
