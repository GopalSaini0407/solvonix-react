import { useState } from "react";
import { motion } from "framer-motion";
import { FaFileAlt } from "react-icons/fa";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        exit={{ opacity: 0, y: -50 }} 
        className="bg-white p-6 rounded-2xl shadow-xl w-[600px] relative"
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-5xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-center text-gray-800">{title}</h2>
        <div className="mt-4 text-gray-700">{children}</div>
       
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <button
        className="px-4 py-2 ms-3 mb-1 text-[#EE3E77] font-semibold rounded-lg shadow-lg border-[#EE3E77] border transition-all"
        onClick={() => setIsModalOpen(true)}
      >
        Apply Now
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Apply for this Job">
      <form className="space-y-5">
        <div className="flex input-boxes">
        <div className="border border-gray-300 border-l-0 pe-3 py-3">
          <label className="block text-gray-600 text-sm font-medium lg:text-1xl mb-1 text-left">Name <sup className="text-red-600 text-2xl">*</sup></label>
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full  py-2 border-none focus:outline-none text-gray-400"
          />
        </div>
        <div className="border  border-gray-300 border-r-0 border-l-0 ps-3 py-3">
          <label className="block text-gray-600 text-sm font-medium mb-1 text-left">Email <sup className="text-red-600 text-2xl">*</sup> </label>
          <input 
            type="email"
            placeholder="Email" 
            className="w-full  py-2 border-none focus:outline-none text-gray-400"
          />
        </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <span className="text-4xl"><FaFileAlt /></span>
            <h3>Drag and drop CV Document here or
            browse for a document to upload</h3>
            <input type="file" placeholder="file"/>
        </div>
        <button
            className="px-4 py-2 w-full bg-pink-500 text-white rounded-lg hover:bg-gray-600"
          >
            Apply
          </button>
      </form>


      </Modal>
    </div>
  );
}
