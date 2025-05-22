'use client';

import React, { useState } from 'react';
import Outbrain from '@/components/ads/outbrain';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    let errorMsg = '';
    if (name === 'name' || name === 'message') {
      if (/\d/.test(value)) {
        errorMsg = 'Must not contain numbers';
      }
    }
    if (name === 'email') {
      if (!/^\S+@\S+\.\S+$/.test(value)) {
        errorMsg = 'Enter a valid email';
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('All fields are required!');
      return;
    }

    if (errors.name || errors.email || errors.message) {
      alert('Please fix the errors before submitting.');
      return;
    }

    alert('Submitted Successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="mt-10 text-black bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-emerald-100 text-emerald-900 py-12 text-center shadow">
        <h1 className="text-4xl font-bold mb-4">Contact Merinda</h1>
        <p className="text-lg text-emerald-800 max-w-2xl mx-auto">
          Reach out with questions, feedback, or just to say hello — we’d love to hear from you.
        </p>
      </header>

      {/* Ads */}
      <aside className="max-w-7xl mb-10 mt-20 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-emerald-800">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-emerald-900 mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-emerald-900 mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-emerald-900 mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full p-3 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Contact Info */}
        <section className="bg-white p-8 rounded-lg shadow-md border-l-4 border-emerald-800">
          <h2 className="text-2xl font-semibold text-emerald-800 mb-6">Contact Information</h2>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> contact@Merinda.com
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Support Hours:</strong> Mon - Fri, 9am - 5pm (EST)
          </p>
          <p className="mt-4 text-lg text-gray-700">
            <strong>Location:</strong> 123 Justice Street, Legal City, USA
          </p>
        </section>
      </main>

      {/* Bottom Ads */}
      <aside className="max-w-7xl mt-20 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
    </div>
  );
};

export default Contact;
