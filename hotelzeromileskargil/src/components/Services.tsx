export default function Services() {
  const services = [
    {
      title: "Room Service",
      description: "24/7 room service available for your convenience",
      icon: "🛎️"
    },
    {
      title: "Tour Assistance",
      description: "Help with booking local tours and sightseeing",
      icon: "🗺️"
    },
    {
      title: "Business Center",
      description: "Fully equipped business center for corporate guests",
      icon: "💼"
    },
    {
      title: "Spa & Wellness",
      description: "Relax and rejuvenate with our spa services",
      icon: "🧘"
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We go above and beyond to make your stay exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
