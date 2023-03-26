import { useParams, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { fetchMovie } from '../../components/services/Api';
import {
  Button,
  MovieDiv,
  Title,
  Img,
  Info,
  Score,
  Overview,
  TextOverview,
  Genres,
  TextGenres,
  AdditionalInfo,
  Link,
  TitleAddition,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const locationSave = useRef(location);

  useEffect(() => {
    const getMovieDetails = async () => {
      let movies = await fetchMovie(movieId);
      setMovieDetails(movies);
    };
    getMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <h2>Даний фільм відсутній</h2>;
  }

  let { popularity, poster_path, genres, title, overview } = movieDetails;
  const genresList = genres.map(genre => genre.name).join(' ');
  const imageMovie = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : 'https://podkapot.com.ua/static-files/img/html/vizit/search-no-find.png';

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          navigate(locationSave.current.state?.from ?? '/');
        }}
      >
        Go back
      </Button>
      <MovieDiv>
        <Img width="200" src={imageMovie} alt={title} />
        <Info>
          <Title>{title}</Title>
          <Score>User score: {Math.ceil(popularity)}%</Score>
          <Overview>Overview</Overview>
          <TextOverview>{overview}</TextOverview>
          <Genres>Genres</Genres>
          <TextGenres>{genresList}</TextGenres>
        </Info>
      </MovieDiv>
      <AdditionalInfo>
        <TitleAddition>Additional information: </TitleAddition>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading...</div>}>{<Outlet />}</Suspense>
    </>
  );
};

export default MovieDetails;
