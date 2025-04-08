
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Information = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold">Park Information</h1>
          <p className="mt-4 text-lg text-gray-600">This page is coming soon!</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Information;
