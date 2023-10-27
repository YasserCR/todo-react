import { Component } from 'react';
import Proptypes from 'prop-types';
import CheckMark from './CheckMark';
import '../styles/Todo.css'

class Todo extends Component {
    /*state = {
        done: false,
    }*/
    render() {
        return (
            <div
                className={`todo-container ${this.props.done ? 'dim-completed' : ''}`}
            >
                <CheckMark done={this.props.done} />
                <p onClick={e => this.props.toggleFunction(e)} className="list-item">{this.props.title}</p>
                <button
                    className="delete"
                    onClick={e => this.props.deleteFunction(e)}
                >
                    Borrar
                </button>
            </div>
        )
    }

}

Todo.propTypes = {
    done: Proptypes.bool.isRequired,
    title: Proptypes.string.isRequired,
    toggleFunction: Proptypes.func.isRequired,
    deleteFunction: Proptypes.func.isRequired
}

export default Todo;