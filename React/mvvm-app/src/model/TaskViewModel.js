import { useState } from "react";
import useTaskViewModel from "../model/TaskModel";

const TaskViewModel = () => {
  const [taskModel] = useState(() => new TaskModel());
  const addTask = (task) => {
    taskModel.addTask(task);
  };

  const getAllTasks = () => {
    return taskModel.getAllTasks();
  };

  return { addTask, getAllTasks };
};

export default TaskViewModel;