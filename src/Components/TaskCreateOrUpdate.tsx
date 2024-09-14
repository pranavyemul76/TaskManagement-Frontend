import React, { useState } from "react";
import { updateTask, addTask, removeTask } from "../Store/Task/TaskSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store/store";
import { TaskType } from "../Store/Task/TaskType";

interface CustomProps {
  Show: boolean;
  SetShow: (show: boolean) => void;
  InputData: TaskType;
}

const TaskCreateOrUpdate: React.FC<CustomProps> = ({
  Show,
  SetShow,
  InputData,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [Input, SetInput] = useState<TaskType>({
    Id: InputData.Id,
    Title: InputData.Title,
    Description: InputData.Description,
    Status: InputData.Status,
    AssignTo: InputData.AssignTo,
    Priority: InputData.Priority,
    TaskDate: InputData.TaskDate,
  });

  const HandleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    SetInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Input.Id) {
      dispatch(updateTask({ ...Input }));
    } else {
      Input.Id = Date.now();
      dispatch(addTask(Input));
      SetInput({
        Id: 0,
        Title: "",
        Description: "",
        Status: "",
        AssignTo: "",
        Priority: "",
        TaskDate: "",
      });
    }
    // Handle form submission logic here (e.g., API call or state update)
    console.log("Form submitted:", Input);
    SetShow(false);
  };

  return (
    <>
      {Show && (
        <div
          id="simpleModal"
          className="fixed flex inset-0 bg-black bg-opacity-50 items-center justify-center transition-opacity duration-300 ease-out"
        >
          <div
            id="modalContent"
            className="bg-white rounded-lg w-11/12 max-w-lg shadow-lg p-6 relative transition-transform transform scale-95 duration-300 ease-out"
          >
            <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
                Create a Task
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Task Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="Title"
                    value={Input.Title}
                    onChange={HandleInput}
                    placeholder="Enter task title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="Description"
                    value={Input.Description}
                    onChange={HandleInput}
                    placeholder="Describe the task"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="assignee"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Assignee
                  </label>
                  <input
                    type="text"
                    id="assignee"
                    name="AssignTo"
                    value={Input.AssignTo}
                    onChange={HandleInput}
                    placeholder="Assign task to"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="priority"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Priority
                  </label>
                  <select
                    id="priority"
                    name="Priority"
                    value={Input.Priority}
                    onChange={HandleInput}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="status"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    name="Status"
                    value={Input.Status}
                    onChange={HandleInput}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="InProgress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="dueDate"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="TaskDate"
                    value={Input.TaskDate}
                    onChange={HandleInput}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => SetShow(false)}
                    className="bg-[#59aadadc] text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {Input.Id ? "Update Task" : " Create Task"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCreateOrUpdate;
