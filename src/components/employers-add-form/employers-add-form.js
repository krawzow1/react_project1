import { Component } from 'react';
import './employers-add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
        const {name, value} = e.target;
        
        if (name === 'name' && value !== '') {
            if (!/^[a-zA-Zа-яА-Я\s]+$/.test(value)) {
                alert('Имя должно содержать только буквы');
                return;
            }
        }

        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        // e.preventDefault()
        // this.props.onAdd(this.state.name, this.state.salary)

        e.preventDefault();
        const {name, salary} = this.state;
        
        // Проверяем, что имя содержит только буквы и длиннее 2 символов
        if (name.length < 2 || !/^[a-zA-Zа-яА-Я\s]+$/.test(name)) {
            alert('Имя должно содержать минимум 2 буквы и состоять только из букв');
            return;
        }
        if (!salary || salary <= 0) {
            alert('Зарплата должна быть больше 0');
            return;
        }
        
        this.props.onAdd(name, salary);
        this.setState({
            name: '',
            salary: ''
        });
    }

    render() {
        const {name, salary} = this.state;
        return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    className="form-control new-post-label" 
                    placeholder="Как его зовут?"
                    name="name"
                    onChange={this.onValueChange}
                    value={name}
                />
                <input type="text" className="form-control new-post-label" placeholder="Какую должность он занимает?"/>
                <input 
                    type="number" 
                    className="form-control new-post-label" 
                    placeholder="Какой у него оклад?"
                    name="salary"
                    onChange={this.onValueChange}
                    value={salary}
                />
                <button type="submit"
                        className="btn btn-outline-light">
                            Добавить
                </button>
            </form>
        </div>
    )
}}

export default EmployersAddForm;