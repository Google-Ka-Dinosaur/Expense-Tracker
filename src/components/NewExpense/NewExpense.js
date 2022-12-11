import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const getexp=(exp)=>{
    props.onGet(exp);
  }
  return (
    <div className="new-expense ">
      <ExpenseForm onSave={getexp} show="false"/>
    </div>
  );
}
export default NewExpense;
