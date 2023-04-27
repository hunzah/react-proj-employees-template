import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";
import './app.css';


function App() {

    const data = [
    {name: "John Smith", salary: "50 рублей", increase: false, id: 1},
    {name: "Bob", salary: "90 рублей", increase: true, id: 2},
    {name: "Faso", salary: "30 рублей", increase: false, id: 3},
    ]
    return (
        <div className="app">
            <AppInfo/>
            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <EmployeesList data = {data}/>
            <EmployeesAddForm/>

        </div>
    )
}

export default App;