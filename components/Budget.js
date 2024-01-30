import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const inputBudget = parseInt(event.target.value, 10);
        const totalSpending = expenses.reduce((total, item) => total + item.cost, 0);

        if (inputBudget > 20000) {
            alert("Budget cannot exceed $20,000");
            return;
        }

        if (inputBudget < totalSpending) {
            alert("You cannot reduce the amount ");
            return;
        }

        setNewBudget(inputBudget);
    }

    return (
        <div className='alert alert-secondary' style={{ width: '320px' }}>
            <span> Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};

export default Budget;
