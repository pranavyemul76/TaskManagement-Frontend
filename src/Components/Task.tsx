import React, { useState } from "react";
import { updateTask } from "../Store/Task/TaskSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store/store";
import TaskCreateOrUpdate from "./TaskCreateOrUpdate";
import { TaskType } from "../Store/Task/TaskType";
import WarningModal from "./WarningModal";

interface TaskProps {
  task: TaskType;
}

const Task: React.FC<TaskProps> = ({ task }) => {
  const dispatch = useDispatch<AppDispatch>();
  const [show, Setshow] = useState(false);
  const [Open, SetOpen] = useState(false);
  const HandleDeleteClose = () => {
    SetOpen(!Open);
  };
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(updateTask({ ...task, Status: event.target.value }));
  };
  const HandleClose = () => {
    Setshow(!show);
  };
  enum TaskKey {
    Completed = "Completed",
    InProgress = "InProgress",
    Pending = "Pending",
  }

  const TaskStatus: Record<TaskKey, string> = {
    [TaskKey.Completed]: "bg-green-400",
    [TaskKey.InProgress]: "bg-orange-400",
    [TaskKey.Pending]: "bg-red-400",
  };
  return (
    <>
      <tr className="hover:bg-gray-50 border">
        <th className="flex gap-3 px-6 py-4 font-normal items-center text-gray-900">
          <div className="text-lg ml-3">
            <div className="font-medium text-gray-700">
              <span>&#8226;</span> {task.Title}
            </div>
          </div>
        </th>
        <td className="px-6 py-4 border hidden md:table-cell">
          <select
            value={task.Status}
            onChange={handleChange}
            className={`w-full p-3 border-none text-white  outline-none ${
              TaskStatus[task.Status as keyof typeof TaskStatus]
            } `}
          >
            <option
              className={TaskStatus["Completed" as keyof typeof TaskStatus]}
              value={"Completed"}
            >
              Completed
            </option>
            <option
              className={TaskStatus["Pending" as keyof typeof TaskStatus]}
              value={"Pending"}
            >
              Pending
            </option>
            <option
              className={TaskStatus["InProgress" as keyof typeof TaskStatus]}
              value={"InProgress"}
            >
              Inprogress
            </option>
          </select>
        </td>
        <td className="px-6 py-4 border hidden md:table-cell">
          {task.AssignTo}
        </td>
        <td className="px-6 py-4 text-lg border hidden md:table-cell">
          <div>{task.Description}</div>
        </td>
        <td className="px-6 py-4">
          <div className="flex justify-left w-full justify-between">
            <button x-data="{ tooltip: 'Delete' }" onClick={HandleDeleteClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
            <button x-data="{ tooltip: 'Edite' }" onClick={HandleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
                x-tooltip="tooltip"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </button>
          </div>
        </td>
      </tr>
      {show && (
        <TaskCreateOrUpdate
          Show={show}
          SetShow={HandleClose}
          InputData={task}
        ></TaskCreateOrUpdate>
      )}
      {Open && (
        <WarningModal
          id={task.Id}
          open={Open}
          SetOpen={HandleDeleteClose}
        ></WarningModal>
      )}
    </>
  );
};

export default Task;
