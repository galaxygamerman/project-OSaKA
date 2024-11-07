import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
  const { id } = useParams();
  console.log(id)
  const [order, setOrder] = useState(null);

  async function getJob() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/item/${id}`)
      console.log(response);
      setOrder(response.data)
    } catch (error) {
      console.error("Could not get order:", error)
    }
  }

  useEffect(() => {
    getJob();
    return () => {
    }
  }, [])

  async function changeStatusToDelivered() {
    const newOrderData = {
      name: order.name,
      items: order.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price
      })),
      totalPrice: order.totalPrice,
      status: "Delivered"
    };
    try {
      const response = await axios.put(`${process.env.REACT_APP_BACKEND_URI}/item/${id}`, newOrderData);
      setOrder(newOrderData);
    } catch (error) {
      console.error("Error updating job:" + error);
    }
  }

  if (!order)
    return (<div>Loading...</div>)

  return (
    <div className="container order-details-container">
      <h2>Order Details</h2>
      <div className="order-info">
        <p><strong>Customer Name:</strong> {order.name}</p>
        <p><strong>Order Status:</strong> {order.status}</p>
        <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>
      </div>

      <div className="order-items">
        <h3>Items Ordered</h3>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {order.status !== "Delivered" && (
        <button onClick={() => changeStatusToDelivered()}>
          Mark as Delivered
        </button>
      )}
    </div>
  )
}

export default OrderDetails