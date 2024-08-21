import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const AboutUs = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:vijay@pathforge.ai?subject=Joining PathForge Journey&body=Email: ${email}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-indigo-800 text-center">About PathForge</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">Our Mission</h2>
          <p className="text-lg mb-4">
            At PathForge, we are dedicated to empowering employee performance, career growth, skills development, and learning through innovative AI solutions. Our mission is to transform the way organizations nurture and develop their most valuable asset - their people.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">Meet Our Team</h2>
          <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
              <img
                src="/path/to/vijay-profile-picture.jpg"
                alt="Vijay Sankarasubramanian"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Vijay Sankarasubramanian</h3>
              <p className="text-lg mb-4">Founder & CTO</p>
              <div className="flex flex-col space-y-2">
                <a href="mailto:vijay@pathforge.ai" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <Mail className="mr-2" size={20} />
                  vijay@pathforge.ai
                </a>
                <a href="https://www.linkedin.com/in/vjsankar" target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800">
                  <Linkedin className="mr-2" size={20} />
                  LinkedIn Profile
                </a>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-gray-700 text-lg">
                Vijay is the visionary behind PathForge. He brings years of software systems development and his experience working in small startups to large enterprises to revolutionize employee development and organizational growth through AI.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">Join Us on this Journey</h2>
          <p className="text-lg mb-4">
            We're always looking for partners, investors, and collaborators who share our vision for the future of work. If you're excited about the potential of AI in transforming employee development, we'd love to hear from you.
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                JOIN
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;