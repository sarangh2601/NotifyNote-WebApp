import React, { useState } from "react";

const AddNotes = ({ task, setTask }) => {

  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const newTask = [...task];
    newTask.push({ title, details });

    setTask(newTask);
  }

  return (
    <div className="w-full md:w-1/2 flex gap-8 flex-col p-5 md:p-10 border-2 border-white rounded-xl">

      <h1 className="text-2xl md:text-3xl text-white font-bold text-center">
        Add Notes
      </h1>

      <form className="flex flex-col gap-6 md:gap-10" onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="Enter Heading"
          className="border border-white px-4 py-4 md:py-6 text-white rounded-xl bg-transparent"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Writing Notes"
          className="border border-white px-4 py-4 h-32 md:h-40 text-white rounded-xl bg-transparent"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="text-black text-lg md:text-2xl font-semibold border border-white rounded-xl py-3 md:py-5 bg-white hover:bg-black hover:text-white hover:shadow-lg">
          Add Notes
        </button>

      </form>

    </div>
  );
};

export default AddNotes;