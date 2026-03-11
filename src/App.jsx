import React, { useState } from "react";
import AddNotes from "./Components/AddNotes";
import YourNotes from "./Components/YourNotes";
import DetailsModal from "./Components/DetailsModal";

const App = () => {

  const [task, setTask] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <>
      <div className="w-full flex flex-col bg-black p-5 md:p-10 gap-5 min-h-screen">

        <img
          src="/NotifyNotes-Logo.png"
          alt="NotifyNote Logo"
          className="mx-auto h-[80px] md:h-[120px] w-auto"
        />
        <hr className="text-white" />

        <div className="flex flex-col md:flex-row gap-10">

          {/* Add Notes Component */}
          <AddNotes task={task} setTask={setTask} />

          {/* Your Notes Component */}
          <YourNotes
            task={task}
            setShowModal={setShowModal}
            setSelectedTask={setSelectedTask}
          />

        </div>

      </div>

      {/* Modal */}
      <DetailsModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedTask={selectedTask}
      />
    </>
  );
};

export default App;