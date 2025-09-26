import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, ArrowRight, ArrowLeft } from "lucide-react";

const testimonials = [
  {
    name: "Indian Football Academy",
    role: "Head Coach",
    feedback: "WAWU Foundation helped us discover talent in places we never imagined. Their scouting network is exceptional.",
    rating: 5,
    image: "👑",
    location: "Mumbai, India"
  },
  {
    name: "South United FC Academy",
    role: "Academy Director",
    feedback: "We saw a 40% rise in quality players joining from Tier 2 & 3 cities. WAWU's outreach is remarkable.",
    rating: 5,
    image: "⚽",
    location: "Bangalore, India"
  },
  {
    name: "NorthEast Rising FC",
    role: "Technical Director",
    feedback: "They bridged the gap between remote regions and professional coaching. Incredible work!",
    rating: 5,
    image: "🏔️",
    location: "Guwahati, India"
  },
  {
    name: "Kickstart Academy",
    role: "Founder",
    feedback: "Several of our athletes got scholarships and mentorship support through WAWU Foundation.",
    rating: 5,
    image: "⭐",
    location: "Delhi, India"
  },
  {
    name: "Strikerz Football Club",
    role: "Club President",
    feedback: "Their youth development commitment is unmatched in India. True pioneers in football development.",
    rating: 5,
    image: "🔥",
    
  },
  {
    name: "Grassroot Warriors Academy",
    role: "Program Manager",
    feedback: "WAWU's support brought real change to our community. More kids are dreaming big now.",
    rating: 5,
    image: "🌱",
    location: "Pune, India"
  },
];

const Testimonials = () => {
  return (
    <section className="relative py-20  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-cyan-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-green-500/5 to-emerald-400/5 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Testimonials</span>
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-4">
            Trusted by Academies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Hear from football academies across India whose journeys were transformed 
            through our innovative platform and dedicated support system.
          </p>
        </motion.div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          
          
          <motion.div
            className="flex gap-8 py-4"
            animate={{ 
              x: ["0%", "-50%"] 
            }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 lg:w-96"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center">
                      <Quote className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Feedback Text */}
                  <blockquote className="text-slate-700 text-lg leading-relaxed mb-6 font-medium">
                    "{item.feedback}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center text-2xl">
                        {item.image}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{item.name}</div>
                        <div className="text-sm text-slate-600">{item.role}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;