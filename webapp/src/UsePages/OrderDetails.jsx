import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Card, Table, Button, Spinner } from 'react-bootstrap';

const OrderDetails = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function getJob() {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URI}/item/${id}`)
        console.log(response);
        setOrder(response.data)
      } catch (error) {
        console.error("Could not get order:", error)
      }
    }
    getJob();
  }, [id]);

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
      await axios.put(`${process.env.REACT_APP_BACKEND_URI}/item/${id}`, newOrderData);
      // Update local state to reflect the change
      setOrder(newOrderData);
    } catch (error) {
      console.error("Error updating job:" + error);
    }
  }

  if (!order) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Card className="shadow-sm">
        <Card.Header as="h2" className="bg-primary text-white">Order Details</Card.Header>
        <Card.Body>
          <div className="row mb-3">
            <div className="col-md-6">
              <Card.Text><strong>Customer Name:</strong> {order.name}</Card.Text>
              <Card.Text>
                <strong>Order Status:</strong>{' '}
                <span className={`badge ${order.status === 'Delivered' ? 'bg-success' : 'bg-warning'}`}>
                  {order.status}
                </span>
              </Card.Text>
              <Card.Text><strong>Total Price:</strong> ₹{order.totalPrice}</Card.Text>
            </div>
          </div>

          <h3 className="mb-3">Items Ordered</h3>
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>₹{item.price}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {order.status !== "Delivered" && (
            <div className="text-center mt-3">
              <Button
                variant="success"
                onClick={changeStatusToDelivered}
                className="px-4"
              >
                Mark as Delivered
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}

export default OrderDetails;