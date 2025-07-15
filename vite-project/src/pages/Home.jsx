import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const skills = [
    { name: 'React', percentage: 95 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'Node.js', percentage: 85 },
    { name: 'Python', percentage: 88 },
    { name: 'UI/UX Design', percentage: 82 }
  ]

  const testimonials = [
    {
      text: "Exceptional work! The team delivered exactly what we needed on time and within budget.",
      author: "Sarah Johnson",
      position: "CEO, TechCorp"
    },
    {
      text: "Professional, creative, and incredibly skilled. Highly recommend for any web development project.",
      author: "Michael Chen",
      position: "Marketing Director, StartupXYZ"
    },
    {
      text: "Outstanding communication and technical expertise. They exceeded our expectations.",
      author: "Emily Rodriguez",
      position: "Product Manager, InnovateNow"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Animated particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-red-400">Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer & Designer crafting digital experiences that make a difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/portfolio" 
              className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                innovative web solutions. I specialize in modern technologies and love turning 
                complex problems into simple, beautiful designs.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My expertise spans across frontend and backend development, with a keen eye for 
                user experience and performance optimization.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {['React', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL', 'AWS'].map((tech, index) => (
                  <span key={index} className="bg-gray-700 text-red-400 px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-red-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-red-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-gray-400">Custom web applications built with modern technologies and best practices.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Apps</h3>
              <p className="text-gray-400">Responsive mobile applications that work seamlessly across all devices.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <div className="w-16 h-16 bg-red-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">UI/UX Design</h3>
              <p className="text-gray-400">Beautiful, intuitive designs that enhance user experience and engagement.</p>
            </div>
          </div>
          <div className="mt-12">
            <Link 
              to="/services" 
              className="bg-red-400 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-12">What Clients Say</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-700 p-8 rounded-lg">
              <div className="transition-all duration-500">
                <p className="text-gray-300 text-lg mb-6 italic">
                  "{testimonials[currentSlide].text}"
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-red-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {testimonials[currentSlide].author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonials[currentSlide].author}</p>
                    <p className="text-gray-400 text-sm">{testimonials[currentSlide].position}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-red-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-400 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm here to help you create something amazing.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-red-500 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-block"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home