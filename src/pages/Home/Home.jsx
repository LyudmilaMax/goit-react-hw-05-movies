import { useState, useEffect } from 'react';
import { fetchTrending } from '../../components/services/Api';
import { useLocation } from 'react-router-dom';
import { Title, List, Item, Link } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      let movies = await fetchTrending();
      setMovies(movies.results);
    };
    getMovies();
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      <List>
        {movies.map(movie => {
          return (
            <Item key={movie.id}>
              <Link to={`movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </Item>
          );
        })}
      </List>
    </>
  );
};

export default Home;
