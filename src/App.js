import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import logoImage from './pathforge-logo-final.png';
import bannerImage from './pathforge_concept_image.jpg';
import AboutUs from './AboutUs';

const LandingPage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-10 text-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-2/3 pr-0 lg:pr-8 mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-center lg:text-left">
              Empowering Employee Performance, Career, Skills and Learning through AI
            </h1>
            <div className="text-center lg:text-left">
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition duration-300">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/3 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg shadow-lg h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 flex items-center justify-center">
              <img src={bannerImage} alt="Career Growth Illustration" className="w-full h-full object-cover rounded" />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800 text-center lg:text-left">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Career Growth', 'Learning', 'Skills', 'Performance'].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3 text-indigo-600">{feature}</h3>
                <p>{getFeatureDescription(feature)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-indigo-800 text-center lg:text-left">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
            {['Connect', 'Analyze', 'Empower'].map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex-1 text-center">
                  <div className="bg-indigo-100 text-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold mb-2">{step}</h3>
                  <p>{getStepDescription(step)}</p>
                </div>
                {index < 2 && <ChevronRight className="hidden md:block text-indigo-500 transform rotate-90 md:rotate-0" />}
              </React.Fragment>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <header className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center mb-4 sm:mb-0">
            <img src={logoImage} alt="PathForge Logo" className="h-8" />
          </div>
          <nav>
            <ul className="flex space-x-4 sm:space-x-6">
              <li><Link to="/" className="hover:text-indigo-600">Home</Link></li>
              <li><Link to="/products" className="hover:text-indigo-600">Products</Link></li>
              <li><Link to="/about" className="hover:text-indigo-600">About Us</Link></li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/about" component={AboutUs} />
          {/* Add more routes as needed */}
        </Switch>

        <footer className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center md:text-left">
                <img src={logoImage} alt="PathForge Logo" className="h-8 mb-2 mx-auto md:mx-0" />
                <p>&copy; 2024 PathForge. All rights reserved.</p>
              </div>
              <nav>
                <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
                  <li><a href="/privacy" className="hover:text-indigo-200 transition duration-300">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-indigo-200 transition duration-300">Terms of Service</a></li>
                  <li><a href="mailto:vijay@pathforge.ai" className="hover:text-indigo-200 transition duration-300">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

const getFeatureDescription = (feature) => {
  switch (feature) {
    case 'Career Growth': return 'Personalized career advancement opportunities and guidance.';
    case 'Learning': return 'Continuous learning paths tailored to individual needs and goals.';
    case 'Skills': return 'Skill gap analysis and development recommendations.';
    case 'Performance': return 'Real-time performance tracking and improvement strategies.';
    default: return '';
  }
};

const getStepDescription = (step) => {
  switch (step) {
    case 'Connect': return 'Integrate PathForge with your existing systems';
    case 'Analyze': return 'Our AI processes employee data and performance metrics';
    case 'Empower': return 'Receive actionable insights and personalized recommendations';
    default: return '';
  }
};

export default App;