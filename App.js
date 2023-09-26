import { useState } from 'react';
import './App.css';
import { InvestmentForm } from './components/investmentForm/InvestmentForm';
import { InvestmentListItem } from './components/investmentListItem/InvestmentListItem';

function App() {

  const [investments, setInvestments] = useState([]);

  const addInvestment = investment => {
    setInvestments([...investments, investment])
    alert(`${investment.name} is added succesfully!`)
  }
  
  const deleteInvestment = investment => {
    setInvestments(investments.filter(investmentItem => investmentItem.id !== investment.id))
    alert(`${investment.name} is removed succesfully!`)
  }

  return (
      <div className='App'>
        < InvestmentForm addInvestmentProp = {addInvestment} />
        {
          investments.map(investment => < InvestmentListItem key={investment.id} item={investment} deleteInvestmentProp={deleteInvestment} />)
        }
      </div>
  );
}

export default App;