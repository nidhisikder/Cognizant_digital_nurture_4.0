import React from 'react';
import '../Stylesheets/mystyle.css';

const calScore = (total,goal)=>{
    return percentToDecimal(total/goal)
}
const percentToDecimal=(decimal)=>{
    return (decimal.toFixed(2)+'%')
}
export const CalculateScore=({Name, School, total, goal})=>(
    <div className="formatStyle">
      <h1 className='heading'>Student Details</h1>
      <div className='Name'>
        <b><span>Name: </span></b>
        <span>{Name}</span>
      </div>
      <div className='School'>
        <b><span>School: </span></b>
        <span>{School}</span>
      </div>
      <div className='Total'>
        <b><span>Total: </span></b>
        <span>{total}</span>
      </div>
      <div className='Score'>
        <b><span>Score: </span></b>
        <span>{calScore(total,goal)}</span>
      </div>
    </div>
);

