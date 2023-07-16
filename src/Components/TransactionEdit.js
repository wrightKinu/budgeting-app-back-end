import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;




function TransactionEdit() {
    let { index } = useParams();
    const navigate = useNavigate();
    
    const [transaction, setTransaction] = useState({
      itemName: "",
      amount: "",
      date: "",
      from: "",
      category:"",
    });

    const [selectedOption, setSelectedOption] = useState('');
  
  
    const handleTextChange = (event) => {
      setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
      };
    
      useEffect(() => {
        axios
          .get(`${API}/transactions/${index}`)
          .then((response) => {
            setTransaction(response.data);
          })
          .catch((e) => console.error(e));
      }, [index]);
    
      const updateTransaction = () => {
        axios
          .put(`${API}/transactions/${index}`, transaction)
          .then((response) => {
            setTransaction(response.data);
            navigate(`/transactions/${index}`);
          })
          .catch((c) => console.warn("catch", c));
      };

    const handleSubmit = (event) => {
      event.preventDefault();
      updateTransaction();
     };
  
    
    return (
      <div className="edit">
        < form onSubmit={handleSubmit}>
          <label htmlFor="itemName"><strong>Item's Name:</strong></label>
          <input
            id="itemName"
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
        <Link to={`/transactions/${index}`}>
            <button>Back</button>
        </Link>
      </div>
    );
  }
  
  export default TransactionEdit;
