export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description: "Spacious and elegantly furnished room with modern amenities",
      price: "₹2,500",
      features: ["King Size Bed", "Free WiFi", "TV", "AC", "Private Bathroom"],
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Super Deluxe Room",
      description: "Premium room with stunning views and luxury amenities",
      price: "₹3,500",
      features: ["King Size Bed", "Mountain View", "Free WiFi", "TV", "AC", "Mini Bar"],
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Suite",
      description: "Luxurious suite with separate living area and premium services",
      price: "₹5,000",
      features: ["King Size Bed", "Living Room", "Mountain View", "Free WiFi", "TV", "AC", "Mini Bar", "Room Service"],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop"
    },
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Rooms</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of beautifully designed rooms, each offering comfort and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
            >
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold">
                  {room.price}/night
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <ul className="mb-6 space-y-2">
                  {room.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-900 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block w-full bg-blue-900 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
