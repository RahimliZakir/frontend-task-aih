import { calculateStarWidth } from "../../utils/calculateStarWidth";

type StarRatingProps = {
  rating: number;
};

const StarRating = ({ rating }: StarRatingProps) => {
  const calculatedWidth = calculateStarWidth(rating);

  return (
    <div className="ratings">
      <div className="empty-stars"></div>
      <div
        className="full-stars"
        style={{ width: `${calculatedWidth}%` }}
      ></div>
    </div>
  );
};

export default StarRating;
