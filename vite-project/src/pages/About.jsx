import React from 'react'
import "../index.css"
import { FaRocket, FaEye, FaUsers } from 'react-icons/fa'

function About() {
  return (
    <div>
        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-white">About Us</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">We are a team of innovative developers dedicated to creating exceptional digital experiences that transform businesses.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                            <div className="relative bg-gray-900 p-8 rounded-2xl h-full transform group-hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                <div className="relative">
                                    <div className="text-blue-400 text-5xl mb-6">
                                        <FaRocket />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 text-white">Our Mission</h4>
                                    <p className="text-gray-300 leading-relaxed">Our mission is to empower businesses through innovative digital solutions. We strive to deliver cutting-edge technology that drives growth.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-1">
                            <div className="relative bg-gray-900 p-8 rounded-2xl h-full transform group-hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                <div className="relative">
                                    <div className="text-purple-400 text-5xl mb-6">
                                        <FaEye />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 text-white">Our Vision</h4>
                                    <p className="text-gray-300 leading-relaxed">We envision a future where technology seamlessly integrates with human experiences, creating solutions that anticipate tomorrow's challenges.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-red-600 p-1">
                            <div className="relative bg-gray-900 p-8 rounded-2xl h-full transform group-hover:-translate-y-2 transition-all duration-300">
                                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                <div className="relative">
                                    <div className="text-pink-400 text-5xl mb-6">
                                        <FaUsers />
                                    </div>
                                    <h4 className="text-2xl font-bold mb-4 text-white">Our Team</h4>
                                    <p className="text-gray-300 leading-relaxed">Our diverse team brings together talented professionals with expertise in various domains, pushing boundaries to deliver exceptional results.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Join Our Team
                        </button>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About