import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPersons } from '../api/personsApi';

const Form = () => {
  const [name, setName] = useState('defaultName');
  const [age, setAge] = useState(0);
  const [persons, setPersons] = useState([]);
  const [initFetch, setInitFetch] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!initFetch) {
      fetchPersons().then((response) =>
        response.json().then((data) => {
          if (data?.error) {
            console.log(`Error fetching persons ${data.status}`);
          } else {
            setPersons(data);
          }
          setInitFetch(true);
        }),
      );
    }
  }, [persons, initFetch]);
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
          }}
        >
          SUBMIT
        </button>
      </form>
      {initFetch && !!persons.length && (
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
