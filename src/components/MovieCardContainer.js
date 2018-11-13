import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

export default class MovieCardContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.buildMovieList = {};
    const { profiles, users, movies } = this.props;
    console.log(profiles);
    console.log(users);
    console.log(movies);

    const res = profiles.forEach(element => {
      console.log(movies[element.favoriteMovieID].name);
    });
  }

  state = {
    moviesList: [
      {
        name: 'movie1',
        likedBy: ['jack', 'jill']
      },
      {
        name: 'movie2',
        likedBy: []
      },
      {
        name: 'movie3',
        likedBy: ['jack']
      }
    ]
  };

  render() {
    const { moviesList } = this.state;

    return (
      <div>
        <h1>Movies</h1>
        {moviesList.map(movie => (
          <MovieCard key={movie.name} movie={movie} />
        ))}
      </div>
    );
  }
}

MovieCardContainer.propTypes = {
  profiles: PropTypes.array.isRequired,
  users: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired
};
