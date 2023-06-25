import React, { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("defaultName");
    const [age, setAge] = useState(0);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(age);
        console.log(name);
    }
    return (
        <form onSubmit={handleSubmit}>
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
            <button type="submit" onSubmit={handleSubmit}>SUBMIT</button>
        </form>
    );
}
export default Form;