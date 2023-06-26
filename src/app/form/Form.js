import React, { useState } from 'react';
//import store from "../store/store";
import { useDispatch } from 'react-redux'

const Form = () => {
    const [name, setName] = useState("defaultName");
    const [age, setAge] = useState(0);
    const dispatch = useDispatch()
    return (
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
                /*store.dispatch({
                    type: 'add',
                    item: {name, age}
                });*/
            }
            }>SUBMIT</button>
        </form>
    );
}
export default Form;