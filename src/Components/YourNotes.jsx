import React from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";

const YourNotes = ({
  task,
  setTask,
  setViewModal,
  setEditModal,
  setSelectedTask,
  setSelectedIndex
}) => {

  const deleteNotes = (index) => {

    const updatedNotes = task.filter((_, idx) => idx !== index);

    setTask(updatedNotes);

  };

  return (
    <div className="w-full md:w-1/2 p-5 md:p-10 flex flex-col gap-10">

      <h1 className="text-2xl md:text-3xl font-semibold text-center text-white">
        Your Notes
      </h1>

      <div className="flex flex-col gap-5 text-white overflow-y-auto h-[55vh]">

        {task.map((elem, idx) => (

          <div
            key={idx}
            className="flex justify-between items-center px-5 p-4 border rounded-lg"
          >

            <h1>{elem.title}</h1>

            <div className="flex gap-5 text-2xl">

              <FaEye
                className="cursor-pointer text-blue-400"
                onClick={() => {
                  setSelectedTask(elem);
                  setViewModal(true);
                }}
              />

              <FaEdit
                className="cursor-pointer text-green-400"
                onClick={() => {
                  setSelectedTask(elem);
                  setSelectedIndex(idx);
                  setEditModal(true);
                }}
              />

              <FaTrash
                className="cursor-pointer text-red-500"
                onClick={() => deleteNotes(idx)}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default YourNotes;