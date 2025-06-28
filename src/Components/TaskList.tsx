import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../Store/store";
import Task from "./Task";
import { useEffect } from "react";
import { fetchTasksFromAPI } from "../Store/Task/TaskSlice";
interface FilterProps {
  status: string;
}
const TaskList: React.FC<FilterProps> = ({ status }) => {
  const Tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchTasksFromAPI());
  }, []);
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-0 sm:m-5">
        <table className="w-full border-collapse text-left bg-white   text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 border text-lg  py-4 font-medium text-gray-900"
              >
                Title
              </th>
              <th
                scope="col"
                className="border px-6 text-lg py-4 font-medium text-gray-900 hidden md:table-cell"
              >
                status
              </th>
              <th
                scope="col"
                className=" border px-6 text-lg py-4 font-medium text-gray-900 hidden md:table-cell"
              >
                Assign
              </th>
              <th
                scope="col"
                className=" border px-6 text-lg py-4 font-medium text-gray-900 hidden md:table-cell"
              >
                Discription
              </th>
              <th
                scope="col"
                className=" border px-6 text-lg py-4 font-medium text-gray-900"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {Tasks.tasks
              .filter((task) =>
                status === "All" ? true : task.Status !== status
              )
              .map((task) => {
                return (
                  <>
                    <Task key={task.Id} task={task}></Task>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaskList;
