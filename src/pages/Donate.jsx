import { FaUniversity, FaDonate, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Donate = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-white to-[#f0fdf4] px-4 py-12 sm:px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6 max-w-6xl mx-auto">
        <ol className="flex space-x-2">
          <li><a href="/" className="hover:underline text-[#11698E] font-medium">Home</a></li>
          <li className="text-gray-400"><FaChevronRight /></li>
          <li className="text-gray-700 font-semibold">Donate</li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#11698E] text-white rounded-xl py-10 px-6 sm:px-12 text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Support the WAWU Foundation
        </h1>
        <p className="text-md sm:text-lg max-w-3xl mx-auto">
          Join us in shaping the future of India's youth through sports and education.
        </p>
      </div>

      {/* Donation Amounts */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-[#11698E] mb-4 text-center">Choose Your Impact</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {["₹500", "₹1000", "₹2500", "₹5000+"].map((amt, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-md py-6 px-4 hover:shadow-lg transition">
              <p className="text-xl font-semibold text-[#11698E]">{amt}</p>
              <p className="text-sm text-gray-500 mt-2">Suggested Amount</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 mt-4 text-sm">
          * You may donate any amount via bank transfer. Every contribution helps.
        </p>
      </div>

      {/* Bank Details */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 font-sans mb-12">
        <h2 className="text-2xl font-bold text-[#11698E] mb-6 flex items-center">
          <FaUniversity className="mr-2 text-[#11c120]" />
          Bank Transfer Details
        </h2>
        <div className="text-gray-700 space-y-2 text-left text-lg">
          <p><strong>Bank Name:</strong> Federal Bank</p>
          <p><strong>Account Name:</strong> WAWU Foundation for Sports and Education</p>
          <p><strong>Account Number:</strong> 10810200024800</p>
          <p><strong>IFSC Code:</strong> FDRL0001081</p>
          <p><strong>Branch:</strong> Palakkad</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-2xl mx-auto px-4 text-center text-gray-800 text-md sm:text-lg">
        <p className="mb-6">
          Once you’ve made your donation, we would love to acknowledge your support with a thank-you certificate.
          Click the button below to share your contribution details with us.
        </p>
        <a
          href="https://wa.me/919207749719?text=Hi%2C%20I%20have%20donated%20to%20WAWU%20Foundation%20and%20would%20like%20to%20share%20my%20details."
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-[#11c120] hover:bg-[#0D5C75] text-white font-bold px-8 py-3 rounded-xl transition duration-300 flex items-center justify-center mx-auto text-lg">
            <FaDonate className="mr-2" /> I Have Donated 🙌
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Donate;
