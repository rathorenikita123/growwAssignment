# InstaPayments - SDE Intern Assignment Round

## Overview
This project is a submission for the SDE Intern Assignment Round, focusing on building a user-friendly and responsive checkout experience using Next.js. The assignment involves implementing the final three steps of the online shopping flow: Checkout Page, Payment Options Page, and Order Confirmation Page.

## Features Implemented

### Checkout Page
- Fetches cart items and payment methods from the provided API.
- Displays an order summary section with the total amount and a call-to-action button to proceed.
- Handles empty product list scenarios.

### Payment Options Page
- Allows users to choose their preferred payment method.
- Renders visually distinct representations for each payment method.
- Implements validation and error handling for seamless user interactions.

### Order Confirmation Page
- Displays order details and a status message indicating the success or failure of the transaction.
- Incorporates randomized order states such as Success, Failure, and Pending.

### Caching
- Implemented local API caching as per necessity.

### Interactive Elements
- Created a responsive and dynamic user interface with smooth transitions and animations.

### Validation
- Ensured proper form validation on each page to handle user input errors.
- Validated payment information according to the selected payment method.


## API Used
- [Merchant Metadata API](https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata): Provides the name, logo, and theme colors of the brand.
- [Order Detail API](https://groww-intern-assignment.vercel.app/v1/api/order-details): Provides the product details and payment details.


## Steps to Run the Code
1. Clone the repository:
```git clone <repository-url>```

2. Install dependencies:
```npm install```

3. Start the development server:
```npm run dev```

4. Open your web browser and navigate to http://localhost:3000 to view the application.

Feel free to explore the live demo and the code repository.


