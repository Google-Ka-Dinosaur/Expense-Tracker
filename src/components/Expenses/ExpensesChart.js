import { getByLabelText } from "@testing-library/react";
import React from "react";
import Chart from "../Chart/Chart";
function ExpensesChart(props)
{
    let data=[
        {label: "Jan",value: 0},
        {label: "Feb",value: 0},
        {label: "Mar",value: 0},
        {label: "Mpr",value: 0},
        {label: "May",value: 0},
        {label: "Jun",value: 0},
        {label: "Jul",value: 0},
        {label: "Aug",value: 0},
        {label: "Sep",value: 0},
        {label: "Oct",value: 0},
        {label: "Nov",value: 0},
        {label: "Dec",value: 0}
    ];
    for(const expense of props.expenses)
    {
        let expensemonth=expense.date.getMonth();
        data[expensemonth].value+=expense.amount;
    }

    return(<Chart data={data}/>);
}
export default ExpensesChart;