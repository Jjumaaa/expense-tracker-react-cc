import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Kununua Omena",
      amount: 8500,
      date: "2025-04-08",
      category: "Food"
    },
    {
      id: 2,
      description: "Kulipa rent",
      amount: 12000,
      date: "2025-04-01",
      category: "Housing"
    },
    {
      id: 3,
      description: "Gas payment",
      amount: 3500,
      date: "2025-04-05",
      category: "Utilities"
    }
  ]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div className="expense-tracker-container">
      <h1>Expense Tracker</h1>
      <div className="expense-tracker-content">
        <ExpenseForm onAddExpense={handleAddExpense} />

        <ExpenseList 
          expenses={expenses} onDeleteExpense={handleDeleteExpense} 
        />
      </div>
    </div>
  )
}

export default App;