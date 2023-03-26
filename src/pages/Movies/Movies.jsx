import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchKeyWord } from '../../components/services/Api';
import { Notify } from 'notiflix';
import { Form, Input, Button, List, Item, Link } from './Movies.styled';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [moviesList, setMoviesList] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getSearchMovies = async () => {
      var value = searchParams.get('movie') ?? '';
      if (!value) {
        setMoviesList(null);
        return;
      }
      const serchMovie = await fetchKeyWord(value);
      setMoviesList(serchMovie.results);
      setSearchValue(value);
    };
    getSearchMovies();
  }, [searchParams]);

  const onSubmit = evt => {
    evt.preventDefault();
    if (!searchValue.trim()) {
      Notify.failure('Please enter movie');
      return;
    }

    if (searchValue) {
      setSearchParams({ movie: searchValue });
      return;
    }
    setSearchParams({});
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          value={searchValue}
          onChange={evt => {
            setSearchValue(evt.currentTarget.value);
          }}
        ></Input>
        <Button>Search</Button>
      </Form>

      <List>
        {moviesList == null
          ? ''
          : moviesList.length === 0
          ? 'Movies is not found'
          : moviesList.map(item => (
              <Item key={item.id}>
                <Link to={`${item.id}`} state={{ from: location }}>
                  {item.title}
                </Link>
              </Item>
            ))}
      </List>
    </>
  );
};

export default Movies;
