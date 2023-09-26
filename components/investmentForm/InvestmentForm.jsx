import React, { useState } from "react";

export const InvestmentForm = ({ addInvestmentProp }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const addInvestment = (_) => {
    addInvestmentProp({
      id: (new Date).getTime(), 
      name, category, amount, date
    })
    setName('');
    setCategory('');
    setAmount('');
    setDate('');
    }

  return (
    <div className="investmentForm">
      <h1><u>Add New Investment</u></h1>
      <input
        type="text"
        placeholder="Investment name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Investment category"
        value={category}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Amount investet"
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Date of investment"
        value={date}
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />

      <input className="addButton" type="button" value="Add" onClick={addInvestment} />
    </div>
  );
};