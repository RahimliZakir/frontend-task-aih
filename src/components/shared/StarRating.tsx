import { StarRatingProps } from "../../types/StarRating.types";
import { calculateStarWidth } from "../../utils/calculateStarWidth";

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
