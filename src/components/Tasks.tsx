import React from 'react';

type TaskType = {
  taskId: number
  title: string
  isDone: boolean
}

type TasksPropstType = {
  title: string
  tasks: TaskType[]
}

export const Tasks = (props: TasksPropstType) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <ul>
        <li> hard code tag li </li>
      </ul>
    </div>
  );
};

