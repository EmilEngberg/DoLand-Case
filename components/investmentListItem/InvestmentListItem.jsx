import React from 'react'

export const InvestmentListItem = ({item, deleteInvestmentProp}) => {

    const deleteInvestment = _ => deleteInvestmentProp(item)

  return <div className='itemList'>
        <div className='itemListName'>{item.name}</div>
        <div className='itemListCategory'>{item.category}</div>
        <div className='itemListAmount'>{item.amount}</div>
        <div className='itemListDate'>{item.date}</div>
        <div><input className='deleteButton' type='button' value='Delete' onClick={deleteInvestment} /></div>
    </div>;
};
