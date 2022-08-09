import { useState } from 'react';

import Card from "../UI/Card";
import ExpensesList from './ExpensesList';
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import ExpensesChart from './ExpensesChart';

import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022');
    const filterYearHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });
    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onFilterYear={filterYearHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    )
}

export default Expenses;