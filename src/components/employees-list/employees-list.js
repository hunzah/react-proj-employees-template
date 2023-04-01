import EmployeesListItem from "../employees-list-item/employees-list-item"
import './employees-list.css'

const EmployeesList = ({data}) => {

    const el = data.map(e => {
        return (<EmployeesListItem {...e}/>)
    })
    return (
        <ul className="app-list list-group">
            {el}
        </ul>
    )
}

export default EmployeesList;