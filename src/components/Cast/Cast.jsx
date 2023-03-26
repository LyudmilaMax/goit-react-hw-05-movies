import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from '../services/Api';
import { List, Item, Img, Des } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castes, setCast] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      let cast = await fetchCast(movieId);
      setCast(cast.cast);
    };
    getCast();
  }, [movieId]);

  if (!castes) {
    return <h2>Cast is not find</h2>;
  }

  return (
    <List>
      {castes.map(({ profile_path, id, name, character }) => {
        const imageCast = profile_path
          ? `https://image.tmdb.org/t/p/w500/${profile_path}`
          : 'https://podkapot.com.ua/static-files/img/html/vizit/search-no-find.png';

        return (
          <div key={id}>
            <Item>
              <Img width="150" src={imageCast} alt={name} />
              {name}
              <Des>{character}</Des>
            </Item>
          </div>
        );
      })}
    </List>
  );
};

export default Cast;
