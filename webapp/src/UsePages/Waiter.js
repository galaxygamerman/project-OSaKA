import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
// import axios from 'axios';
import waitericon from '../Assets/waiter.png';
import './Waiter.css';

const Waiter = () => {
  const navigate=useNavigate();
  const items = [
    { id: 1, name: 'Item 1', price: 120 },
    { id: 2, name: 'Item 2', price: 150 },
    { id: 3, name: 'Item 3', price: 200 },
    { id: 4, name: 'Item 4', price: 180 },
    { id: 5, name: 'Item 5', price: 130 },
    { id: 6, name: 'Item 6', price: 140 },
    { id: 7, name: 'Item 7', price: 160 },
    { id: 8, name: 'Item 8', price: 170 },
    { id: 9, name: 'Item 9', price: 190 },
    { id: 10, name: 'Item 10', price: 110 },
  ];

  const [Qty, setQty] = useState(Array(items.length).fill(0));
  const [itemsSelected, setItemsSelected] = useState([]);
  const [price, setPrice] = useState(Array(items.length).fill(0));
  const [finalized, setFinalized] = useState([]);
  const [token, setToken] = useState(1);

/*Initially tried:
    setQty(prevQty => prevQty+1)
    setPrice(prevPrice =>(Qty*price))
Did not work as it would alter quantity but the respective price would be diplayed after the queantity event and 
present price displayed with respect to the previous quantity*/

  function decrement(index) {
    if (Qty[index] <= 0) return;
    setQty(previousQty => {
      previousQty[index] -= 1;
      return previousQty;
    });
    setItemsSelected(oldSelectedItems => {
      const newSelectedItems = [...oldSelectedItems];
      const indexToBeDeleted = newSelectedItems.findIndex(cursor => cursor.name === items[index].name
        && cursor.quantity === (Qty[index] + 1)
        && cursor.price === items[index].price);
      console.log('DeletedIndex: ' + indexToBeDeleted)
      newSelectedItems.splice(indexToBeDeleted, 1);
      if (Qty[index] === 0) return [...newSelectedItems];
      else return [...newSelectedItems, { name: items[index].name, quantity: Qty[index], price: items[index].price }];
    })
  }

  function increment(index) {
    setQty(previousQty => {
      previousQty[index] += 1;
      return previousQty;
    });
    setItemsSelected(oldSelectedItems => {
      const newSelectedItems = [...oldSelectedItems];
      if (Qty[index] === 1)
        return [...newSelectedItems, { name: items[index].name, quantity: Qty[index] }];
      else {
        const indexToBeDeleted = newSelectedItems.findIndex(cursor => cursor.name === items[index].name
          && cursor.quantity === (Qty[index] - 1)
          && cursor.price === items[index].price);
        console.log('DeletedIndex: ' + indexToBeDeleted)
        newSelectedItems.splice(indexToBeDeleted, 1);
        return [...newSelectedItems, { name: items[index].name, quantity: Qty[index], price: items[index].price }];
      }
    })
  }

  function handleFinalize() {
    const name = prompt("Enter Customer Name:");
    if (!name) return;

    const totalPrice = itemsSelected.reduce((accummulator, curr) => accummulator + curr.quantity * curr.price, 0);
    /*The above works, reduce is built in and used to iterate through every element in an array, 
      acc: accummulate, cur: current, 0 initialises acc to 0.*/
     if (totalPrice > 0) {
      /*Used flower brackets within square brackets because I want to group token, name and totalPrice */

      setFinalized((prevOrders) => [
        ...prevOrders,
        { token: token, name, totalPrice: totalPrice }
      ]);
      setToken((prevToken) => prevToken + 1);

      // Reset Qty and price arrays to initial state
      setQty(Array(items.length).fill(0));
      setPrice(Array(items.length).fill(0));
    }
  }

  return (
    <div className='Header'>
      <h1>Waiter Page<img src={waitericon} alt="Waiter icon" className="icon" /></h1>
    <div className="Waiter-container">
      <div className="Finalized">
        <h3>Booked Orders</h3>
        <table className="final-table">
          <thead>
            <tr>
              <th>Token Number</th>
              <th>Customer Name</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {finalized.map((order) => (
              <tr key={order.token}>
                <td>{order.token}</td>
                <td>{order.name}</td>
                <td>₹{order.totalPrice}</td>
                <td>
                  <Button onClick={()=>navigate('/order')}>Status</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="Cards-container">
        {items.map((item, index) => (
          <Card className="Card" key={item.id}>
            <Card.Body className="Card-Body">
              <Card.Title className="Card-Title">{item.name}</Card.Title>
              <Card.Text className="Card-Text">
                <div className="m-cost">₹{item.price}</div>
                <Button className="Dec" onClick={() => decrement(index)} variant="primary" size="sm">
                  -
                </Button>
                <span>{Qty[index]}</span>
                <Button className="Inc" onClick={() => increment(index)} variant="secondary" size="sm">
                  +
                </Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Button className="finalize" onClick={handleFinalize}>
        Finalize
      </Button>
    </div>
    </div>
  );
};

export default Waiter;
