# 👕 Thrifty Clothing - Full Stack E-commerce App

A modern, responsive e-commerce application built with React, Node.js, and MongoDB.

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shaurya1608/Thrifty-Clothing.git
   cd Thrifty-Clothing
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   cd server
   copy env.example .env  # Windows
   # OR
   cp env.example .env    # Mac/Linux
   ```

4. **Configure your .env file** (see [SETUP.md](./SETUP.md) for details)

5. **Run the application**
   ```bash
   npm run dev
   ```

6. **Access the app**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

## 📋 Features

- ✅ **User Authentication** - Register, Login, Logout
- ✅ **Email Verification** - OTP-based email verification
- ✅ **Password Management** - Reset password via email
- ✅ **User Profiles** - Complete user profile management
- ✅ **Modern UI** - Responsive design with Tailwind CSS
- ✅ **MongoDB Integration** - User data storage
- ✅ **JWT Authentication** - Secure token-based auth

## 🛠️ Tech Stack

### Frontend
- **React** - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Nodemailer** - Email sending
- **bcryptjs** - Password hashing

## 📁 Project Structure

```
Thrifty-Clothing/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── contexts/    # React contexts
│   │   └── ...
│   └── public/
├── server/              # Node.js backend
│   ├── routes/          # API routes
│   ├── models/          # Database models
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── ...
└── package.json         # Root package.json
```

## 🔧 Detailed Setup

For complete setup instructions, environment configuration, and troubleshooting, see [SETUP.md](./SETUP.md).

## 🎯 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/verify-email` - Email verification
- `POST /api/auth/forgot-password` - Password reset request
- `POST /api/auth/reset-password` - Password reset
- `POST /api/auth/change-password` - Change password (authenticated)

### User Profile
- `GET /api/user-profile/profile` - Get user profile
- `PUT /api/user-profile/profile` - Update user profile
- `GET /api/user-profile/stats` - Get user statistics

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shaurya** - [GitHub](https://github.com/Shaurya1608)

---

⭐ **Star this repository if you found it helpful!**

