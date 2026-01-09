export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 text-white mt-16">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          Welcome to Hotel Zero Miles Kargil
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 text-blue-100">
          Experience Luxury and Comfort in the Heart of Kargil
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg"
          >
            Book Your Stay
          </a>
          <a
            href="#rooms"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition transform hover:scale-105"
          >
            Explore Rooms
          </a>
        </div>
      </div>
    </section>
  );
}
