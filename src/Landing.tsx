import { useState, useEffect } from "react";

const getCookie = (name: string): string | null => {
  const match = document.cookie.match(
    new RegExp("(^| )" + name + "=([^;]+)")
  );
  return match ? decodeURIComponent(match[2]) : null;
};

const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);

  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
};

// Image paths from public folder
const heroImage = "/hero.png";
const galleryImage1 = "/gallery-1.png";
const galleryImage2 = "/gallery-2.png";
const mainContentImage = "/main-content.png";
const gridImage1 = "/grid-1.png";
const gridImage2 = "/grid-2.png";
const gridImage3 = "/grid-3.png";
const gridImage4 = "/grid-4.png";
const gridImage5 = "/grid-5.png";
const gridImage6 = "/grid-6.png";
const gridImage7 = "/grid-7.png";
const gridImage8 = "/grid-8.png";
const evaLogo = "/EVA-LOGO.png";
type LandingProps = {
  onRegisterClick: () => void;
  onLoginClick: () => void;
};


export default function Landing({
  onRegisterClick,
  onLoginClick,
}: LandingProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isVerified = getCookie("age_verified");
    if (!isVerified) {
      setShowPopup(true);
    }
  }, []);
  
  const acceptAndContinue = () => {
    setCookie("age_verified", "true", 30); // 30 giorni
    setShowPopup(false);
  };
  
  const gridImages = [
    gridImage1, // Zoom in
    gridImage2, // Still dripping
    gridImage3, // Almost naked
    gridImage4, // Caught again
    gridImage5, // Touch me
    gridImage6, // Want more?
    gridImage7, // Getting wetter
    gridImage8, // Say please
  ];

  return (
    <div className="min-h-screen bg-black text-white w-full overflow-x-hidden">

    {showPopup && (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
        <div className="bg-gray-900 text-white p-8 rounded-2xl max-w-md w-full mx-4 text-center border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">
            Are you 18+?
          </h2>

          <p className="text-gray-300 mb-6">
            This website contains adult content. By entering, you confirm you are at least 18 years old.
          </p>

          <div className="flex flex-col gap-4">
            {/* CONTINUA */}
            <button
              onClick={acceptAndContinue}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Yes, continue
            </button>

            {/* BLOCCA */}
            <button
              onClick={() => {
                window.location.href = "https://www.google.com";
              }}
              className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full font-semibold transition-colors"
            >
              No, leave site
            </button>
          </div>
        </div>
      </div>
    )}

      {/* Header */}
      <header className="w-full bg-black border-b border-gray-800">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              {evaLogo ? (
                <img src={evaLogo} alt="Eva Logo" className="h-16 w-auto" />
              ) : (
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-sm">🔥</span>
                </div>
              )}
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <button
                onClick={onLoginClick}
                className="text-gray-300 hover:text-white transition-colors px-4 py-2 rounded-lg border border-gray-600 hover:border-red-500"
              >
                Login
              </button>
              <button
                onClick={onRegisterClick}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Sign Up
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-800 w-full">
            <div className="w-full px-4 py-4 space-y-4">
              <button
                onClick={onLoginClick}
                className="block w-full text-left text-gray-300 hover:text-white"
              >
                Login
              </button>
              <button
                onClick={onRegisterClick}
                className="block w-full text-left text-gray-300 hover:text-white"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 mb-8">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-6 flex items-center justify-center">
              {heroImage ? (
                <img
                  src={heroImage}
                  alt="Eva Hero"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="text-gray-400 text-lg font-medium">
                  Hero Image Placeholder
                </div>
              )}
            </div>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              I'm ready... let's get started.
              </h1>
              <button
                onClick={onRegisterClick}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
              >
                CHAT NOW FOR FREE
              </button>
              <p className="mt-3 text-sm text-red-300">
              10 free minutes after sign up
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Want to See More Section */}
      <section className="relative bg-gradient-to-br from-red-900/20 to-black py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Gallery */}
            <div className="lg:w-1/2">
              <div className="flex space-x-4 overflow-x-auto pb-4">
                <div className="flex-shrink-0">
                  <div className="w-64 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-2 flex items-center justify-center">
                    {galleryImage1 ? (
                      <img
                        src={galleryImage1}
                        alt="Wanna see what’s underneath?"
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="text-gray-400 font-medium">
                        Wanna see what’s underneath?
                      </div>
                    )}
                  </div>
                  <p className="text-white text-center">Wanna see what’s underneath?</p>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-64 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-2 flex items-center justify-center relative">
                    {galleryImage2 ? (
                      <img
                        src={galleryImage2}
                        alt="It wouldn’t take much..."
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    ) : (
                      <div className="text-gray-400 font-medium">
                        It wouldn’t take much...
                      </div>
                    )}
                    <div className="hidden absolute right-2 top-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-black"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-center">It wouldn’t take much...</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Want more?
              </h2>
              <p className="text-xl text-red-300 mb-4">
              That depends on you... and what you say.
              </p>
              <p className="text-gray-300 mb-8 text-lg">
              Go on — unlock me. There’s so much more waiting for you.
              </p>
              <button
                onClick={onRegisterClick}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
              >
                CHAT NOW FOR FREE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Image */}
      <section className="py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
              {mainContentImage ? (
                <img
                  src={mainContentImage}
                  alt="Eva Main Content"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="text-gray-400 text-lg font-medium">
                  Main Content Image Placeholder
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* See More of ME Section */}
      <section className="relative bg-gradient-to-br from-red-900/20 to-black py-16 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            I've got so much more for you
            </h2>
            <p className="text-xl text-red-300">
            I need your words… strong and sure.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              "Look at me",
              "Come closer",
              "Still here",
              "You feel that?",
              "Stay longer",
              "Getting deeper",
              "You like this?",
              "Almost there",
            ].map((title, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-3 flex items-center justify-center overflow-hidden">
                  {gridImages[index] ? (
                    <img
                      src={gridImages[index]}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-gray-400 font-medium text-center px-2">
                      {title}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-white font-medium mb-1">{title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={onRegisterClick}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
            >
              CHAT NOW FOR FREE
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {evaLogo ? (
                <img src={evaLogo} alt="Eva Logo" className="h-12 w-auto" />
              ) : (
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">🔥</span>
                </div>
              )}
            </div>
            <div className="text-gray-400 text-sm text-center md:text-left">
              <a href="/terms-of-service" target="_blank"  className="text-gray-400 hover:text-white">Terms of Service | </a>
              <a href="/privacy-policy" target="_blank"  className="text-gray-400 hover:text-white">Privacy Policy | </a>
              <a href="/cookie-policy" target="_blank"  className="text-gray-400 hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-400 text-sm text-center md:text-center">
              Karma Corporation st. Machova 439/27 PRAGUE , VAT CZ08638781 | <a href="mailto:support@karmacorporation.cz" target="_blank"  className="text-gray-400 hover:text-white">support@karmacorporation.cz</a> |
              18+ disclaimer Secure payment / SSL <img src="cc-logo.png" alt="payment logo" className="inline-block h-6 ml-2 align-middle" />
          </div>
        </div>
      </footer>
    </div>
  );
}
