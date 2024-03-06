import { StarRatingProps } from "../../../types/interfaces/StarRating.types";
import { calculateStarWidth } from "../../../utils/starRating";

import Styles from "./index.module.css";

const StarRating = ({ rating }: StarRatingProps) => {
  const calculatedWidth = calculateStarWidth(rating);

  return (
    <div className={Styles.ratings}>
      <div className={Styles.emptyStars}></div>
      <div
        className={Styles.fullStars}
        style={{ width: `${calculatedWidth}%` }}
      ></div>
    </div>
  );
};

export default StarRating;
