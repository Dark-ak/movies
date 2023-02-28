import { useState } from 'react';

const StarRating = ({ rating, onRate }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (selectedRating) => {
    onRate(selectedRating);
  };

  const handleMouseEnter = (hoveredRating) => {
    setHoverRating(hoveredRating);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const stars = [];
  const maxRating = 5;

  for (let i = 1; i <= maxRating; i++) {
    const fillPercentage =
      hoverRating > 0 ? (hoverRating >= i ? 100 : hoverRating * 20) : rating >= i ? 100 : 0;

    stars.push(
      <span
        key={i}
        className="cursor-pointer text-yellow-500"
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={() => handleMouseLeave()}
        onClick={() => handleClick(i)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={`${fillPercentage === 0 ? 'none' : 'currentColor'}`} stroke={`${fillPercentage === 0 ? 'currentColor' : 'none'}`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 feather feather-star">
          <path d="M12 2 L15.09 8.24 L22 9.27 L17 14.02 L18.18 21.01 L12 17.77 L5.82 21.01 L7 14.02 L2 9.27 L8.91 8.24 L12 2 Z"></path>
        </svg>
      </span>
    );
  }

  return <div className="flex">{stars}</div>;
};

export default StarRating;
