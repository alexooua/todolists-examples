export const CHANGE_IS_DONE_TASK = 'todolist-example/reducer/CHANGE_IS_DONE_TASK'
export const CHANGE_TITLE = 'todolist-example/reducer/CHANGE_TITLE'
export const ADD_TASK = 'todolist-example/reducer/ADD_TASK'
export const DELETE_TASK = 'todolist-example/reducer/DELETE_TASK'

const initialState = {
    tasks: [
        {id: 1, title: "one", isDone: true}
    ],
    text: ''
}
export const reducer = (state = initialState, action) => {
    let tasks
    switch (action.type) {

        case "CHANGE_IS_DONE_TASK":
            tasks = [...state.tasks.map(ts => {
                if (ts.id === action.idTask) {
                    return {...ts, isDone: !ts.isDone}
                }else {
                    return ts
                }

            })]
            return {...state, tasks: tasks}
        case "CHANGE_TITLE":
            return {...state, text: action.text}
        case "ADD_TASK":
            tasks = {
                id: Math.floor(Math.random() * (1000 - 2) + 2) ,
                title: state.text,
                isDone: true
            }
            return {tasks: [...state.tasks, tasks], text: ''}
        case "DELETE_TASK":
            tasks = [...state.tasks.filter(ts => {
                    return ts.id !== action.idTask
            })]
            return {...state, tasks: tasks}
        default:
            return state;
    }
}

export const changeIsDone = (idTask) => ({type: "CHANGE_IS_DONE_TASK", idTask: idTask})
export const changeTitle = (text) => ({type: "CHANGE_TITLE", text: text})
export const addTask = () => ({type: "ADD_TASK",})
export const deleteTask = (idDelTask) => ({type: "DELETE_TASK",idTask: idDelTask})
