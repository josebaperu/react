export const fetchPersons = async () => {
  try {
    return await fetch('http://localhost:8080/api/person').then((data) =>
      data.json(),
    );
  } catch (e) {
    throw new Error(e);
  }
};
