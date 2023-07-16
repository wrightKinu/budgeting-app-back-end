import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function TransactionNew() {

    const navigate = useNavigate();
    
    const [transaction, setTransaction] = useState({
      itemName: "",
      amount: "",
      date: "",
      from: "",
      category:"",
    });

    const [selectedOption, setSelectedOption] = useState('');
  
    const addTransaction = (newTransaction) => {
      axios
      .post(`${API}/transactions`, newTransaction)
      .then(() => {
      navigate(`/transactions`);
      })
      .catch((c) => console.error("catch", c));
     };
  
    const handleTextChange = (event) => {
      setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    

    const handleSubmit = (event) => {
      event.preventDefault();
      addTransaction(transaction);
     };
  
    
    return (
      <div className="new">
        < form onSubmit={handleSubmit}>
          <label htmlFor="itemName"><strong>Item's Name:</strong></label>
          <input
            id="item-name"
            type="text"
            onChange={handleTextChange}
            placeholder=""
            required
            value={transaction.itemName}
          />
          <br/>
          <label htmlFor="amount"><strong>Amount</strong></label>
          <input
            id="amount"
            type="number"
            onChange={handleTextChange}
            placeholder=""
            required
            value={transaction.amount}
          />
           <br/>
          <label htmlFor="date"><strong>Date :</strong></label>
          <textarea
            id="date"
            type="text"
            placeholder=""
            onChange={handleTextChange}
            value={transaction.date}
          />
           <br/>
          <label htmlFor="from"><strong>From</strong></label>
          <input
            id="from"
            type="text"
            value={transaction.from}
            onChange={handleTextChange}
            placeholder=""
          />
           <br/>
        <div>
        <label>
          <input
            type="radio"
            value="income"
            checked={selectedOption === 'income'}
            onChange={handleOptionChange}
          />
          <strong>INCOME</strong>
        </label>
      </div>
      <br/>
      <div>
        <label>
          <input
            type="radio"
            value="expense"
            checked={selectedOption === 'expense'}
            onChange={handleOptionChange}
          />
          <strong>EXPENSE</strong>
        </label>
      </div>
        
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
  
  export default TransactionNew;