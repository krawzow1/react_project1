import './employers-list-item.css';

const EmployListItem = (props) => {

        const {name, salary, onDelete, onToggleProps, increase, rise} = props;
        return (
            <li className={`list-group-item d-flex justify-content-between ${increase ? 'increase' : ''} ${rise ? 'like' : ''}`}>
                <span className='list-group-item-label'
                        onClick={onToggleProps}
                        data-toggle="rise">
                    {name}
                </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProps}
                        data-toggle="increase">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
            </li>
        )
}

export default EmployListItem;
