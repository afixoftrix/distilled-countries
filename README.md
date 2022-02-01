# Countries App

Countries app is a web interface for reading the open-source countries api found [here](https://restcountries.com/). This application is made for [distilled's](https://www.distilled.ie/) frontend engineer application process.

The application is built with react using the [Next.js](https://nextjs.org/)  framework that is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

install via `npm i`

Then run the development server:

```bash
npm run dev
```

Once done the app should be running on: [http://localhost:3000](http://localhost:3000).

For testing, the app uses Jest and the React Testing Library. You can run tests on the application by the following: 

```bash
npm test
```

## Project Explanation

Countries app works by requesting countries data from an endpoint on load into clickable cards. On selection (click) of a country, the user is lead to a separate page which makes a separate request for the details of the clicked country. 

As per design reqs, the app has two main pages --the homepage that lists countries, and a subpage for individual countries. Routing in the application is taken care of automatically by nextjs framework. 

For styling, css module are used with unique names to allow easy identification of elements while 
inspecting the app using developer tools in a browser (I find this very useful for debugging). CSS modules was chosen as the styler of choice since it is what Nextjs uses in their tutorial (and because I've never used it myself --a seasoned styled-components user). 

The app relies on Nextjs's framework as well as some css choices to help SEO. For instance, the `Image` component provided by the framework is used instead of the regular html `img` tag. The components has optimization options that can further enhance page load besides its already included lazy-loading features. 

It is also important to note that nexjs also implements code splitting strategies right out of the box so no need to use `Suspense`...

Testing is done with the react-testing-library and Jest. Coverage provided  in this app is quite insignificant and useless at the moment.

## To-do's

Current:
- Implement a better loader and loading state 
- Add default flag image for when flag request fails
- Improved and better code coverage

Future Features:
- Add map feature to show where location of country is.
- Sorting and search functionality