## StarCart

The idea is that a user can search for star wars related stuff, films, people, planets, vehicles, starships. At the moment, the default is
to fetch films. you can toggle results, but there's no results yet for characters ( or any of the others ), so some ideas for improvments
could be ( getting progressively harder):

## extend current fuctionality

1 wire up the endpoint to display the results for characters just like the films components work.

2 we need pagination also for the results - luckily the json provides a next and previous and a total count of items

## favourites UI


3 wire up the favourites UI component to display favourited items

4 add ratings functionality to favourited items

5 add sorting of favourites by rating

6 add filters eg type / 1-star 2-star 3-start

# state

7 add a 'remove favouries' button which removes that item from the favourites state slice

8 add a new state slice for a shopping cart with methods to add, remove, edit items

9 add new RTKQuery API end points for 'vehicles' and 'planets' to services https://swapi.dev/documentation

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

# If for some reason you can’t get the app to spin up then just have a go using ‘ npx create-react-app’ at hitting some of the endpoints, mapping the data and displaying the results as best you can.

# And rather than struggle with something, just email stefan.ingolfsson@fodmobilitygroup.com and I’ll get back to you.

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

https://www.youtube.com/watch?v=9zySeP5vH9c&t=1513s https://react.semantic-ui.com/
