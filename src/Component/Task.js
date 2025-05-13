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
  const [taskTitleError, setTaskTitleError] = useState(false);

  const taskTypeOptions = [
    { title: 'All', value: '' },
    { title: 'Personal Errands', value: 'personal' },
    { title: 'Urgent To-Do', value: 'urgent' }
  ];

  useEffect(() => {
    const storedToDoList = localStorage.getItem('toDoList');
    if (storedToDoList) {
      setToDoList(JSON.parse(storedToDoList));
    }
  }, []);

  const handleMenuClick = () => {
    setFormOpen(!formOpen);
  };

  const handleTaskSubmit = () => {
    const isTitleEmpty = taskTitle.trim() === '';
    setTaskTitleError(isTitleEmpty);
    if (isTitleEmpty) return;

    const currentDate = new Date();
    const id = (Math.random() + 1).toString(36).substring(7);
    const newTask = {
      id,
      title: taskTitle,
      type: taskType,
      date: currentDate.toLocaleDateString(),
      description: '',
      completed: false
    };

    const updatedList = [...toDoList, newTask];
    setToDoList(updatedList);
    localStorage.setItem('toDoList', JSON.stringify(updatedList));

    // Reset form
    setFormOpen(false);
    setTaskTitle('');
    setTaskType('');
    setTaskTitleError(false);
  };

  const handleDelete = (taskId) => {
    const updatedTaskList = toDoList.filter((task) => task.id !== taskId);
    setToDoList(updatedTaskList);
    localStorage.setItem('toDoList', JSON.stringify(updatedTaskList));
  };

  const handleDataChange = (taskId, newData) => {
    const updatedTaskList = toDoList.map((task) =>
      task.id === taskId ? { ...task, ...newData } : task
    );
    setToDoList(updatedTaskList);
    localStorage.setItem('toDoList', JSON.stringify(updatedTaskList));
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
            {taskTitleError && (
              <p className="text-xs text-red-500">Task title is required</p>
            )}
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

      {toDoList.length === 0 ? (
        <p className="italic text-gray-400 text-xs">No task found</p>
      ) : (
        toDoList
          .filter((item) => !taskType || item.type === taskType)
          .map((list) => (
            <div key={list.id}>
              <Collapse
                data={list}
                onDelete={handleDelete}
                onUpdateTask={handleDataChange}
              >
                <TaskForm
                  onUpdateTask={handleDataChange}
                  data={toDoList}
                  dataList={list}
                />
              </Collapse>
            </div>
          ))
      )}
    </>
  );
};

export default Task;
