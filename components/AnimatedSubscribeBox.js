import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const AnimatedSubscribeBox = ({
  apiRoute,
  boxTitle="Chcesz wiedzieć, kiedy pojawi się tu pierwszy tekst?",
  explanation="Nie oznacza to zapisania się do żadnego newslettera, a jedynie jeden mail w momencie, kiedy pojawi się tu pierwszy wpis.",
  confirmationText="Dzięki! Dam Ci znać, kiedy opublikuję pierwszy post :)",
  saving="Zapisywanie...",
  save="Zapisz się!",
  placeholder="Twój email"

}) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setError('Proszę zaznaczyć pole reCAPTCHA');
      return;
    }
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(apiRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, recaptchaToken }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        setError(data.message || 'Wystąpił błąd podczas zapisu');
      }
    } catch (error) {
      setError('Wystąpił błąd podczas komunikacji z serwerem');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <style jsx>{`
        @keyframes rainbow-shadow {
          0%, 100% { box-shadow: 0 0 20px #2db1ba; }
          14% { box-shadow: 0 0 20px #6387cd; }
          28% { box-shadow: 0 0 20px #985de0; }
          42% { box-shadow: 0 0 20px #ac6cb0; }
          56% { box-shadow: 0 0 20px #c07b80; }
          70% { box-shadow: 0 0 20px #d48a50; }
          84% { box-shadow: 0 0 20px #e89820; }
        }
        .animated-box {
          animation: rainbow-shadow 14s linear infinite;
        }
      `}</style>
      <section className="bg-cream p-6 rounded-lg animated-box text-center">
        <h2 className="text-2xl font-semibold mb-4 font-heading">{boxTitle}</h2>
        <p className="text-base font-body p-3">{explanation}</p>
        {isSubmitted ? (
          <p className="text-green-600 font-body">{confirmationText}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={placeholder}
              required
              className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 font-body rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={setRecaptchaToken}
            />
            {error && <p className="text-red-500 mt-2 font-body">{error}</p>}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-body disabled:opacity-50"
            >
              {isLoading ? saving : save}
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default AnimatedSubscribeBox;