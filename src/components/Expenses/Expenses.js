
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const filtered = props.expenses;
  const [filter, setFilter] = useState("ALL");
  //const [selected,setSelected]=useState(props.expenses)
  const setter = (val) => {
    setFilter(val);
  };
  let arr = props.expenses.filter(
    (ele) => ele.date.getFullYear().toString() === filter
  );
  if (filter == "ALL") arr = [...props.expenses];
  // setSelected(arr)
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} transfer={setter} />
      <ExpensesChart expenses={arr}/>
     <ExpensesList data={arr}/>
    </Card>
  );
}
export default Expenses;
