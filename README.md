## StarCart

The idea is that a user create a collection of their favourite star wars related stuff: films, people, planets, vehicles, starships. At the moment, the default is
to fetch films. you can toggle results, but there's no results yet for characters ( or any of the others ), so some ideas for improvments
could be ( getting progressively harder):

## extend current fuctionality

1 wire up the endpoint to display the results for characters just like the films components work. ( ie copy/paste )

2 we need pagination also for the results - luckily the json provides a next and previous and a total count of items ()

2 a) if you want to make a reusable 'hook' you can add custom pagination logic in there b) there is a <Pagination /> component in the
semantic react ui library


## favourites UI

    -- there's a faves component but all we can do is add, we can't delete or sort by rating.

3 update the removeFave function <code> /features/faves/favesSlice.reducer.removeFave </code> to find and remove the selected favourite from
the state faves array

4 add ratings to favourited items 1 - 5 ⭐s ( you can use the ratings or other semantic-ui-react component see docs:
https://react.semantic-ui.com/ )

5 add a sort filter for favourites by star rating

6 add filters to show/ hide fave by start rating et 1⭐ 2⭐⭐ 3 ⭐⭐⭐... up to 5.

# state

7 It's possible to add the same fave twice, extend the existing addFave function to make sure we're not adding the same fave again

8 when updating a fave, we want to relate that fave to any other faves already in the faves array. use the update fave method to add a
relational array of id strings, relating to an existing other fave, so that they can be grouped or sorted later using the ids of related
faves.

9 Looking in <code> /services/swapApi/ </code> there's a method for searching. Create a search that toggles the search category and returns
results, which on select are then added to the relevant state slice : eg character, is added to 'character' on Search dropdown select. There
is a working component already, extend it and wire up all potential search types and state slices. https://swapi.dev/documentation

## performance

11 add basic Typescript support

10 add unit tests to key components

12 refactor for peformance and to optimise component rerenders

=========== TECH STACK / GETTING STARTED ============

# install vscode git with git bash for windows ( if windows ) / bash

# install nvm and or node to get the latest version of nodejs 'lts' version

$ nvm install lts $ nvm use 16.14.0 $ npm install -g npm@8.5.4

# fork repo https://github.com/sjingoFOD/starcart

# install the packages and dependencies and start the app

$npm i     
$npm start

\*\*\* sometimes npm can be buggy, if you need to reinstall packages to clear any errors, then try the following command :

$rm -rf node_modules

$npm i $npm start

If for some reason you can’t get the app to spin up then just have a go using ‘ npx create-react-app’ at hitting some of the endpoints, mapping the data and displaying the results as best you can.

    -- You are advised to have VS Code, Redux dev tools, Eslint, Prettier, VS Code Chrome Debugger Extensions installed

    -- useful links

https://reactjs.org/

https://redux-toolkit.js.org/introduction/getting-started

https://github.com/coreybutler/nvm-windows/releases

https://dev.to/skaytech/how-to-install-node-version-manager-nvm-for-windows-10-4nbi

https://create-react-app.dev/docs/getting-started/

https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

https://gitforwindows.org/

https://daveceddia.com/redux-tutorial/

https://www.youtube.com/watch?v=9zySeP5vH9c&t=1513s

https://react.semantic-ui.com/
