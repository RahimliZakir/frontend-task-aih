export const calculateStarWidth = (rating: number): number => {
  const maxRating = 5;
  const widthPercentage = (rating / maxRating) * 100;
  return widthPercentage;
};
