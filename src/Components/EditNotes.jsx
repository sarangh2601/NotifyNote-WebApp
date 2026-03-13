import React, { useState } from "react";

const EditNotes = ({ selectedIndex, setEditModal, task, setTask }) => {

    const [updateTitle, setTitle] = useState("");
    const [updateDesc, setDesc] = useState("");

    const handleUpdate = () => {

        const updatedTask = [...task];

        updatedTask[selectedIndex] = {
            title: updateTitle,
            details: updateDesc
        };

        setTask(updatedTask);
        setEditModal(false);
    };

    return (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center px-4">

            <div className="bg-black border border-white p-5 sm:p-6 md:p-8 rounded-lg 
                      w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] 
                      flex flex-col gap-6">

                <h2 className="text-xl sm:text-2xl md:text-3xl text-center text-white font-semibold">
                    Edit Your Note
                </h2>

                <div className="flex flex-col gap-5">

                    <input
                        value={updateTitle}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-white p-3 md:p-4 rounded text-white bg-transparent outline-none"
                        placeholder="Enter Updated Title.."
                    />

                    <textarea
                        value={updateDesc}
                        onChange={(e) => setDesc(e.target.value)}
                        className="border border-white p-3 md:p-4 rounded text-white bg-transparent outline-none 
                       min-h-[120px] md:min-h-[150px]"
                        placeholder="Enter Updating Notes"
                    />

                    <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">

                        <button
                            onClick={handleUpdate}
                            className="bg-white text-black px-4 py-2 rounded hover:bg-black hover:text-white hover:border border-white transition"
                        >
                            Update
                        </button>

                        <button
                            onClick={() => setEditModal(false)}
                            className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
                        >
                            Cancel
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default EditNotes;