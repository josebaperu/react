import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPersons, newPerson } from '../api/personsApi';

const Form = () => {
  const [name, setName] = useState('defaultName');
  const [id, setId] = useState(0);
  const [initFetch, setInitFetch] = useState(false);
  const dispatch = useDispatch();
  const idRef = useRef(null);
  const nameRef = useRef(null);
  useEffect(() => {
    if (!initFetch) {
      setId(null);
      setName(null);
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
          id:
          <input
            ref={idRef}
            type="number"
            placeholder={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>
          name:
          <input
            ref={nameRef}
            type="text"
            placeholder={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            const person = {
              id: id,
              name: name,
            };
            newPerson(person).then((response) =>
              response.json().then((data) => {
                if (data?.error) {
                  console.log(`Error creating person ${data.status}`);
                }
                idRef.current.value = '';
                nameRef.current.value = '';
                setInitFetch(false);
              }),
            );
          }}
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};
export default Form;
