"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert("Thank you for your booking request! We will contact you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      checkIn: "",
      checkOut: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact & Booking</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us or book your stay directly
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">Kargil, Ladakh, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+91 XXX XXX XXXX</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">info@hotelzeromileskargil.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Book Your Stay</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                >
                  <option value="">Select guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5+">5+ Guests</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requests
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  placeholder="Any special requests or requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition transform hover:scale-105"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
