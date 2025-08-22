# THRIFTY CLOTHINGS - Full Stack E-commerce Website

A modern, feature-rich e-commerce platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js) for THRIFTY CLOTHINGS.

## 🚀 Features

### User Side (Customer Portal)

#### 🔐 Authentication & Profile
- **Multi-method Registration/Login**
  - Email & Password
  - Phone number with OTP verification
  - Google OAuth integration
  - Facebook OAuth integration
  - Email verification system
  - Password reset functionality

- **Profile Management**
  - Personal information (name, gender, DOB)
  - Multiple saved addresses
  - Wishlist management
  - Notification preferences
  - Profile picture upload

#### 🛍️ Product Browsing
- **Category Navigation**
  - Hierarchical category structure
  - Men → T-shirts, Jeans, Shoes, etc.
  - Women → Tops, Dresses, Jeans, etc.
  - Kids → Boys, Girls, Infants
  - Home & Living

- **Advanced Filtering & Sorting**
  - Price range filters
  - Size and color filters
  - Brand filtering
  - Discount percentage filters
  - Sort by popularity, price (low→high), newest first

- **Smart Search**
  - Real-time search with autocomplete
  - Search suggestions
  - Search history

- **Product Details**
  - High-quality image gallery with zoom
  - Size charts
  - Customer reviews and ratings
  - Q&A section
  - Related products

#### 🛒 Cart & Wishlist
- **Shopping Cart**
  - Add/remove products
  - Quantity management
  - Save for later functionality
  - Auto-apply coupons/offers
  - Real-time price calculation

- **Wishlist**
  - Add/remove from wishlist
  - Move items to cart
  - Share wishlist

#### 💳 Checkout Process
- **Multiple Addresses**
  - Save multiple delivery addresses
  - Address validation
  - Default address selection

- **Delivery Options**
  - Delivery date estimation
  - Express delivery options
  - Free shipping on orders above ₹999

- **Payment Methods**
  - Cash on Delivery (COD)
  - UPI payments
  - Digital wallets
  - Credit/Debit cards
  - EMI options
  - Net banking

- **Promotions**
  - Promo codes
  - Discount coupons
  - First-time user discounts
  - Referral bonuses

#### 📦 Post-Purchase Experience
- **Order Tracking**
  - Real-time order status
  - Tracking updates (placed → shipped → out for delivery → delivered)
  - SMS and email notifications

- **Returns & Exchanges**
  - Easy return process
  - Exchange options
  - Refund processing
  - Return pickup scheduling

- **Notifications**
  - Email notifications
  - SMS alerts
  - Push notifications
  - Order status updates

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Multer** - File uploads
- **Cloudinary** - Image storage
- **Nodemailer** - Email sending
- **Twilio** - SMS services
- **Passport.js** - OAuth authentication
- **Razorpay/Stripe** - Payment gateways

### Frontend
- **React.js** - UI library
- **React Router** - Navigation
- **React Query** - Data fetching
- **React Hook Form** - Form management
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

### Development Tools
- **Nodemon** - Development server
- **Concurrently** - Run multiple commands
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📁 Project Structure

```
thrifty-clothings/
├── server/                 # Backend
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   ├── utils/             # Utility functions
│   └── index.js           # Server entry point
├── client/                # Frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── hooks/         # Custom hooks
│   │   └── utils/         # Utility functions
│   └── public/            # Static files
├── package.json           # Root package.json
└── README.md             # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v5 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thrifty-clothings
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install server dependencies
   cd server && npm install
   
   # Install client dependencies
   cd ../client && npm install
   ```

3. **Environment Setup**
   Create `.env` files in both `server/` and `client/` directories:

   **Server (.env)**
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/thrifty-clothings
   JWT_SECRET=your-super-secret-jwt-key
   CLIENT_URL=http://localhost:3000
   
   # Email (SMTP)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   
   # SMS (Twilio)
   TWILIO_ACCOUNT_SID=your-twilio-account-sid
   TWILIO_AUTH_TOKEN=your-twilio-auth-token
   TWILIO_PHONE_NUMBER=+1234567890
   
   # Cloudinary
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   
   # Payment Gateways
   RAZORPAY_KEY_ID=your-razorpay-key-id
   RAZORPAY_KEY_SECRET=your-razorpay-key-secret
   STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

4. **Start the development servers**
   ```bash
   # From the root directory
   npm run dev
   ```

   This will start both:
   - Backend server on `http://localhost:5000`
   - Frontend development server on `http://localhost:3000`

### Alternative: Run servers separately

```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
cd client && npm start
```

## 📊 Database Models

### User Model
- Personal information (name, email, phone, gender, DOB)
- Authentication (password, OAuth IDs)
- Addresses (multiple saved addresses)
- Preferences (notifications, currency, language)
- Verification status (email, phone)

### Product Model
- Basic info (name, description, brand)
- Categories and subcategories
- Images (multiple with primary image)
- Variants (size, color, stock, price)
- Specifications (material, care, fit, etc.)
- Ratings and reviews
- SEO metadata

### Order Model
- Order details (number, status, dates)
- Items (products, variants, quantities, prices)
- Shipping and billing addresses
- Payment information
- Tracking updates
- Return/refund details

### Cart Model
- User cart with items
- Quantities and pricing
- Coupon applications
- Saved for later items

### Review Model
- Product reviews and ratings
- Helpful votes
- Moderation status
- Verification badges

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-email` - Email verification
- `POST /api/auth/verify-phone` - Phone verification
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Password reset
- `GET /api/auth/me` - Get current user

### Products
- `GET /api/products` - Get products with filters
- `GET /api/products/:id` - Get product details
- `GET /api/products/search` - Search products

### Categories
- `GET /api/categories` - Get categories
- `GET /api/categories/:slug` - Get category with products

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove` - Remove item from cart

### Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/cancel` - Cancel order

### Reviews
- `GET /api/reviews/product/:id` - Get product reviews
- `POST /api/reviews` - Add review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

## 🎨 UI/UX Features

### Design System
- **Color Palette**: Purple and blue gradient theme
- **Typography**: Clean, modern fonts
- **Components**: Reusable, accessible components
- **Responsive**: Mobile-first design approach

### User Experience
- **Loading States**: Skeleton loaders and spinners
- **Error Handling**: User-friendly error messages
- **Animations**: Smooth transitions and micro-interactions
- **Accessibility**: WCAG compliant design
- **Performance**: Optimized images and lazy loading

## 🔒 Security Features

- **Authentication**: JWT-based authentication
- **Authorization**: Role-based access control
- **Input Validation**: Server-side validation
- **Rate Limiting**: API rate limiting
- **CORS**: Cross-origin resource sharing
- **Helmet**: Security headers
- **Password Hashing**: bcrypt encryption
- **File Upload**: Secure file handling

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to platforms like:
   - Heroku
   - Railway
   - DigitalOcean
   - AWS

### Frontend Deployment
1. Build the React app: `npm run build`
2. Deploy to platforms like:
   - Vercel
   - Netlify
   - AWS S3
   - Firebase Hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions:
- Email: support@thriftyclothings.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues]

## 🔮 Future Enhancements

- **AI Recommendations**: Product recommendation engine
- **AR Try-On**: Virtual fitting room
- **Voice Search**: Voice-enabled product search
- **Social Commerce**: Social media integration
- **Loyalty Program**: Points and rewards system
- **Multi-language**: Internationalization support
- **Dark Mode**: Theme switching
- **PWA**: Progressive Web App features

---

**Built with ❤️ for THRIFTY CLOTHINGS**

