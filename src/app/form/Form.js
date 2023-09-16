import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPersons } from '../api/personsApi';

const Form = () => {
  const [name, setName] = useState('defaultName');
  const [age, setAge] = useState(0);
  const [initFetch, setInitFetch] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!initFetch) {
      fetchPersons().then((response) =>
        response.json().then((data) => {
          if (data?.error) {
            console.log(`Error fetching persons ${data.status}`);
          } else {
            dispatch({
              type: 'listUpdate',
              data: data,
            });
          }
          setInitFetch(true);
        }),
      );
    }
  }, [initFetch]);
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
          }}
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};
export default Form;
