# 🛒 E-Commerce Website

A modern, responsive, and full-stack **E-Commerce Web Application** designed to provide a seamless online shopping experience. The platform includes product browsing, search and filtering, authentication, cart management, order processing, and an admin dashboard for managing products and orders.

## 🚀 Features

### 👤 User Features
- User registration and secure login
- JWT-based authentication
- Browse products by category
- Product search and filtering
- Product details and pricing
- Add products to cart
- Update/remove cart items
- Order placement and order history
- Responsive design for desktop, tablet, and mobile

### 🔐 Authentication & Security
- JWT authentication
- Protected routes
- Password encryption
- Role-based access control
- Secure API communication
- Input validation

### 🛠️ Admin Features
- Admin authentication
- Add, update, and delete products
- Manage product categories
- View registered users
- Manage customer orders
- Update order status
- Monitor overall store activity

## 🏗️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap / Tailwind CSS

### Backend
- Node.js
- Express.js
- REST API
- JWT

### Database
- MongoDB

### Tools & Deployment
- Git
- GitHub
- VS Code
- MongoDB Compass
- Postman
- Vercel / Render

## 📂 Project Structure

```text
e-commerce/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── context/
│       ├── hooks/
│       ├── assets/
│       └── App.jsx
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── utils/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/e-commerce.git
cd e-commerce
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Start the Backend

```bash
npm run dev
```

### 6. Start the Frontend

Open another terminal:

```bash
cd frontend
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 🔄 Application Flow

```text
User
  ↓
Registration / Login
  ↓
Authentication
  ↓
Browse Products
  ↓
Search / Filter
  ↓
Product Details
  ↓
Add to Cart
  ↓
Checkout
  ↓
Place Order
  ↓
Order History
```

### Admin Flow

```text
Admin Login
    ↓
Admin Dashboard
    ↓
Manage Products
    ↓
Manage Users
    ↓
Manage Orders
    ↓
Update Order Status
```

## 🔌 API Modules

| Module | Description |
|---|---|
| Authentication | Register, login and user authentication |
| Users | User profile and account management |
| Products | Create, read, update and delete products |
| Categories | Product category management |
| Cart | Add, update and remove cart items |
| Orders | Create and manage customer orders |
| Admin | Administrative operations |

## 📱 Responsive Design

The application is designed to work across:
- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

## 🔒 Security

The application implements:
- JWT-based authentication
- Password hashing
- Protected API routes
- Role-based authorization
- Environment variables for sensitive configuration
- Server-side validation

## 🌐 Deployment

### Frontend
- Vercel

### Backend
- Render
- AWS EC2

### Database
- MongoDB Atlas

## 📸 Screenshots

Add screenshots of your application here:

```markdown
![Home Page](screenshots/home.png)
![Products](screenshots/products.png)
![Cart](screenshots/cart.png)
![Admin Dashboard](screenshots/admin.png)
```

## 🎯 Future Enhancements

- Online payment integration
- Razorpay / Stripe integration
- Wishlist functionality
- Product reviews and ratings
- Email notifications
- Coupon and discount system
- Advanced analytics dashboard
- Product recommendation system
- AWS cloud deployment
- Docker containerization
- CI/CD pipeline

## 📈 Learning Outcomes

Through this project, I gained practical experience in:
- Full-stack web development
- React application development
- REST API development
- Authentication and authorization
- Database management
- CRUD operations
- Git and GitHub
- API testing with Postman
- Application deployment
- Frontend-backend integration

## 👨‍💻 Author

**Mohammed Abubakkar I**

B.E. Computer Science Engineering (Honors)

**Focus Areas:**  
Java Full Stack Development • MERN Stack • AWS Cloud • DevOps

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
