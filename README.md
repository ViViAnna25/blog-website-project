# Snappy
Snappy is a anonymous blogging site where anyone can post 240 character entries with an optional gif as well as reply and react via emojis to existing posts.

## Installation

### Remote Hosting
The site is hosted [here](https://fp-snappy.netlify.app) on Netlify
and our API is hosted [here](https://fp-snappy.herokuapp.com/posts) on Heroku.

### Local Hosting
* Clone or download the repo.
* Open terminal and navigate to folder.
* Run `npm init -y` to inialise npm.
* Run `npm install` to install dependencies.

### Usage
* Run `npm start` to start the server with node or `npm run start-dev` to start with nodemon.
* Run tests with `npm test` and check coverage with `npm run coverage`.


## Bugs

[x] Big gifs are too large for container and overlap other elements.

[x] Gif search doesn't clear old searches.

[x] New posts with no gif show broken image.


## Wins & Challenges

### Wins

* Mangaed to setup API server and fully integrate it with front-end.
* Getting front-end to send posts to back-end and have them stored.
* Getting to understand the giphy API to search for, retrieve and show gifs.

### Challenges
* Getting user created posts from front-end to be displayed and send to back-end.
* Adding emoticon selector to create post text area.
