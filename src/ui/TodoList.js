import React from 'react';
import {connect} from "react-redux";
import {addTask, changeIsDone, changeTitle,deleteTask} from "./../redux/reducer"


const TodoList = (props) => {

    let onChangeIsDone = (idTask) => {
        props.changeIsDone(idTask)
    }
    let onChangeTitle = text => {
        props.changeTitle(text)
    }
    let onClickAddTask = () => {
        props.addTask()
    }
    let onClickDeleteTask = (idDelTask) => {
        props.deleteTask(idDelTask)
    }

    let tasks = props.tasks.map(ts => {
        console.log(ts)
        return (<li key={ts.id}><input type="checkbox" defaultChecked={ts.isDone} onClick={ () => {onChangeIsDone(ts.id)} }/>
            {ts.title}
            <button onClick={() => {
                onClickDeleteTask(ts.id)
            }} >X</button>
        </li>)
    })

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input
                    type="text"
                    placeholder="New task name"
                    onChange={(e) => {
                        onChangeTitle(e.currentTarget.value)
                    }}
                    value={props.text}
                />
                <button onClick={() => {
                    onClickAddTask()
                }}>+
                </button>
            </div>
            <ul>
                {tasks}
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        text: state.text
    }
}

const ConnectedTodoList = connect(mapStateToProps, {changeIsDone, changeTitle, addTask,deleteTask})(TodoList);
export default ConnectedTodoList;
