export default function Amenities() {
  const amenities = [
    {
      icon: "🏊",
      title: "Swimming Pool",
      description: "Relax in our outdoor swimming pool"
    },
    {
      icon: "🍽️",
      title: "Restaurant",
      description: "Fine dining with local and international cuisine"
    },
    {
      icon: "🚗",
      title: "Free Parking",
      description: "Complimentary parking for all guests"
    },
    {
      icon: "📶",
      title: "Free WiFi",
      description: "High-speed internet throughout the hotel"
    },
    {
      icon: "🏋️",
      title: "Fitness Center",
      description: "State-of-the-art gym equipment"
    },
    {
      icon: "🛎️",
      title: "24/7 Reception",
      description: "Round-the-clock concierge service"
    },
    {
      icon: "🧳",
      title: "Laundry Service",
      description: "Professional laundry and dry cleaning"
    },
    {
      icon: "🚕",
      title: "Airport Shuttle",
      description: "Complimentary airport transfer service"
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Amenities & Facilities</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide world-class amenities to ensure your stay is comfortable and memorable
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center hover:bg-blue-50 transition duration-300 transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
