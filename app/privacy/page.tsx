import React from 'react';
import { Metadata } from "next";
import Outbrain from '@/components/ads/outbrain';

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <div className="mt-40 text-gray-900 min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-100 text-blue-900 py-12 text-center">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Learn how LegalClaims collects, uses, and protects your personal information.
        </p>
      </header>

      {/* Top Ads */}
      <aside className="max-w-7xl mb-10 mt-20 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_2"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_2"></div>
      </aside>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        {/* Section Template */}
        {[
          {
            title: "Your Privacy Matters",
            content: [
              "LegalClaims is committed to protecting your privacy. This policy explains what information we collect, how we use it, and the choices you have. We are transparent about our practices and dedicated to safeguarding your data.",
              "By using our website, you agree to the collection and use of information in accordance with this policy."
            ]
          },
          {
            title: "Information We Collect",
            content: [
              "We may collect personal information such as your name, email address, and IP address when you sign up for newsletters, comment on articles, or contact us. We also gather non-personal data through cookies and analytics tools.",
              "This information helps us improve our content, monitor performance, and provide a better user experience."
            ]
          },
          {
            title: "How We Use Your Information",
            list: [
              "To provide and maintain our website and services.",
              "To personalize content and deliver relevant updates.",
              "To respond to your comments or inquiries.",
              "To analyze trends and improve functionality.",
              "To comply with legal obligations."
            ]
          },
          {
            title: "Data Sharing & Third Parties",
            content: [
              "We do not sell or rent your personal information. We may share data with trusted third-party providers for services like analytics, email distribution, or hosting — all bound by confidentiality agreements.",
              "These partners only access data necessary to perform their specific tasks and are obligated not to disclose or use it for other purposes."
            ]
          },
          {
            title: "Your Privacy Rights",
            content: [
              "You have the right to access, update, or delete your personal information. You may also opt out of email communications at any time. To exercise these rights, please contact us directly."
            ]
          },
          {
            title: "Changes to This Policy",
            content: [
              "We may update our Privacy Policy occasionally. Changes will be reflected on this page with a revised effective date. Continued use of our services means you accept the updated terms."
            ]
          }
        ].map(({ title, content, list }, idx) => (
          <section
            key={idx}
            className="bg-white border border-blue-200 p-8 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">{title}</h2>
            {content && content.map((para, i) => (
              <p key={i} className="text-lg text-gray-700 mb-4">{para}</p>
            ))}
            {list && (
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                {list.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}
      </main>

      {/* Bottom Ads */}
      <aside className="max-w-7xl mt-30 mx-auto">
        <div className="OUTBRAIN outbrain-desktop" data-widget-id="AR_1"></div>
        <div className="OUTBRAIN outbrain-mobile" data-widget-id="CRMB_1"></div>
      </aside>

      <Outbrain />
    </div>
  );
};

export default PrivacyPolicy;
