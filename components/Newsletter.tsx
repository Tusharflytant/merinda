'use client';

import React, { useState } from 'react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert('Please agree to the terms & conditions.');
      return;
    }
    alert(`Thanks for subscribing with ${email}!`);
    setEmail('');
    setAgreed(false);
  };

  return (
    <section className="max-w-7xl mx-auto bg-gray-50 border border-emerald-200 shadow-lg rounded-2xl px-6 sm:px-12 py-12 mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
            Become a member
          </h2>
          <p className="text-md sm:text-lg text-gray-700">
            Get the latest news right in your inbox. We never spam!
          </p>
        </div>

        {/* Right Side - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="w-full px-5 py-3 rounded-lg border border-emerald-300 text-black focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Subscribe
          </button>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <label htmlFor="terms" className="text-sm text-emerald-700">
              I consent to the{' '}
              <span className="text-emerald-600 underline ">
                terms and conditions
              </span>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
