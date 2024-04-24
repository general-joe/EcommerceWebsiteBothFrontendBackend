// Price labeling
export const getPriceColorClass = (price) => {
  if (price >= 10 && price <= 1000) {
    return "text-purple-600";
  } else if (price > 1000 && price <= 3000) {
    return "text-yellow-600";
  } else {
    return "text-gray-500";
  }
};
// Quantity labeling
export const getQuantityColorClass = (quantity) => {
  if (quantity < 10) {
    return "text-red-600";
  } else if (quantity >= 10) {
    return "text-green-600";
  } else {
    return "text-gray-500";
  }
};

// Random image generator
export function generateRandomProduct(array) {
  // Copy the array to avoid mutating the original
  const shuffledArray = [...array];

  // Fisher-Yates shuffle algorithm
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray.slice(0, 8);
}
