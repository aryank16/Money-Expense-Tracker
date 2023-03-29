import React,{useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';

import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

  

    let DUMMY_EXPENSE =[];

    const App = () => {

      const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

      fetch("").then(
        response => {
          return response.json();
        }
      ).then(
        data => {
          console.log();
          setExpenses(data);
        }
      )

      const addExpenseHandler = (expense) => {

        const updatedExpense = [expense, ...expenses];
          
           setExpenses(updatedExpense); 
      };

      return (
    
        <div>
        
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses item ={expenses} />
        
        </div>
        );
      

    }

   
    
    






export default App;