import React from 'react';
import { FaCode, FaMobile, FaPalette, FaRocket, FaSearch, FaServer } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Custom websites built with modern technologies and best practices.",
      color: "from-blue-400 to-indigo-500"
    },
    {
      icon: <FaMobile />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      color: "from-emerald-400 to-cyan-500"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "User-centered design that creates engaging digital experiences.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <FaSearch />,
      title: "SEO Services",
      description: "Optimize your digital presence for better visibility and reach.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: <FaServer />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services.",
      color: "from-teal-400 to-blue-500"
    },
    {
      icon: <FaRocket />,
      title: "Digital Marketing",
      description: "Strategic marketing solutions to grow your business online.",
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our comprehensive range of digital solutions designed to help your business thrive in the modern world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition duration-300`}></div>
              <div className="relative bg-gray-800 rounded-2xl p-8 h-full transform group-hover:-translate-y-2 transition duration-300">
                <div className={`text-4xl mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                <div className="mt-6">
                  <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${service.color} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;