import React from 'react';
 import {connect} from "react-redux";

const TodoList = (props) => {


    return (
        <div>
            <h1>Todo List</h1>
            <div><input /><button>+</button></div>
            <ul>
                <li><input type="checkbox" /> CSS <button>X</button></li>
                <li><input type="checkbox" /> JS <button>X</button></li>
                <li><input type="checkbox" /> HTML <button>X</button></li>
                <li><input type="checkbox" /> REACT JS <button>X</button></li>
            </ul>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        toDoLists: state.toDoLists
    }
}
const mapDispatchToProps=( )=>{

    return {


    }
}
const ConnectedApp = connect(mapStateToProps,mapDispatchToProps)(TodoList);
export default ConnectedApp;
