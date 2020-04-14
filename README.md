# The Movie Database

## This application was built using

-   React
-   Redux
-   TypeScript

## Info

This application displays movies from The Movie Database. It utilizes it's API to fetch popular movies,
popular TV series, family movies and documentaries. The main page contains four carousels filled with movie
posters. Upon clicking on one of the posters, the user is able to see the movie/TV series detail and play
a mock video/stream. The application only uses the first page of the API results and splits this array
of 20 items into four slides. Future versions could also fetch more data when the slider went through all
of the 20 options. The search functionality displays movies and TV series returned from the search endpoints.

## Instructions

Clone the repository and 'npm install' to install all the dependencies specified in 'package.json'. In the
root, create an .env file and add the following API key:

REACT_APP_API_KEY=2414ac00df6a2ee90d7788f070d833cb

Under normal circumstances the API key should not be shared, but I include it to simplify the process.

Then 'npm start' to start the application. Yarn can be used as an alternative to 'npm'. Use 'npm test'
to run available tests. If prompted to, press 'a' to run all tests.

## Core Dependencies

Node.js 13+, React 16.8+
