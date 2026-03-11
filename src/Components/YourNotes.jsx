import React from "react";

const YourNotes = ({ task, setShowModal, setSelectedTask }) => {
  return (
    <div className="w-full md:w-1/2 p-5 md:p-10 flex flex-col gap-10">

      <h1 className="text-2xl md:text-3xl font-semibold text-center text-white">
        Your Notes
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white">

        {task.map((elem, idx) => (
          <div
            key={idx}
            onClick={() => {
              setShowModal(true);
              setSelectedTask(elem);
            }}
            className="p-4 border rounded-lg shadow-md shadow-white cursor-pointer hover:text-black hover:bg-white hover:shadow-none text-center"
          >
            <h1 className="text-sm md:text-lg">{elem.title}</h1>
          </div>
        ))}

      </div>

    </div>
  );
};

export default YourNotes;