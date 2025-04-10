import React, { useState } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = (e) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/9035140187?text=${whatsappMessage}`, "_blank");
  };

  return (
    <section className="py-16 bg-[#07293d] overflow-x-hidden">
      <div className="container mx-auto px-4 pt-4 max-w-full">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className="text-center text-xl mb-12 text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Have questions or need assistance? We are just a message away.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
          {/* Contact Cards */}
          <div className="space-y-8">
            {[
              {
                icon: "fas fa-globe",
                title: "Visit Us",
                info: "www.wawu.foundation",
              },
              {
                icon: "fas fa-phone-alt",
                title: "Call Us",
                info: "+91 9035140187",
              },
              {
                icon: "fas fa-envelope-open-text",
                title: "Email Us",
                info: "Info@wawu.foundation",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center p-6 rounded-xl shadow-xl bg-white bg-opacity-40 backdrop-blur-md"
              >
                <div className="text-3xl text-[#1d375f] mr-4">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h5 className="font-bold text-lg">{item.title}</h5>
                  <p className="text-lg">{item.info}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 rounded-xl shadow-xl bg-opacity-80 backdrop-blur-md">
              <form onSubmit={sendWhatsAppMessage} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    name="name"
                    className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#1d375f] transition-all"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    name="email"
                    className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#1d375f] transition-all"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="subject"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#1d375f] transition-all"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-[#1d375f] transition-all"
                  rows="4"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></motion.textarea>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#1d375f] text-white text-lg font-semibold hover:bg-[#162d4f] transition-colors"
                >
                  Send via WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
