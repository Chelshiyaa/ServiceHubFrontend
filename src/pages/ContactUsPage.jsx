import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600/90 text-white py-16 text-center shadow-lg backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white/30 text-3xl mb-4">
            📞
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            We’d love to hear from you. Reach out anytime.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/95 rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-8">
          <p className="text-gray-600 leading-relaxed">
            If you have any questions, feedback, or concerns, please feel free
            to reach out to us. We'll be happy to assist you.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>
              <span className="font-semibold text-blue-700">Email:</span>{" "}
              contact@servicehub.com
            </p>
            <p>
              <span className="font-semibold text-blue-700">Phone:</span>{" "}
              +91 98765 43210
            </p>
            <p>
              <span className="font-semibold text-blue-700">Address:</span>{" "}
              123 Service Lane, City Center, Delhi
            </p>
          </div>
        </div>

        {/* Footer Note */}
        
      </div>
    </div>
  );
};

export default ContactUsPage;
