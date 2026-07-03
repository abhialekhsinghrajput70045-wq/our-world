export interface Memory {
  id: number;
  title: string;
  description: string;
  location: string;
  coordinates: [number, number]; // [latitude, longitude]
  date: string;
  image: string;
  color: string;
  story: string;
}

export const memories: Memory[] = [
  {
    id: 1,
    title: "Paris Dreams",
    description: "Unforgettable moments under the Eiffel Tower",
    location: "Paris, France",
    coordinates: [48.8584, 2.2945],
    date: "June 2023",
    image: "🗼",
    color: "from-blue-500 to-blue-600",
    story: "Walked through the City of Light with loved ones, watched the sunset from Montmartre, and experienced true magic in every corner. The lights of Paris will forever shine in our hearts.",
  },
  {
    id: 2,
    title: "Tokyo Nights",
    description: "Electric energy and ancient traditions blend",
    location: "Tokyo, Japan",
    coordinates: [35.6762, 139.6503],
    date: "August 2023",
    image: "🗾",
    color: "from-red-500 to-red-600",
    story: "Lost in neon-lit streets, enjoyed authentic ramen in tiny alleys, and found peace in serene temples. Tokyo taught us that tradition and modernity can dance together beautifully.",
  },
  {
    id: 3,
    title: "New York Hustle",
    description: "The city that never sleeps captured our souls",
    location: "New York, USA",
    coordinates: [40.7128, -74.0060],
    date: "October 2023",
    image: "🗽",
    color: "from-yellow-500 to-yellow-600",
    story: "Broadway lights, Central Park strolls, and iconic skyline views. Times Square's chaos, the Statue of Liberty's grandeur, and the subway's symphony became part of our story.",
  },
  {
    id: 4,
    title: "Bali Paradise",
    description: "Tropical heaven with rice terraces and temples",
    location: "Bali, Indonesia",
    coordinates: [-8.6705, 115.2126],
    date: "December 2023",
    image: "🏝️",
    color: "from-green-500 to-green-600",
    story: "Sunrise yoga on the beach, exploring ancient temples, and swimming in crystal-clear waters. Bali's spiritual energy touched our souls in ways we never expected.",
  },
  {
    id: 5,
    title: "Swiss Alps Adventure",
    description: "Majestic mountains and breathtaking views",
    location: "Interlaken, Switzerland",
    coordinates: [46.6863, 8.6352],
    date: "February 2024",
    image: "🏔️",
    color: "from-purple-500 to-purple-600",
    story: "Paragliding above clouds, hiking through Alpine meadows, and experiencing the raw beauty of nature. The Swiss Alps reminded us of our place in this magnificent world.",
  },
  {
    id: 6,
    title: "Dubai Glamour",
    description: "Ultra-modern architecture meets desert adventure",
    location: "Dubai, UAE",
    coordinates: [25.2048, 55.2708],
    date: "April 2024",
    image: "🏙️",
    color: "from-amber-500 to-amber-600",
    story: "Desert safaris at sunset, shopping in the gold souk, and marveling at the Burj Khalifa. Dubai's ambition and luxury created unforgettable moments and endless stories.",
  },
];
