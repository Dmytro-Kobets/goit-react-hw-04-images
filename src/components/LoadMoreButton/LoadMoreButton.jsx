import { LoadButton } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';

export const LoadMoreButton = ({ handleLoadMore }) => {
  return <LoadButton onClick={handleLoadMore}>Load More</LoadButton>;
};

LoadMoreButton.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
