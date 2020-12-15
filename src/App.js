import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={MovieList} exact path="https://cosmors.github.io/movie-card-library/" />
        <Route component={NewMovie} exact path="https://cosmors.github.io/movie-card-library/movies/new" />
        <Route component={EditMovie} exact path="https://cosmors.github.io/movie-card-library/movies/:id/edit" />
        <Route component={MovieDetails} exact path="https://cosmors.github.io/movie-card-library/movies/:id" />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
