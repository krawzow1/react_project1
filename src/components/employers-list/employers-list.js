import EmployListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const EmployersList = ({data}) => {
    const elements = data.map((item) => {
        return (
            <EmployListItem 
                key={item.id} 
                name={item.name} 
                salary={item.salary}
                increase={item.increase}
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