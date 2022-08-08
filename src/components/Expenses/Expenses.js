import { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import './Expenses.css'

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022');

    const filterYearHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    })
    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={selectedYear} onFilterYear={filterYearHandler}/>
            {
                filteredExpenses.map((expense) => (
                    <ExpenseItem 
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </Card>
    )
}

export default Expenses;