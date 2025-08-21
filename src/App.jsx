import React from 'react'
import './App.css'
import { motion } from "framer-motion";

import Banner from './Banner.jsx'
import UberSection from './UberSection.jsx'
import Footer from './Footer.jsx'


const App = () => {
  const features = [
    {
      title: "Ride",
      desc: "Go anywhere with Uber. Request a ride, hop in, and go.",
      img: "../src/ride.jpg", // put your image in src/assets
    },
    {
      title: "Reserve",
      desc: "Reserve your ride in advance so you can relax on the day of your trip.",
      img: "../src/int.jpg",
    },
    {
      title: "Intercity",
      desc: "Get convenient, affordable outstation cabs anytime at your door.",
      img: "../src/rent.jpg",
    },
    {
      title: "Rentals",
      desc: "Request a trip for a block of time and make multiple stops.",
      img: "../src/reserve.jpg",
    },
  ];
  return (
    <>
    
    <Banner/>
      <div className="bg-[#120d1b] text-amber-50">
        <UberSection />
      </div>

      {/* Features Section */}
      <div className="app relative bg-[#120d1b] text-amber-50 overflow-hidden">
        <section className="features-section">
          <motion.h2
            className="features-title "
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Features
          </motion.h2>

          <div className="features-grid">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="feature-text text-black">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                  <motion.button
                    className="btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Details
                  </motion.button>
                </div>
                <div className="feature-image">
                  <img src={feature.img} alt={feature.title} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Spline Embed in bottom-right */}
        <motion.div
          className="absolute bottom-[-9rem] right-0 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] overflow-hidden rounded-tl-2xl"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-W5kZ5MfdSDpSOPtvuXk9MBgS/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="scale-110 origin-bottom-right"
          ></iframe>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="stats-section bg-[#000000] text-white py-12">
        <motion.h3
          className="stats-title text-center text-3xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Achievements
        </motion.h3>
        <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { number: "10,000+ cities", label: "The Global Grid-layer" },
            { number: "20 billion trips", label: "The Billion-Ride Benchmark" },
            { number: "$200 billion", label: "Human Development Index" },
            { number: `"Let's Uber."`, label: "The Urban Evolution Award" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="stat-item text-center p-6 bg-neutral-900 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 12px 30px rgba(255, 215, 0, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="stat-number text-2xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="stat-label text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>



       
    

    </>
  )
}

export default App