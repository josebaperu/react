import { useSelector } from 'react-redux';

const Todo = () => {
  const todo = useSelector((state) => state.todo);
  const listItems = todo.map((item, i) => (
    <li key={i}>
      {item.name} : {item.age}
    </li>
  ));
  return (
    <div className="Todo">
      <header className="Todo-header"></header>
      <ul>{listItems}</ul>
    </div>
  );
};
export default Todo;
