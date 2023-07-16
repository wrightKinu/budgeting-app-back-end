import { Link } from "react-router-dom";

function Transaction ({transaction, index }) {
  return (
    <tr className="transaction">
      <td>{transaction.date}</td>
    
      <td>
        <Link to={`/transactions/${index}`}>{transaction.itemName}</Link>
      </td>

      <td>{transaction.amount}</td>
    </tr>
  );
}

export default Transaction;