import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
console.log("Here is the API url:")
console.log(API)


function Transactions() {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => setTransactions(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  console.log(transactions)

  function calculateTotal(transactions) {
    let balance = 0;
    
    for (let i = 0; i < transactions.length; i++) {
      
      if (transactions[i].category === "income") {
        balance += transactions[i].amount;
      }
      else if (transactions[i].category === "expense") {
        balance -= transactions[i].amount;
    }
    
    return balance;
   }
  }  
  const Balance = calculateTotal(transactions);
  console.log(Balance)

   return (
    <div className="Transactions">
        <h1>Bank Account Total:{Balance}</h1>
      <section>
        <table>
    <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Transactions;