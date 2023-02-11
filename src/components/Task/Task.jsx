const Task = ({ task, handleDelete }) => {
  return (
    <div>
      <h2>{task}</h2>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Task;
