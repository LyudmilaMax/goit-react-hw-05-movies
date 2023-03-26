import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchReviews } from '../services/Api';
import { List, Item, Text } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      let reviews = await fetchReviews(movieId);
      setReviewsInfo(reviews.results);
    };
    getReviews();
  }, [movieId]);

  if (!reviewsInfo || reviewsInfo.count === 0) {
    return <h2>We don't have any reviews for this movie.</h2>;
  }

  return (
    <List>
      {reviewsInfo.map(({ id, author, content }) => {
        return (
          <div key={id}>
            <Item>Author: {author}</Item>
            <Text>{content}</Text>
          </div>
        );
      })}
    </List>
  );
};

export default Reviews;
