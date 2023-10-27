import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ tasks, toggleFunction, deleteFunction }) => {
    return (
        <div style={{ padding: '5px 0' }}>
            <h1>Todo List</h1>
            {
                tasks.map((task, index) =>
                    <Todo
                        key={index}
                        done={task.done}
                        title={task.title}
                        deleteFunction={(e) => deleteFunction(e, index)}
                        toggleFunction={(e) => toggleFunction(e, index)}
                    />
                )
            }
        </div>
    )
};

TodoList.propTypes = {
    tasks: PropTypes.array,
    toggleFunction: PropTypes.func,
    deleteFunction: PropTypes.func
}

TodoList.defaultProps = {
    tasks: []
}

export default TodoList;