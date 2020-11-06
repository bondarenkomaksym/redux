import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Task from "../../Task";
import CreateTaskInput from "./CreateTaskInput";
import {
  createTask,
  // fetchTasksList, 
  updateTask,
  deleteTask
} from "../tasksGateway";

import * as tasksActions from '../tasks.actions';
import { tasksListSelector } from '../tasks.selectors';


class TasksList extends React.Component {

  componentDidMount() {
    this.props.getTasksList();
    // this.fetchTasks();
  }


  //метод принимает текст из инпута(CreateTaskInput)
  onCreate = text => {
    //1. создаём задачу
    //2. постим на сервер
    //3. fetch list from server
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());

    // и полученные свойства добавляем в существующий массив задач
    //   const { tasks } = this.state;
    //   const updatedTasks = tasks.concat(newTask);
    //   this.setState({ tasks: updatedTasks });
  }

  //метод зачёркивает задачу
  handleTaskStatusChange = (id) => {
    //1. найти задачу в списке
    //2. создать обновлённый список
    //3. обновить список на сервере
    //4. Fetch updated list
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTasks = {
      text,
      done: !done,
    };

    updateTask(id, updatedTasks)
      .then(() => this.fetchTasks());
  }


  //метод удаления задачи
  handleTaskDelete = (id) => {
    //1. фильтруем задачи
    //2. обновляем список задач
    deleteTask(id)
      .then(() => this.fetchTasks());

    // const updatedTasks = this.state.tasks
    //   .filter(task => task.id !== id);
    // //результат метода сохраняем в состояние
    // this.setState({ tasks: updatedTasks });
  }


  render() {

    const sortedList = this.props.tasks
      .slice()
      .sort((a, b) => a.done - b.done);

    return (
      <main className="todo-list" >
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}

        </ul>
      </main>
    )
  }
}

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapState = state => {
  return {
    tasks: tasksListSelector(state)
  }
}

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
}

export default connect(mapState, mapDispatch)(TasksList);