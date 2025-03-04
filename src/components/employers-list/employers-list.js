import EmployListItem from '../employers-list-item/employers-list-item';
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProps}) => {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <EmployListItem 
                key={id}
                {...itemProps}
                onDelete = {() => onDelete(id)}
                onToggleProps={(e) => onToggleProps(id, e.currentTarget.getAttribute('data-toggle'))}
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