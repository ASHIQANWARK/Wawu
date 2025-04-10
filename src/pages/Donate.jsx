import { FaUniversity } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-white to-[#f0fdf4] p-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#11698E] mb-6">
          Support Our Mission
        </h1>
        <p className="text-gray-600 text-lg mb-10">
          Your contribution empowers dreams, builds futures, and creates legends.
          Every donation counts — thank you for being a part of this journey.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 font-sans">
          <h2 className="text-2xl font-bold text-[#11698E] mb-2">Bank Transfer Details</h2>
          <div className="space-y-2 text-gray-700">
            <p><FaUniversity className="inline-block mr-2 text-[#11c120]" /> <strong>Bank Name:</strong> Federal Bank</p>
            <p><strong>Account Name:</strong> Wawu Foundation for Sports and Education</p>
            <p><strong>Account Number:</strong> 10810200024800</p>
            <p><strong>IFSC Code:</strong> FDRL0001081</p>
            <p><strong>Branch:</strong> Palakkad</p>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#11c120] hover:bg-[#0D5C75] text-white font-semibold px-8 py-3 rounded-xl transition duration-300">
          I Have Donated 🙌
        </button>
      </div>
    </motion.div>
  );
}

