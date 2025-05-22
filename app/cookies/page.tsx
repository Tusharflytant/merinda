import React from "react";
import { Metadata } from "next";
import Outbrain from "@/components/ads/outbrain";

export const metadata: Metadata = {
  title: "Cookies Policy",
};

const CookiesPolicy = () => {
  return (
    <div className="mt-40 text-gray-900 min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-50 text-blue-900 py-12 text-center">
        <h1 className="text-4xl font-semibold mb-4">Cookies Policy</h1>
        <p className="text-lg text-blue-700 max-w-2xl mx-auto">
          Learn how LegalClaims uses cookies and similar technologies to enhance your browsing experience.
        </p>
      </header>

      {/* Outbrain Ad - Top */}
      <aside className="max-w-7xl mt-20 mb-10 mx-auto px-4">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Section Template */}
        {[
          {
            title: "What Are Cookies?",
            content: [
              "Cookies are small data files stored on your device when you visit websites. They help improve functionality, analyze usage, and deliver personalized content. LegalClaims uses cookies to enhance performance and tailor your experience.",
              "Some cookies are essential for the operation of our website, while others help us understand user behavior and improve our content."
            ]
          },
          {
            title: "How We Use Cookies",
            content: [
              <ul className="list-disc list-inside space-y-3 text-blue-800" key="cookies-list">
                <li><strong>Essential Cookies:</strong> Enable core functionality like security, network management, and accessibility.</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our site so we can improve user experience.</li>
                <li><strong>Performance Cookies:</strong> Monitor site performance and gather data on technical issues.</li>
                <li><strong>Advertising Cookies:</strong> Deliver relevant advertisements and track campaign effectiveness across platforms.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences for a more personalized experience.</li>
              </ul>
            ]
          },
          {
            title: "Managing Cookies",
            content: [
              "You can control and manage cookies through your browser settings. Most browsers allow you to reject or delete cookies at any time. However, please note that disabling cookies may impact the functionality of some parts of our site.",
              "You can also opt out of certain third-party cookies used for advertising through industry opt-out tools."
            ]
          },
          {
            title: "Third-Party Cookies",
            content: [
              "Some cookies may be placed by third-party services we use, such as analytics platforms or advertising networks. We do not control these cookies and encourage you to review their privacy policies."
            ]
          },
          {
            title: "Changes to This Policy",
            content: [
              "LegalClaims may update this Cookies Policy from time to time. We encourage you to review this page periodically for any changes. Your continued use of our site signifies your agreement to the updated terms."
            ]
          }
        ].map((section, index) => (
          <section
            key={index}
            className="bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-100"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              {section.title}
            </h2>
            {section.content.map((para, i) =>
              typeof para === "string" ? (
                <p key={i} className="text-lg text-blue-800 mb-4">
                  {para}
                </p>
              ) : (
                para
              )
            )}
          </section>
        ))}
      </main>

      {/* Outbrain Ad - Bottom */}
      <aside className="max-w-7xl mt-20 mx-auto px-4">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
    </div>
  );
};

export default CookiesPolicy;
