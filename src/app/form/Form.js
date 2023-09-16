import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPersons } from '../api/personsApi';

const Form = () => {
  const [name, setName] = useState('defaultName');
  const [age, setAge] = useState(0);
  const [persons, setPersons] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (persons.length === 0) {
      fetchPersons().then((data) => {
        setPersons(data);
      });
    }
  }, [persons]);
  return (
    <>
      <form>
        <label>
          name:
          <input
            type="text"
            placeholder={name}
            /*value={name} */
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          age:
          <input
            type="number"
            placeholder={age}
            /*value={age} */
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dispatch({
              type: 'add',
              item: { name, age },
            });
          }}>
          SUBMIT
        </button>
      </form>
      {!!persons && (
        <div>
          <div>Persons</div>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
              </tr>
            </thead>

            <tbody>
              {persons.map((p, k) => {
                return (
                  <tr key={k}>
                    <td>{p.id}</td>
                    <td>{p.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default Form;
