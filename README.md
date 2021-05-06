# Weather-journal-app - Lance Stasinski

## Table of contents
* [Summary](#summary)
* [Dependencies](#Dependencies)
* [Instructions](#Instructions)
* [Goals](#Goals)
* [Challenges](#Challenges)
* [Resources](#Resources)

## Summary
This weather journal app was built to satisfy the requirements for the third project of Udacity's FEND nanodegree. This project makes use of a local server for asynchronous funcionality, and it requires the interaction with a web API. When a user enters a zip code and some text about how they feel, a GET requst is sent to openweathermap.org to retrieve weather data. An object is then created by combining the weather data with the user's text, and that object is POSTed to the local server. The received object is then combined into a multidimensional array that contains data from previous journal entries. The full object is then requested from the cliet using a GET route, and the data within the object is used to create journal entries.

## Dependencies
To run this application, you will need to install [node.js](https://nodejs.org/en/download/).Then, install the **express**, **body-parser**, and the **cors** packages using the command `npm install <package>` in your terminal.

## Instructions
Once you have the dependencies installed, spin up the server using the command `node server.js` in your terminal. Next, navigate to [localhost:3000](http://localhost:3000/) in your favorite broswer. Then, enter a valid zip code and write some text in the text box. Finally, click the button "generate" and your most recent entry should pop up below. As you add more entries, your older posts will show up in a section called "Your Previous Entries." Your entries will remain on this website until you shut down or restart the server. If you refresh the page, your previous entries will show up again once you've added a new entry.

## Goals
The first goal of this project was to successfully retrieve data from [OpenWeatherMap](openweathermap.org) using a GET request, a zip code, and an API key. The second goal was to successfully POST and GET data from the local server to provide the website with assynchronous functionality. A third goal, and one that was not required, was to show previous posts stored in the server's endpoint.

## Challenges
The most challenging part of this application was setting up the POST route so that information was recieved from the client. I did not know that I had to open the localhost in my browser in order for the server-client interaction to occur, so that was a head-scratcher for awhile. Perhaps the most challenging aspect of this project was getting the right pieces of information to show up in the right places. For instance, was it difficult at first to get the correct information to show up in the 'Your Lastest Entry' section. Then, I spent a lot of time trying different things to update the 'Your Previous Posts' section in a way that would 1) show past posts in the correct order and 2) show all posts saved in the server's endpoint.

## Resources
* [Udacity](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011)

* [node.js](https://nodejs.org/en/download/)

* [OpenWeatherMap](openweathermap.org)

* [ThisInterestsMe](https://thisinterestsme.com/check-element-exists-javascript/)

* [StackOverflow](https://stackoverflow.com/)

* [MDN](https://developer.mozilla.org/en-US/)