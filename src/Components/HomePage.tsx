import React, { useEffect, useState } from "react";
import TaskList from "./TaskList";
import TaskCreateOrUpdate from "./TaskCreateOrUpdate";
import axios from "axios";

const input = {
  Id: 0,
  Title: "",
  Description: "",
  Status: "",
  AssignTo: "",
  Priority: "",
  TaskDate: "",
};

const Homepage = () => {
  const [show, Setshow] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const HandleClose = () => {
    Setshow(!show);
  };
  // Handle status selection
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  return (
    <>
      <div className="p-0 sm:p-8 flex justify-between items-center mb-8">
        <h2 className="text-2xl   font-bold leading-7  text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Task List
        </h2>
        <div className="flex">
          <div className="px-8 text-lg">
            <select
              value={selectedStatus}
              onChange={handleStatusChange}
              className="px-4"
            >
              <option value={"All"}>All</option>
              <option value={"Completed"}>Completed</option>
              <option value={"Pending"}>Pending</option>
              <option value={"InProgress"}>InProgress</option>
            </select>
          </div>
          <div onClick={HandleClose} className="px-8 text-lg">
            Add
          </div>
        </div>
      </div>
      <TaskList status={selectedStatus}></TaskList>{" "}
      <div className="container mx-auto p-8">
        <TaskCreateOrUpdate
          Show={show}
          SetShow={HandleClose}
          InputData={input}
        ></TaskCreateOrUpdate>
      </div>
    </>
  );
};

export default Homepage;
