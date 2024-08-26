import React, { useState } from 'react';

const AnimatedSubscribeBox = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Tutaj logika do wysyłania maila
    console.log('Email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
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
      <section className="bg-cream p-6 rounded-lg animated-box">
        <h2 className="text-2xl font-semibold mb-4 font-heading">Chcesz wiedzieć, kiedy coś się tu pojawi?</h2>
        {isSubmitted ? (
          <p className="text-green-600">Dzięki! Dam Ci znać, kiedy opublikuję pierwszy post :)</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Twój e-mail"
              required
              className="w-full max-w-md px-4 py-2 mb-4 border border-gray-300 font-body rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-body"
            >
              Zapisz się!
            </button>
          </form>
        )}
      </section>
    </div>
  );
};

export default AnimatedSubscribeBox;