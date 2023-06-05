import React, { useState } from "react";

/*
An HTML table with 3 cells that contains the following
1. html input with a label that says "# of hours spent on apps / sites per week" 
2. html input with a label that says "Your hourly rate ($) "
2. html disabled input with the value of the previous 2 values  multiplied, times 52 that says "The cost of your usage in 1 year"

It should have 2 values it stores in state
*/
export const AppUsageCostCalculator = () => {
  const [hours, setHours] = useState<number | ''>(7);
  const [rate, setRate] = useState<number | ''>(15);

  const handleHoursChange = e => {
    if (e.target.value === '') {
      setHours('');
    } else {
      setHours(+e.target.value);
    }
  }

  const handleRateChange = e => {
    if (e.target.value === '') {
      setRate('');
    } else {
      setRate(+e.target.value);
    }
  }

  const cost = (hours || 0) * (rate || 0) * 52;
  const formattedCost = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(cost);

 return (
  

    <table>
      <tbody>
        <tr>
          <td>Your weekly hours spent on apps / sites</td>
          <td></td>
          <td>Your hourly rate ($)</td>
          <td></td>
          <td>The cost of your usage in 1 year</td>
        </tr>
        <tr>
          <td>
            <input
              type="number"
              value={hours}
              onChange={handleHoursChange}
            />
          </td>
          <td>×</td>
          <td>
            <input
              type="number"
              value={rate}
              onChange={handleRateChange}
            />
          </td>
          <td>=</td>
          <td>
            <input
              type="text"
              value={formattedCost}
              disabled
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};