import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ShowTransaction() {
  const [transaction, setTransaction] = useState([]);
  
  
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);


const handleDelete = () => {
  axios
    .delete(`${API}/transactions/${index}`)
    .then(() => {
      navigate(`/transactions`);
    })
    .catch((e) => console.error(e));
};

  return (
    <article>
      <div className="details">
      <h3>{transaction.itemName} - from {transaction.from}</h3>
      <h3>{transaction.amount}</h3>
      <h3>On :{transaction.date}</h3>
      </div>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}

export default ShowTransaction;
