import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [EnteredTitle,SetEnteredTitle]=useState("");
  const [EnteredDate,SetEnteredDate]=useState("");
  const [EnteredAmount,SetEnteredAmount]=useState("");
  const [show,setShow]=useState("false");
 const TitleChangeHandler=(event)=>{
    SetEnteredTitle(event.target.value);
  }
  const AmountChangeHandler=(event)=>{
    SetEnteredAmount(event.target.value);
  }
  const DateChangeHandler=(event)=>{
    SetEnteredDate(event.target.value);
  }
  const SubmissionHandler=(event)=>{
    event.preventDefault();
    const expenseobj={
      id:(Math.random()*100).toString(),
      title:EnteredTitle,
      amount:+EnteredAmount,
      date:new Date(EnteredDate)
    }
    SetEnteredAmount("");
    SetEnteredTitle("");
    SetEnteredDate("");
    props.onSave(expenseobj);
  }
  const showStart=()=>{
    setShow("true");
  }
  const showStop=()=>{
    setShow("false");
  }
  if(show=="true")
  {
  return (
    <form onSubmit={SubmissionHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input value={EnteredTitle} onChange={TitleChangeHandler} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input value={EnteredDate} onChange={DateChangeHandler} type="date" max="2022-12-31" min="2019-01-01" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input value={EnteredAmount} onChange={AmountChangeHandler} type="number" min="0.01" step="0.01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">ADD EXPENSE</button>
        <button onClick={showStop}>cancel</button>
      </div>
    </form>
  );
  }
  else
  {
    return(<div><button onClick={showStart}>add expense</button></div>)
  }
}
export default ExpenseForm;
