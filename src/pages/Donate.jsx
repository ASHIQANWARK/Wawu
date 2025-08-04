import React, { useState } from "react";
import { FaUniversity, FaDonate, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(500); // default ₹500
  const user = {
    name: "Donor Name", // Replace with actual user input if needed
    email: "donor@example.com",
  };

  const handlePayment = async () => {
    const orderUrl = "http://localhost:5000/api/payment/create-order";

    try {
      const res = await fetch(orderUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: selectedAmount,
          name: user.name,
          email: user.email,
        }),
      });

      const data = await res.json();

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, // Razorpay key from Vite env
        amount: data.amount,
        currency: data.currency,
        name: "WAWU Foundation",
        description: "Donation",
        image: "/logo192.png",
        order_id: data.id,
        handler: function (response) {
          alert("Thank you for your donation!");
          alert(`Payment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: user.name,
          email: user.email,
        },
        theme: {
          color: "#11c120",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment initiation failed", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-[#f0fdf4]"
    >
      {/* Hero Section overlapping navbar */}
      <section className="bg-[#11698E] text-white py-24 px-4 sm:px-12 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Support the WAWU Foundation</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Join us in shaping the future of India's youth through sports and education.
        </p>
      </section>

      {/* Breadcrumb Below Hero */}
      <div className="bg-white shadow-sm py-3 px-6 relative z-20 -mt-4">
        <nav className="text-sm text-gray-600 max-w-6xl mx-auto">
          <ol className="flex space-x-2 items-center">
            <li>
              <a href="/" className="hover:underline text-[#11698E] font-medium">Home</a>
            </li>
            <li className="text-gray-400">
              <FaChevronRight />
            </li>
            <li className="text-gray-700 font-semibold">Donate</li>
          </ol>
        </nav>
      </div>

      {/* Main Content */}
      <div className="px-4 py-12 sm:px-6 md:px-12">
        {/* Donation Amounts */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-[#11698E] mb-4 text-center">Choose Your Impact</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[500, 1000, 2500, 5000].map((amt, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedAmount(amt)}
                className={`cursor-pointer rounded-xl border p-6 shadow-md transition hover:shadow-lg ${
                  selectedAmount === amt ? "bg-emerald-100 border-emerald-500" : "bg-white"
                }`}
              >
                <p className="text-xl font-semibold text-[#11698E]">₹{amt}</p>
                <p className="text-sm text-gray-500 mt-2">Suggested Amount</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button
              onClick={handlePayment}
              className="bg-[#11698E] hover:bg-[#0D5C75] text-white font-bold px-6 py-3 rounded-xl text-lg"
            >
              Donate ₹{selectedAmount}
            </button>
          </div>
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
      </div>
    </motion.div>
  );
};

export default Donate;
