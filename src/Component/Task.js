import React, { useState, useEffect } from 'react';
import Submit from "./Submit";
import Select from "./Select";
import Collapse from "./Collapse";
import TaskForm from "./TaskForm";

const Task = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskType, setTaskType] = useState('');
  const [toDoList, setToDoList] = useState([]);
  const taskList = JSON.parse(localStorage.getItem('toDoList'))

  const handleDataChange = (taskId, newData) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === taskId ? { ...task, ...newData } : task
    );

    localStorage.setItem('toDoList', JSON.stringify(updatedTaskList));

    setToDoList(updatedTaskList);
  };


  const handleMenuClick = () => {
    setFormOpen(!formOpen);
  };

  const taskTypeOptions = [
    { 'title': 'Personal Errands', 'value': 'urgent' },
    { 'title': 'Urgent To-Do', 'value': 'personal' }
  ];

  const handleTaskSubmit = () => {
    if (taskTitle.trim() !== '' && taskType.trim() !== '') {
      const currentDate = new Date();
      let id = (Math.random() + 1).toString(36).substring(7);
      const newTask = {
        id: id,
        title: taskTitle,
        type: taskType,
        date: currentDate.toLocaleDateString(),
        description: '',
        completed: false
      };
      const storedToDoList = localStorage.getItem('toDoList');
      if (!storedToDoList) {
        localStorage.setItem('toDoList', JSON.stringify([newTask]));
      } else {
        const parsedToDoList = JSON.parse(storedToDoList);
        parsedToDoList.push(newTask);
        localStorage.setItem('toDoList', JSON.stringify(parsedToDoList));
      }

      setToDoList(prevToDoList => [...prevToDoList, newTask]);
      setFormOpen(false);
      setTaskTitle('');
      setTaskType('');
    }
  };

  const handleDelete = (taskId) => {
    const updatedTaskList = taskList.filter((task) => task.id !== taskId);

    localStorage.setItem('toDoList', JSON.stringify(updatedTaskList));

    setToDoList(updatedTaskList);
  };

  return (
    <>
      <div className="flex justify-between mb-4 relative">
        <Select
          taskType={taskTypeOptions}
          onChange={(e) => setTaskType(e.target.value)}
          value={taskType}
        />
        <Submit text="New Task" onClick={handleMenuClick} />

        {formOpen && (
          <div className="absolute w-1/2 right-0 top-10 bg-white p-2 rounded-sm border z-50">
            <input
              name="task"
              className="border rounded-sm pl-2 mb-2 w-full"
              placeholder="Task title"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />
            <Select
              taskType={taskTypeOptions}
              onChange={(e) => setTaskType(e.target.value)}
              value={taskType}
            />
            <div className="mt-2">
              <Submit text="Submit" onClick={handleTaskSubmit} />
            </div>
          </div>
        )}
      </div>
      {taskList === null ?
        <div>
          <p className="italic text-gray-400 text-xs">No task found</p>
        </div> : taskList
          .filter((item) => !taskType || item.type === taskType)
          .map((list, index) => (
            <div key={index}>
              <Collapse data={list} onDelete={handleDelete} onUpdateTask={handleDataChange} children={<TaskForm onUpdateTask={handleDataChange} data={taskList} dataList={list} />} />
            </div>
          ))}
    </>
  );
};

export default Task;
