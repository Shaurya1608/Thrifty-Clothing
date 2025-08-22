# 🚀 Setup Guide - Thrifty Clothing App

## 📋 Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git
- MongoDB (local or Atlas)

## 🔧 Installation Steps

### 1. Clone the Repository
```bash
git clone https://github.com/Shaurya1608/Thrifty-Clothing.git
cd Thrifty-Clothing
```

### 2. Install Dependencies
```bash
npm run install-all
```

### 3. Set Up Environment Variables

#### Option A: Copy the example file (Windows)
```bash
cd server
copy env.example .env
```

#### Option B: Copy the example file (Mac/Linux)
```bash
cd server
cp env.example .env
```

#### Option C: Create manually
Create a new file called `.env` in the `server` folder and copy the content below.

### 4. Configure Your .env File

Open `server/.env` and update these values:

```env
# Database Configuration
# For local MongoDB:
MONGODB_URI=mongodb://localhost:27017/thrifty_clothings

# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/thrifty_clothings

# JWT Secret (change this to something random)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Email Configuration (Resend - Recommended)
# Get your API key from: https://resend.com/
SMTP_HOST=smtp.resend.com
SMTP_PORT=587
SMTP_USER=resend
SMTP_PASS=re_YOUR_RESEND_API_KEY_HERE
SMTP_FROM=onboarding@resend.dev

# Client URL (for email links)
CLIENT_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

### 5. Get Your Email API Key (Optional but Recommended)

1. Go to [Resend.com](https://resend.com/)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Replace `re_YOUR_RESEND_API_KEY_HERE` with your actual key

### 6. Run the Application
```bash
# Go back to root directory
cd ..

# Start both frontend and backend
npm run dev
```

## 🌐 Access Your App

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## 🔍 Troubleshooting

### If you get "port already in use" error:
```bash
# Windows
taskkill /f /im node.exe

# Mac/Linux
pkill node
```

### If MongoDB connection fails:
1. Make sure MongoDB is running locally, OR
2. Use MongoDB Atlas (cloud version)

### If email doesn't work:
1. Check your Resend API key
2. The app will still work without email (OTP will be logged to console)

## 📁 Project Structure

```
Thrifty-Clothing/
├── client/          # React frontend
├── server/          # Node.js backend
├── package.json     # Root package.json
└── SETUP.md         # This file
```

## 🎯 Features Available

- ✅ User Registration & Login
- ✅ Email Verification with OTP
- ✅ Password Reset via Email
- ✅ User Profile Management
- ✅ Modern Responsive UI
- ✅ MongoDB Integration
- ✅ JWT Authentication

## 🆘 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Make sure all dependencies are installed
3. Verify your `.env` file is correctly configured
4. Ensure MongoDB is running (if using local)

---

**Happy Coding! 🎉**
