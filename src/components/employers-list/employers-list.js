import EmployListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const EmployersList = ({data, onDelete}) => {
    const elements = data.map((item) => {
        return (
            <EmployListItem 
                key={item.id}
                name={item.name} 
                salary={item.salary}
                increase={item.increase}
                onDelete = {() => onDelete(item.id)}
            />
        )
    })
    return (
        <ul className="app-list list-group">
           {elements}
        </ul>
    )
}

export default EmployersList;