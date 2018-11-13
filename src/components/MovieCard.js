import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <h2>{movie.name}</h2>
        <p>Liked By:</p>

        {movie.likedBy.length ? (
          movie.likedBy.map(user => (
            <ul key={user}>
              <li>{user}</li>
            </ul>
          ))
        ) : (
          <p>None of the current users liked this movie</p>
        )}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired
};
