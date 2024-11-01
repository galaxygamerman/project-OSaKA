import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Waiter.css';


const Waiter = () => {

  const [Qty,setQty] =useState(0)
  const [price,setPrice]=useState(0)
  const MainPrice=120

/*Initially tried:
    setQty(prevQty => prevQty+1)
    setPrice(prevPrice =>(Qty*MainPrice))
Did not work as it would alter quantity but the respective price would be diplayed after the queantity event and 
present price displayed with respect to the previous quantity*/
  function increment() {
    setQty((prevQty) => {
      const newQty = prevQty + 1;
      setPrice(newQty * MainPrice);
      return newQty;
    });
  }

  function decrement() {
    setQty((prevQty) => {
      if (prevQty) {
        const newQty = prevQty - 1;
        setPrice(newQty * MainPrice);
        return newQty;
      }
      return prevQty;
    });
  }

  return (
    <div>
    <h2>Waiter Page</h2>
      <Card style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title>
            Item Name
          </Card.Title>
          <Card.Text>
            <div className="m-cost">₹{MainPrice}</div>
            <Button onClick={decrement} variant="primary" size="sm">
              -
            </Button>
            <span>{Qty}</span> 
            <Button onClick={increment} variant="secondary" size="sm">
              +
            </Button>
            <span>₹{price}</span>
          </Card.Text>
        </Card.Body>    
      </Card>
    
    </div>
  )
}

export default Waiter