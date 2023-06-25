import React, {useContext, useState} from 'react';
import {AppContext} from "../context/AppContext";

const Form = () => {
    const [name, setName] = useState("defaultName");
    const [age, setAge] = useState(0);
    const context = useContext(AppContext);
    const {items, setItems } = context;
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
            <button onClick={(e) => {
                e.preventDefault();
                const _items = items;
                _items.push({name, age})
                setItems(Object.create(_items))
            }}>SUBMIT</button>
        </form>
    );
}
export default Form;