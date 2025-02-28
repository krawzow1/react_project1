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
                {name: 'John', salary: 1000, increase: true, id: 1},
                {name: 'Jane', salary: 2000, increase: true, id: 2},
                {name: 'Jim', salary: 3000, increase: false, id: 3}
            ]
        }
        this.max_id = 4
    }
   
    addItem = (name, salary) => {
        this.setState(({data}) => {
            return { data: [...data, {name, salary, increase: false, id: this.max_id + 1}]}
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
    render() {
        const lastItemId = this.state.data.length > 0 ? this.state.data.at(-1).id : 0;
        return (
            <div className="app">
                    <AppInfo 
                        lastItemId = {lastItemId}
                    />
        
        
                    <div className="search-panel">
                        <SearchPanel />
                        <AppFilter />
                    </div>
        
                    <EmployersList 
                        data={this.state.data} 
                        onDelete={this.deleteItem}
                       
                    />
                    <EmployersAddForm 
                         onAdd={this.addItem}
                    />
                </div>
        );
    }
    
} 

export default App;
