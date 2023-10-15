import React,{useContext} from 'react'
import { GlobalContext } from './Context/GlobalState'


export const Transaction = ( {transaction }) => {
const {DeleteTransaction} = useContext (GlobalContext);

  const Sign = transaction.amount < 0 ? '-' : '+'; 
  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{Sign}₹{Math.abs(transaction.amount)}</span><button onClick={() => DeleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
  )
}

