// taskSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
 import { TaskType } from '../Task/TaskType';
// Initial state with sample task data
const initialState: TaskType[] = [
    { Id: 87458, Title: "Design Homepage", Description: 'Create a wireframe for the homepage', Status: 'Pending', AssignTo: 'John Doe', Priority: 'High', TaskDate: '2024-09-14' },
    { Id: 87459, Title: "Backend API", Description: 'Develop the API for user login', Status: 'InProgress', AssignTo: 'Jane Smith', Priority: 'Medium', TaskDate: '2024-09-16' },
    { Id: 87460, Title: "Create Database", Description: 'Set up a PostgreSQL database', Status: 'Completed', AssignTo: 'Alex Johnson', Priority: 'High', TaskDate: '2024-09-12' },
    { Id: 87461, Title: "Write Documentation", Description: 'Document API endpoints', Status: 'Pending', AssignTo: 'Emily Davis', Priority: 'Low', TaskDate: '2024-09-20' },
    { Id: 87462, Title: "Fix Login Bug", Description: 'Resolve issue with OAuth login', Status: 'Pending', AssignTo: 'Chris Lee', Priority: 'High', TaskDate: '2024-09-15' },
    { Id: 87463, Title: "Setup CI/CD", Description: 'Configure Jenkins pipeline', Status: 'InProgress', AssignTo: 'Taylor Brown', Priority: 'Medium', TaskDate: '2024-09-18' },
    { Id: 87464, Title: "UI Testing", Description: 'Write Cypress tests for the UI', Status: 'Pending', AssignTo: 'Jordan White', Priority: 'Medium', TaskDate: '2024-09-19' },
    { Id: 87465, Title: "SEO Optimization", Description: 'Improve website SEO performance', Status: 'Completed', AssignTo: 'Morgan Green', Priority: 'Low', TaskDate: '2024-09-13' },
    { Id: 87466, Title: "Setup Dev Environment", Description: 'Configure development environment for new team members', Status: 'Completed', AssignTo: 'Sam Carter', Priority: 'High', TaskDate: '2024-09-11' },
    { Id: 87467, Title: "Content Review", Description: 'Review content for the blog section', Status: 'Pending', AssignTo: 'Jamie Moore', Priority: 'Low', TaskDate: '2024-09-17' }
   
];

// Task slice
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.push(action.payload);
        },
        updateTask: (state, action: PayloadAction<TaskType>) => {
            const index = state.findIndex(task => task.Id === action.payload.Id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        removeTask: (state, action: PayloadAction<number>) => {
            return state.filter(task => task.Id !== action.payload);
        }
    }
});

// Export actions and reducer
export const { addTask, updateTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
