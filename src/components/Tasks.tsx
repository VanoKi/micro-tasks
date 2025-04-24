type TaskType = {
  taskId: number
  title: string
  isDone: boolean
}

type TasksPropstType = {
  data: {
    title: string
    tasks: TaskType[]
    students:  string[]
  }
}

export const Tasks = (props: TasksPropstType) => {
  return (
    <div>
      <h3>{props.data.title}</h3>
      <ul>
        <li> hard code tag li </li>
      </ul>
    </div>
  );
};

