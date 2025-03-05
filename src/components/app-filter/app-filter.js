import './app-filter.css';

const AppFilter = (props) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'moreThan1000', label: 'З/П больше 1000$'},
    ]

    const onUpdateFilter = (name) => {
        props.onUpdateFilter(name)
    }

    return (
        <div className="btn-group">
            {buttonsData.map(({name, label}) => {
                const active = props.filter === name
                const clazz = active ? 'btn-light' : 'btn-outline-light'
                return (
                    <button 
                    type="button" 
                        className={`btn ${clazz}`} 
                        key={name}
                        onClick={() => onUpdateFilter(name)}
                    >
                        {label}
                    </button>
                )
            })}
        </div>
    )
}

export default AppFilter;
