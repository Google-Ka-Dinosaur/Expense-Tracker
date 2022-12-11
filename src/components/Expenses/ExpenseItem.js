import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css";
import React,{useState} from 'react';
import Card from '../UI/Card';
function ExpenseItem(props) {
  const[title,setTitle]=useState(props.title);
const func=()=>{
  setTitle("UPDATED");
}
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
      </div>
      <div className="expense-item__price">$ {props.amount}</div>
      <button onClick={func}>Change</button>
    </Card>
  );
}
export default ExpenseItem;
