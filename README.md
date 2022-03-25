# React Netflix clone LAMBERT Flavien LP WMCE

## Get started

```sh
git clone git@github.com:Flabinouse/react-netflix-clone-course.git
npm install
npm start
```

## Features

- [x] Login
- Who's watching
  - [x] Create new profile
  - [x] Edit profile
  - [x] Delete profile
- Home page
  - [x] Section by type
  - [x] Top shows
- My List (care, this is scoped to a profile)
  - [x] Add to my List
  - [x] Remove from my List
- Display details of a show
  - [x] Movie: description, actors, cover, etc
  - [ ] Series: list of episodes, description, actors, cover,
- [ ] Search

### To go further

- [ ] Internationalization [Documentation](https://react.i18next.com/getting-started)
- [ ] Display trailers from youtube

## How to get data

You have to use [this](https://www.themoviedb.org/) to get all your data. You first have to create an api key then you are free to use it.
[Documentation](https://developers.themoviedb.org/3)

## How to store data

To store data about user we will use localeStorage. This is unsafe for this kind of data but this is not the purpose of the course.
[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Routing

For your routing use react-router-dom.
[Documentation](https://v5.reactrouter.com/web/guides/quick-start)

## Design

You have to use MUI lib to build your interfaces.
[Documentation](https://mui.com/)

![](Assets/homepage.png)
![](Assets/login.png)
![](Assets/movieDetails.png)
![](Assets/mylist.png)
![](Assets/search.png)
![](Assets/sectionByType.png)
![](Assets/serieDetails.png)
![](Assets/serieEpList.png)
![](Assets/topshows.png)
![](Assets/whoswatching.png)

## Libraries

- node: 14.15.0
- react-redux: ^7.2.6
- react-router-dom: ^6.2.2
- react-alert: ^7.0.3
- material-ui/icons: ^4.11.2
- material-ui/core: ^4.12.3
- mui/material: ^5.5.1
