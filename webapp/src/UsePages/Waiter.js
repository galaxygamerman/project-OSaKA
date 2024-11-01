import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Waiter.css';

const Waiter = () => {
  const items = [
    { id: 1, name: 'Item 1', MainPrice: 120 },
    { id: 2, name: 'Item 2', MainPrice: 150 },
    { id: 3, name: 'Item 3', MainPrice: 200 },
    { id: 4, name: 'Item 4', MainPrice: 180 },
    { id: 5, name: 'Item 5', MainPrice: 130 },
    { id: 6, name: 'Item 6', MainPrice: 140 },
    { id: 7, name: 'Item 7', MainPrice: 160 },
    { id: 8, name: 'Item 8', MainPrice: 170 },
    { id: 9, name: 'Item 9', MainPrice: 190 },
    { id: 10, name: 'Item 10', MainPrice: 110 },
  ];

  const [Qty, setQty] = useState(Array(items.length).fill(0));
  const [price, setPrice] = useState(Array(items.length).fill(0));


/*Initially tried:
    setQty(prevQty => prevQty+1)
    setPrice(prevPrice =>(Qty*MainPrice))
Did not work as it would alter quantity but the respective price would be diplayed after the queantity event and 
present price displayed with respect to the previous quantity*/



  function decrement(index)  {
    setQty((prevQty) => {
      const newQty = [...prevQty];
      if (newQty[index] > 0) {
        newQty[index] -= 1;
        setPrice((prevPrice) => {
          const newPrice = [...prevPrice];
          newPrice[index] = newQty[index] * items[index].MainPrice;
          return newPrice;
        });
      }
      return newQty;
    });
  };
   
  function increment(index) {
    setQty((prevQty) => {
      const newQty = [...prevQty];
      newQty[index] += 1;
      setPrice((prevPrice) => {
        const newPrice = [...prevPrice];
        newPrice[index] = newQty[index] * items[index].MainPrice;
        return newPrice;
      });
      return newQty;
    });
  };

  return (
  <div className="Waiter-container">
  {items.map((item, index) => (
    <Card className="Card" key={item.id}>
      <Card.Body className="Card-Body">
        <Card.Title className="Card-Title">{item.name}</Card.Title>
        <Card.Text className="Card-Text">
          <div className="m-cost">₹{item.MainPrice}</div>
          <Button onClick={() => decrement(index)} variant="primary" size="sm">
            -
          </Button>
          <span>{Qty[index]}</span>
          <Button onClick={() => increment(index)} variant="secondary" size="sm">
            +
          </Button>
          <span>₹{price[index]}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  ))}
    <Button className="finalise" >
      Finalise
    </Button>
    <div className='Finalised'>
      <h3>Booked</h3>
      <table className='final-table'>
        <tr>
            <th>Token Number</th>
            
            <th>Customer Name</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Anom</td>
 
        </tr>
        <tr>
            <td>1</td>
            <td>Megha</td>

        </tr>
        <tr>
            <td>1</td>
            <td>Subham</td>
        </tr>
    </table>

    </div>
  </div>
  );
};

export default Waiter;