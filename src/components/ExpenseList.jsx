import { useState } from 'react';

function ExpenseList({ expenses, onDeleteExpense }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(expense => {
    return expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
           expense.category.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Handle sorting
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };
}