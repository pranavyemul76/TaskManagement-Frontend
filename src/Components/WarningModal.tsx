import React from "react";
import { removeTask  } from '../Store/Task/TaskSlice';
import { useDispatch } from 'react-redux';
import {  AppDispatch } from '../Store/store';
interface IdProps {
   id: number
   open:Boolean,
   SetOpen: ()=> void
}

const WarningModal: React.FC<IdProps> = ({ id,open,SetOpen }) => {
    const dispatch = useDispatch<AppDispatch>();
   const  HandleDelete=()=>{
    dispatch(removeTask(id));
    SetOpen()
    }
   
return <>{
    open&& <div className="fixed  w-full bg-[#ece5e55e] h-screen left-0 top-0">
    <div className="absolute top-28 left-[37%] transform w-1/4  overflow-hidden rounded-lg h-[21%] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Delete Task</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">Are you sure you want to Delete Task? All of your data will be permanently removed</p>
          </div>
        </div>
      </div>
    </div>
    <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button onClick={HandleDelete} type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Delete</button>
      <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={SetOpen}>Cancel</button>
    </div>
    </div></div>
}
</>
}


export default WarningModal;