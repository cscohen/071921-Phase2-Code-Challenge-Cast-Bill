import React from 'react';
import BillCard from './BillCard';
import BillsCast from './BillsCast';

export default function BillCollection({bills, handleClick}) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
      {bills.map(bill => (
      <BillCard 
        key={bill.id} 
        bill={bill} 
        handleClick={handleClick}
        />
      ))}
      <BillsCast bills={bills.filter((bill) => bill.hired)} />
      </div>
    </div>
  );
}
