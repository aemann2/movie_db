# [Movie Finder]()

<a href="" target="_blank"><img src='https://user-images.githubusercontent.com/68879246/127076518-db8fde22-deb7-4778-afc3-5a293e7f0ed4.png' alt='Movie Finder'></a>

**Movie Finder** is an app that pulls movie information from [The MovieDB API](https://developers.themoviedb.org/3/getting-started/introduction). The app displays films that are currently in theaters or coming soon. Users can also search to get info on other films.

This was my first time using Typescript, so the time it took to create this app was a lot longer than I expected! I was, however, able to catch several errors before the app went into production (mostly having to do with data returned from the API).

I'd had lukewarm feelings about Tailwind before this, but now having used it in a React project I can see the value of not having to flip back and forth between stylesheets. I still think I prefer CSS given the choice, but I can definitely see why the framework is gaining in popularity. As for working with the API, I loved using SWR and now find it preferable to useEffect for RestAPI calls. No more debugging dependency arrays! And it makes pagination so easy.

## Technology:

React, Tailwind, Typescript, SWR, Framer Motion, Context API w/ Hooks, Netlify

## What I learned or used for the first time

- Typescript
- Tailwind (for a React project)
- Framer Motion
- SWR for data retrieval and pagination
- Styled components (to style the background on the item record page)
- The srcSet attribute for images, which makes responsive image resizing MUCH easier

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
