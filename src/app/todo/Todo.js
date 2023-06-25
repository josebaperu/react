import {useContext} from "react";
import {AppContext} from "../context/AppContext";

const Todo = () => {
    const context = useContext(AppContext);
    const {items} = context;
    const listItems = items.map((item, i) =>
        <li key={i}>
            {item.name} : {item.age}
        </li>
    );
    return (
        <div className="Todo">
            <header className="Todo-header">
            </header>
            <ul>{listItems}</ul>
        </div>
    );
}
export default Todo;