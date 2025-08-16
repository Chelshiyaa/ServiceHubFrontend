import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600/90 text-white py-16 text-center shadow-lg backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white/30 text-3xl mb-4">
            📜
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Please read these terms carefully before using ServiceHub.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/95 rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-10">
          
          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">
              User Responsibilities
            </h2>
            <p className="text-gray-600 leading-relaxed">
              You are responsible for all activity under your account. You agree
              not to use our service for any illegal or unauthorized purpose,
              and you must comply with all applicable laws while using
              ServiceHub.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-700">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ServiceHub is not responsible for the quality of services provided
              by third-party professionals listed on our platform. We act solely
              as a connecting medium between users and professionals and cannot
              be held liable for disputes, losses, or damages arising from such
              interactions.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default TermsOfServicePage;
