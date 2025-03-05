import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John', salary: 1000, increase: true, rise: true, id: 1},
                {name: 'Jane', salary: 2000, increase: true, rise: false, id: 2},
                {name: 'Jim', salary: 3000, increase: false, rise: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.max_id = 4
    }
   
    addItem = (name, salary) => {
        this.setState(({data}) => {
            return { data: [...data, {name, salary, increase: false, rise: false, id: this.max_id + 1}]}
        })
        this.max_id++
        console.log(this.max_id)
    }
    deleteItem = (id) => {

        this.setState(({data}) => {
            //const index = data.findIndex(elem => elem.id === id); //также не нарушает иммутабельность
            return {
                data: data.filter(item => item.id !== id)
                
                //data: data.slice(0, index).concat(data.slice(index + 1)) //также не нарушает иммутабельность
            }
        })

    }

    onToggleProps = (id, prop) => {
            this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]}
                    }
                    return item
                })
            }))
    }

    searchEmp = (item, term) => {
        if (term.length === 0) {
            return item
        }

        return item.filter(item => 
            item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        )
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterEncrease = (item, filter) => {
        if (filter === 'all') {
            return item
        }
        switch (filter) {
            case 'rise':
                return item.filter(item => item.rise === true)
            case 'moreThan1000':
                return item.filter(item => item.salary > 1000)
            default:
                return item
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter})
    }



    render() {
        const {data, term, filter} = this.state
        const visibleData = this.searchEmp(data, term)
        const filterData = this.filterEncrease(visibleData, filter)

        const lastItemId = this.state.data.length > 0 ? this.state.data.at(-1).id : 0;
        const totalEmployees = this.state.data.length
        const totalIncrease = this.state.data.filter(i => i.increase).length
        return (
            <div className="app">
                
                    <AppInfo 
                        
                        lastItemId = {lastItemId}
                        totalEmployees = {totalEmployees}
                        totalIncrease = {totalIncrease}
                    />
        
                    <div className="search-panel">
                        <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                        <AppFilter 
                            filter={filter}
                            onUpdateFilter={this.onUpdateFilter}
                        />
                    </div>
        
                    <EmployersList 
                        data={filterData} 
                        onDelete={this.deleteItem}
                        onToggleProps={this.onToggleProps}
                    />
                    <EmployersAddForm 
                         onAdd={this.addItem}
                    />
                </div>
        );
    }
    
} 

export default App;
