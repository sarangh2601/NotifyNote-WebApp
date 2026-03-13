import React from "react";

const DetailsModal = ({ selectedTask, setViewModal }) => {

  if (!selectedTask) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 p-4">

      <div className="bg-white p-6 md:p-12 rounded-xl shadow-xl w-full max-w-lg text-center">

        <h1 className="text-xl md:text-2xl font-bold mb-3 text-black">
          {selectedTask.title}
        </h1>

        <p className="text-gray-600 mb-6 text-sm md:text-base">
          {selectedTask.details}
        </p>

        <button
          onClick={() => setViewModal(false)}
          className="bg-black text-white font-semibold px-8 md:px-15 py-2 md:py-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black"
        >
          Close
        </button>

      </div>

    </div>
  );
};

export default DetailsModal;