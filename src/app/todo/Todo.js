import { useSelector } from 'react-redux';

const Todo = () => {
  const personsState = useSelector((state) => state.persons);
  const getPersons = () =>
    personsState.map((p, k) => (
      <tr key={k}>
        <td>{p.id}</td>
        <td>{p.name}</td>
      </tr>
    ));
  return (
    <div className="Todo">
      <div>
        <div>Persons</div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>
          </thead>

          <tbody>{getPersons()}</tbody>
        </table>
      </div>
    </div>
  );
};
export default Todo;
