import React from 'react'
import Submit from "./Submit"
import Select from "./Select"
import Collapse from "./Collapse"
import TaskForm from "./TaskForm"

const Task = () => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <Select />
        <Submit text="New Task" />
      </div>
      <Collapse title="Cross reference with jane for case #1298777" children={<TaskForm />} />
      <div>
        <p>Test</p>
      </div>
    </>
  )
}

export default Task