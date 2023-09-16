import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'

const Form = () => {
    const [name, setName] = useState("defaultName");
    const [age, setAge] = useState(0);
    const [persons, setPersons] = useState([]);
    const dispatch = useDispatch();
    const fetchPersons = async () => (await (await fetch("http://localhost:8080/api/person")).json());

    useEffect(() => {
        if(persons.length === 0) {
            fetchPersons().then( data => {
                setPersons(data);
            });
        }
    },[persons]);
    return (
        <>
        <form>
            <label>name:
                <input
                    type="text"
                    placeholder={name}
                    /*value={name} */
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>age:
                <input
                    type="number"
                    placeholder={age}
                    /*value={age} */
                    onChange={(e) => setAge(e.target.value)}
                />
            </label>
            <button type="submit" onClick={e => {
                e.preventDefault();
                dispatch({
                    type: 'add',
                    item: {name, age}
                });
            }
            }>SUBMIT</button>
        </form>
            {!!persons 
            && 
            <div>
                <div>Persons</div>
                <table>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                    </tr>

                {persons.map((p,k) => {
                    return                     <tr>
                        <td key={k}>{p.id}</td>
                        <td key={k}>{p.name}</td>
                    </tr>
                })}
                </table>
             </div>
            }

        </>
    );
}
export default Form;