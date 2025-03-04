import { Component } from 'react';

import './app-info.css';

class AppInfo extends Component {
    render() {
        const {lastItemId, totalEmployees, totalIncrease} = this.props;
        return (
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {totalEmployees}</h2>
            <h2>Премию получат: {totalIncrease}</h2>
            <h2>Максимальный id сотрудника (актуальная инфы из обновленного state): {lastItemId}</h2>
        </div>
    )
    }
}

export default AppInfo;
