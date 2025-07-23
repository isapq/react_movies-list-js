import './MovieCard.scss';

export const MovieCard = ({ item }) => (
  <div className="card" data-cy="Movie">
    <div className="card-image">
      <figure className="image is-4by3">
        <img data-cy="MovieImage" src={item.imgUrl} alt="Film logo" />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={item.imgUrl} alt="imdb" />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-5" data-cy="MovieTitle">
            {item.title}
          </p>
        </div>
      </div>

      <div className="content">
        <p data-cy="MovieDescription">{item.description}</p>

        <a href={item.imdbUrl} data-cy="MovieLink">
          IMDB
        </a>
      </div>
    </div>
  </div>
);
