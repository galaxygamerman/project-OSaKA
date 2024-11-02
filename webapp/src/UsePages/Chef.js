import React from 'react';

const Chef = () => {
  const queue = [
    {
      name: "Classic Burger",
      items: [
        { name: "beef patty", quantity: 3.00 },
        { name: "lettuce", quantity: 0.50 },
        { name: "tomato", quantity: 0.75 },
        { name: "cheese", quantity: 1.00 },
        { name: "bun", quantity: 1.00 }
      ],
      price: 12.99
    },
    {
      name: "Caesar Salad",
      items: [
        { name: "romaine lettuce", quantity: 1.00 },
        { name: "croutons", quantity: 0.75 },
        { name: "parmesan cheese", quantity: 1.50 },
        { name: "caesar dressing", quantity: 0.50 }
      ],
      price: 9.99
    },
    {
      name: "Margherita Pizza",
      items: [
        { name: "tomato sauce", quantity: 1.00 },
        { name: "fresh mozzarella", quantity: 2.00 },
        { name: "basil leaves", quantity: 0.50 }
      ],
      price: 14.99
    },
    {
      name: "Grilled Salmon",
      items: [
        { name: "salmon fillet", quantity: 7.00 },
        { name: "lemon butter sauce", quantity: 0.75 },
        { name: "asparagus", quantity: 1.50 },
        { name: "rice pilaf", quantity: 1.50 }
      ],
      price: 18.99
    },
    {
      name: "Chicken Alfredo Pasta",
      items: [
        { name: "fettuccine", quantity: 1.00 },
        { name: "grilled chicken", quantity: 3.00 },
        { name: "alfredo sauce", quantity: 1.50 },
        { name: "parmesan cheese", quantity: 1.50 }
      ],
      price: 15.99
    },
    {
      name: "Vegetable Stir-Fry",
      items: [
        { name: "mixed vegetables", quantity: 2.00 },
        { name: "tofu", quantity: 2.00 },
        { name: "soy sauce", quantity: 0.50 },
        { name: "rice", quantity: 1.00 }
      ],
      price: 13.99
    },
    {
      name: "BBQ Ribs",
      items: [
        { name: "pork ribs", quantity: 8.00 },
        { name: "bbq sauce", quantity: 0.75 },
        { name: "coleslaw", quantity: 1.00 },
        { name: "fries", quantity: 2.00 }
      ],
      price: 19.99
    },
    {
      name: "Mushroom Risotto",
      items: [
        { name: "arborio rice", quantity: 1.50 },
        { name: "mushrooms", quantity: 2.00 },
        { name: "parmesan cheese", quantity: 1.50 },
        { name: "white wine", quantity: 2.00 }
      ],
      price: 16.99
    },
    {
      name: "Fish and Chips",
      items: [
        { name: "battered cod", quantity: 5.00 },
        { name: "french fries", quantity: 2.00 },
        { name: "tartar sauce", quantity: 0.50 },
        { name: "lemon wedge", quantity: 0.25 }
      ],
      price: 14.99
    },
    {
      name: "Chocolate Lava Cake",
      items: [
        { name: "chocolate cake", quantity: 2.50 },
        { name: "molten chocolate center", quantity: 1.00 },
        { name: "vanilla ice cream", quantity: 1.50 }
      ],
      price: 7.99
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 text-primary">Chef's Order Queue</h2>
      <div className="row g-3">
        {queue.map((dish) => (
          <div key={dish.name} className="col-sm-12 col-md-6 col-lg-4 col-xxl-3">
            <div className="card h-100 shadow-sm hover:shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-center mb-3 text-dark fw-bold">
                  {dish.name}
                </h3>
                <div className="card-text">
                  <p className="fw-bold mb-2">Items:</p>
                  <ul className="list-group list-group-numbered mb-3">
                    {dish.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="d-flex list-group-item bg-light justify-content-between">
                        <div className="justify-content-left">{item.name}</div>
                        <div className="justify-content-end">{item.quantity}</div>
                      </li>
                    ))}
                  </ul>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary rounded-pill fs-6">
                      ${dish.price}
                    </span>
                    <button className="btn btn-success btn-sm">
                      Mark as Complete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;