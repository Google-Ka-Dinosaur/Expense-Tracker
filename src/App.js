import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
const[exps,setExps]=useState(expenses)
const getexpense=(expense)=>{
  setExps((prevExps)=>{
    return[expense,...prevExps];
  })
}
  return (
    <div>
      <NewExpense onGet={getexpense} />
     <Expenses expenses={exps}/>
    </div>
  );
}

export default App;
