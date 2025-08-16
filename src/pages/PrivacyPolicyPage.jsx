import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600/90 text-white py-16 text-center shadow-lg backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-white/30 text-3xl mb-4">
            🔒
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Your privacy matters. Here’s how we protect your data at ServiceHub.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white/95 rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 space-y-10">
          
          {/* Section 1 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">ℹ️</span>
              <h2 className="text-2xl font-bold text-blue-700">
                Information We Collect
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We collect information you provide directly to us, such as your
              name, email address, and location when you create an account or
              use our services. Additionally, we may collect usage data to
              improve performance and enhance your experience.
            </p>
          </div>

          <hr className="border-gray-200" />

          {/* Section 2 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🛡️</span>
              <h2 className="text-2xl font-bold text-blue-700">
                How We Use Your Information
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Your information is used to provide and improve our services,
              communicate with you, and personalize your experience. We do not
              sell or share your data with third parties without your explicit
              consent, except when required by law.
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
