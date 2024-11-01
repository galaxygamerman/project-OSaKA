import React from 'react';

const Chef = () => {
	const queue = [
		{ name: "Classic Burger", items: ["beef patty", "lettuce", "tomato", "cheese", "bun"], price: 12.99 },
		{ name: "Caesar Salad", items: ["romaine lettuce", "croutons", "parmesan cheese", "caesar dressing"], price: 9.99 },
		{ name: "Margherita Pizza", items: ["tomato sauce", "fresh mozzarella", "basil leaves"], price: 14.99 },
		{ name: "Grilled Salmon", items: ["salmon fillet", "lemon butter sauce", "asparagus", "rice pilaf"], price: 18.99 },
		{ name: "Chicken Alfredo Pasta", items: ["fettuccine", "grilled chicken", "alfredo sauce", "parmesan cheese"], price: 15.99 },
		{ name: "Vegetable Stir-Fry", items: ["mixed vegetables", "tofu", "soy sauce", "rice"], price: 13.99 },
		{ name: "BBQ Ribs", items: ["pork ribs", "bbq sauce", "coleslaw", "fries"], price: 19.99 },
		{ name: "Mushroom Risotto", items: ["arborio rice", "mushrooms", "parmesan cheese", "white wine"], price: 16.99 },
		{ name: "Fish and Chips", items: ["battered cod", "french fries", "tartar sauce", "lemon wedge"], price: 14.99 },
		{ name: "Chocolate Lava Cake", items: ["chocolate cake", "molten chocolate center", "vanilla ice cream"], price: 7.99 }
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
									<p className="fw-bold mb-2">Ingredients:</p>
									<ul className="list-group list-group-numbered mb-3">
										{dish.items.map((item, itemIndex) => (
											<li key={itemIndex} className="list-group-item bg-light">
												{item}
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