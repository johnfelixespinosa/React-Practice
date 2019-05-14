import React, { Component } from 'react';
import TaskList from './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TasksPage extends Component {
  
  renderTaskLists() {
    const { tasks } = this.props;
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);
      return <TaskList key={status} status={status} tasks={statusTasks} />
    })
  }


  render() {
    return (
      <div className="users">
        <div className="user-lists">
          {this.renderTaskLists()}
        </div>
      </div>
    )
  }
}

export default TasksPage;