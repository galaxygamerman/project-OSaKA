import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Waiter = () => {
  return (
    <div>
    <h2>Waiter Page</h2>
      <Card style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title>
            Item Name
          </Card.Title>
          <Card.Text>
            TCost <br/>
            <Button variant="primary" size="sm">
              -
            </Button>
            Qty 
            <Button variant="secondary" size="sm">
              +
            </Button>
            ($Relative Cost)
          </Card.Text>
        </Card.Body>    
      </Card>
    
    </div>
  )
}

export default Waiter