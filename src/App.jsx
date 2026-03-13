import React, { useState } from "react";
import AddNotes from "./Components/AddNotes";
import YourNotes from "./Components/YourNotes";
import DetailsModal from "./Components/DetailsModal";
import EditNotes from "./Components/EditNotes";

const App = () => {

  const [task, setTask] = useState([]);

  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [selectedTask, setSelectedTask] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <>
      <div className="w-full flex flex-col bg-black p-5 md:p-10 gap-5 min-h-screen">

        <img
          src="/NotifyNotes-Logo.png"
          alt="NotifyNote Logo"
          className="mx-auto h-[80px] md:h-[120px] w-auto"
        />

        <hr className="text-white" />

        <div className="flex flex-col md:flex-row gap-10 w-[85%] mx-auto">

          <AddNotes task={task} setTask={setTask} />

          <YourNotes
            task={task}
            setTask={setTask}
            setSelectedTask={setSelectedTask}
            setSelectedIndex={setSelectedIndex}
            setViewModal={setViewModal}
            setEditModal={setEditModal}
          />

        </div>

      </div>

      {viewModal && selectedTask && (
        <DetailsModal
          selectedTask={selectedTask}
          setViewModal={setViewModal}
        />
      )}

      {editModal && (
        <EditNotes
          selectedIndex={selectedIndex}
          setEditModal={setEditModal}
          task={task}
          setTask={setTask}
        />
      )}
    </>
  );
};

export default App;