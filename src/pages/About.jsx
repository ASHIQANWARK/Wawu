import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    amount: "",
    otherAmount: "",
  });

  const donationOptions = ["1500", "3000", "6000", "Other"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAmountSelect = (amount) => {
    setFormData({
      ...formData,
      amount,
      otherAmount: amount === "Other" ? "" : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount =
      formData.amount === "Other" ? formData.otherAmount : formData.amount;

    const message = `*WAWU Donation Form Submission*\n\nName: ${formData.name}\nEmail: ${formData.email}\nMobile: ${formData.mobile}\nDonation Amount: ₹${amount}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919999999999?text=${encodedMessage}`; // Replace with your WhatsApp number
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="px-4 sm:px-6 md:px-12 py-16 sm:py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Left: About Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold">WAWU Foundation</span>, we are shaping the future of football by identifying and nurturing the next generation of stars.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Our dedicated scouting team seeks out raw talent and provides life-changing opportunities through structured training and international exposure.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            We also conduct grassroots tournaments, player development camps, and mentor programs across the country.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold">
            Join us in empowering future champions. Together, we can build a legacy of excellence.
          </p>
        </motion.div>

        {/* Right: Donation Form */}
        <motion.div
          className="border border-gray-300 rounded-xl p-6 shadow-lg bg-gray-50"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Support the Cause</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              onChange={handleChange}
            />

            {/* ➕ New paragraph inside the form */}
            <p className="text-sm text-gray-600 font-medium">
              Your donation helps provide scholarships, gear, nutrition, and coaching to underprivileged young footballers. Every contribution counts in changing lives!
            </p>

            {/* Donation Options */}
            <div>
              <p className="font-semibold mb-2">Select Donation Amount:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {donationOptions.map((amt) => (
                  <button
                    type="button"
                    key={amt}
                    className={`px-3 py-2 border rounded-md text-sm ${
                      formData.amount === amt
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => handleAmountSelect(amt)}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
            </div>

            {formData.amount === "Other" && (
              <input
                type="number"
                name="otherAmount"
                placeholder="Enter Custom Amount"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md mt-2"
                onChange={handleChange}
              />
            )}

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white py-2 rounded-md hover:bg-emerald-600 transition"
            >
              Donate
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
