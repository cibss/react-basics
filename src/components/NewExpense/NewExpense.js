import { useState } from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [displayForm, setDisplayForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
        setDisplayForm(false);
    };

    const addNewExpenseHandler = () => {
        setDisplayForm(true);
    };

    const cancelAddNewExpenseHandler = () => {
        setDisplayForm(false);
    };


    return (
        <div className='new-expense'>
            {!displayForm && <button onClick={addNewExpenseHandler}>Add New Expense</button>}
            {displayForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAddNewExpenseHandler}/>}
        </div>
    )
}

export default NewExpense;