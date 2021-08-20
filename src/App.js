import React, {useState, useEffect} from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const allBill = 'http://localhost:8002/bills'


export default function App() {
const [bills, setBills] = useState([]);
  useEffect(() => {
    fetch(allBill)
    .then(resp => resp.json()
    .then((json) => setBills(json)))
  }, []);

  function hireBill(id, hire){
    bills.map((bill) => (bill.id === id ? {...bill, hire: true} : bill))

  }
  function fireBill(id) {
    bills.map((bill) => (bill.id === id ? {...bill, hire: false} : bill))
  }
  
  return (
    <div>
      <BillsCast bills={bills.filter((bill) => bill.hire)} handleClick={fireBill} />
      <BillCollection bills={bills} handleClick={hireBill}/>
    </div>
  );
}
