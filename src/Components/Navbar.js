import { Link } from "react-router-dom";

let Navbar=()=>{
    return <header>
        <nav>
            <ul>
                <li className="List">
                    <Link to="/">Home</Link>
                </li>
                <li className="List">
                    <Link to="/addnew">AddNewToDo</Link>
                </li>
                <li className="List">
                    <Link to="/importanttodos">ImportantToDos</Link>
                </li>
                <li className="List">
                    <Link to="/missedtodos">MissedToDos</Link>
                </li>
                <li className="List">
                    <Link to="/completedtodos">CompletedToDos</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default Navbar;