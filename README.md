# 📝 Task Management Web Application

A simple **Task Management** static web application built using HTML, CSS,Typescript, and JavaScript. The app allows users to:

- View tasks
- Update task statuses (`Pending`, `InProgress`, `Completed`)
- Manage task state interactively on the client-side
- Load initial data from `https://jsonplaceholder.typicode.com/todos`

---

## 🚀 Features

✅ **Static Frontend**  
Built without a backend — fully runs in the browser using HTML/CSS/JS.

✅ **Fetch Tasks from API**  
Loads initial tasks from `https://jsonplaceholder.typicode.com/todos`.

✅ **Task Status Updates**  
Update tasks with the following statuses:
- `Pending`
- `InProgress`
- `Completed`

✅ **Dynamic UI Updates**  
Tasks can be moved between statuses using buttons or dropdowns.

✅ **Client-Side Only**  
No database — all changes happen in-memory and are lost on refresh (suitable for demos and static hosting).

Demo
---
📝 [Live Demo](https://task-management-frontend-puce-alpha.vercel.app/)
## 🧪 How to Run Locally
```bash
1. Clone the repository or download the `.zip`.
2. run npm install
3. run npm run start
4. go to http://localhost:3000/

```

## 🧱 Technologies Used
- ⚛️ React (with TypeScript)
- 🧰 Redux Toolkit for state management
- 💨 Tailwind CSS for styling
- 🌐 Axios for HTTP requests
- 🟧 HTML5
- 🟦 CSS3
- 🟨 JavaScript (ES6+)
- 🟦 Typescript
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)


## 🧱 Project File Structure
```
type-script-task-management-app/
├── public/
│ └── index.html # Main HTML file
├── src/
│ ├── Components/
│ │ ├── HomePage.tsx
│ │ ├── Task.tsx
│ │ ├── TaskCreateOrUpdate.tsx
│ │ ├── TaskList.tsx
│ │ └── WarningModal.tsx
│ ├── Services/
|   └── axiosservices.js
│ ├── Store/
│ │ └── Task/
│ │ ├── TaskAPI.ts
│ │ ├── TaskSlice.ts
│ │ └── TaskType.tsx
│ ├── Utils/
│ ├── store.ts
│ ├── App.tsx
│ ├── index.tsx
│ └── index.css
├── .babelrc
├── .gitignore
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

```
