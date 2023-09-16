export const fetchPersons = async () => {
  return fetch('http://localhost:8080/api/person');
};
