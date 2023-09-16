const BASE_API_URL = 'http://localhost:8080/api/person';
export const fetchPersons = async () => {
  return fetch(BASE_API_URL);
};
export const newPerson = async (person) => {
  return fetch(BASE_API_URL, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  });
};
