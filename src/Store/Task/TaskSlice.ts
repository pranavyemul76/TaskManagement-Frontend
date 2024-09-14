// taskSlice.ts
import { createSlice,createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
 import { TaskType } from './TaskType';
import { instance } from '../../Services/axiosservices';
import { AxiosResponse } from 'axios';
interface TasksState {
    tasks: TaskType[];
    loading: boolean;
    error: string | null;
}
interface ResponseTask{
    id:number,
    title:string,
    completed:Boolean

}
export const fetchTasksFromAPI = createAsyncThunk<
TaskType[],
void,
{ rejectValue: string }
>(
'tasks/fetchTasksFromAPI',
async (_, thunkAPI) => {
    try {
        const response: AxiosResponse<ResponseTask[]> = await instance.get('https://jsonplaceholder.typicode.com/todos');
        return response.data.map(task => ({
            Id: task.id,
            Title: task.title,
            Description: '', // JSONPlaceholder doesn't provide description, so set it as empty
            Status: task.completed ? 'Completed' : 'Pending',
            AssignTo: 'Unknown', // JSONPlaceholder doesn't provide assignee, so set it as 'Unknown'
            Priority: 'Medium', // You can set a default priority or customize this
            TaskDate: '', // JSONPlaceholder doesn't provide task date, so set it as empty
        }));
    } catch (error) {
            return thunkAPI.rejectWithValue('An unexpected error occurred');
       
    }
}
);
// Initial state with sample task data

const initialState: TasksState = {
    tasks: [
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
    ],
    loading: false,
    error: null,
};
// Task slice
const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TaskType>) => {
            state.tasks.push(action.payload);
        },
        updateTask: (state, action: PayloadAction<TaskType>) => {
            const index = state.tasks.findIndex(task => task.Id === action.payload.Id);
            if (index !== -1) {
                state.tasks[index] = action.payload;
            }
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks= state.tasks.filter(task => task.Id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasksFromAPI.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTasksFromAPI.fulfilled, (state, action: PayloadAction<TaskType[]>) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasksFromAPI.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

// Export actions and reducer
export const { addTask, updateTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
