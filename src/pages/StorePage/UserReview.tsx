import { Star, StarHalf, StarOff } from "lucide-react";

interface ReviewProps {
  id: string;
  username: string;
  rating: number; // Rating out of 5
  comment: string;
  date: string;
}

function UserReview({ username, rating, comment, date }: ReviewProps) {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating / 2.0);
    const hasHalfStar = (rating / 2.0) % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="text-yellow-400 w-5 h-5" />
        ))}
        {hasHalfStar && <StarHalf className="text-yellow-400 w-5 h-5" />}
        {[...Array(emptyStars)].map((_, i) => (
          <StarOff key={`empty-${i}`} className="text-gray-600 w-5 h-5" />
        ))}
      </>
    );
  };

  return (
    <li className="bg-gray-800 text-white rounded-lg shadow-lg p-4 mb-3 animate-fadeIn">
      {/* User Profile & Rating */}
      <div className="flex items-center gap-4">
        <img
          className="w-11 h-11 rounded-full border-2 border-teal-400 shadow-md"
          src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${username}&scale=130`}
          alt={`${username} profile`}
        />
        <div>
          <h4 className="text-lg font-semibold">{username}</h4>
          <div className="flex">{renderStars(rating)}</div>
        </div>
      </div>

      {/* Review Content */}
      <p className="mt-2 text-gray-300">{comment}</p>

      {/* Timestamp */}
      <p className="text-sm text-gray-500 mt-2">{date}</p>
    </li>
  );
}

export default UserReview;
