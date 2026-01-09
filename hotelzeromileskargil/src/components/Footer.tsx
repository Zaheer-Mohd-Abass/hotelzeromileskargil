export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Hotel Zero Miles Kargil</h3>
            <p className="text-gray-400">
              Your perfect destination for a comfortable and luxurious stay in the heart of Kargil.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-gray-400 hover:text-white transition">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-400 hover:text-white transition">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Kargil, Ladakh, India</li>
              <li>Phone: +91 XXX XXX XXXX</li>
              <li>Email: info@hotelzeromileskargil.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hotel Zero Miles Kargil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
