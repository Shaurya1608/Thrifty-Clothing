# 🔥 Firebase Authentication Setup Guide

This guide will help you set up Firebase Authentication for your THRIFTY CLOTHINGS app.

## 🚀 Step 1: Create Firebase Project

1. **Go to Firebase Console**: https://console.firebase.google.com/
2. **Click "Create a project"**
3. **Enter project name**: `thrifty-clothings`
4. **Enable Google Analytics** (optional)
5. **Click "Create project"**

## 📱 Step 2: Add Web App

1. **Click the web icon** (</>) on the project overview page
2. **Register app**: `thrifty-clothings-web`
3. **Copy the Firebase config** (you'll need this for the client)

## 🔐 Step 3: Enable Authentication

1. **Go to Authentication** in the left sidebar
2. **Click "Get started"**
3. **Enable Email/Password** provider:
   - Click "Email/Password"
   - Enable "Email/Password"
   - Enable "Email link (passwordless sign-in)" (optional)
   - Click "Save"

## 📧 Step 4: Configure Email Templates

1. **Go to Authentication > Templates**
2. **Customize email templates**:
   - **Verification email**: Update with your branding
   - **Password reset**: Update with your branding
   - **Email change**: Update with your branding

## 🔑 Step 5: Get Service Account Key

1. **Go to Project Settings** (gear icon)
2. **Go to Service accounts tab**
3. **Click "Generate new private key"**
4. **Download the JSON file** (keep this secure!)

## ⚙️ Step 6: Environment Variables

### Client (.env in client folder)
```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

### Server (.env in server folder)
```env
# Firebase Admin SDK
FIREBASE_TYPE=service_account
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your_project.iam.gserviceaccount.com
FIREBASE_CLIENT_ID=your_client_id
FIREBASE_AUTH_URI=https://accounts.google.com/o/oauth2/auth
FIREBASE_TOKEN_URI=https://oauth2.googleapis.com/token
FIREBASE_AUTH_PROVIDER_X509_CERT_URL=https://www.googleapis.com/oauth2/v1/certs
FIREBASE_CLIENT_X509_CERT_URL=https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-xxxxx%40your_project.iam.gserviceaccount.com
```

## 📦 Step 7: Install Dependencies

### Client
```bash
cd client
npm install firebase
```

### Server
```bash
cd server
npm install firebase-admin
```

## 🔄 Step 8: Update Your App

1. **Replace AuthContext** with FirebaseAuthContext
2. **Update Login/Register components** to use Firebase
3. **Test the authentication flow**

## ✅ Step 9: Test Authentication

1. **Start your server**: `npm run dev`
2. **Start your client**: `cd client && npm start`
3. **Try registering a new user**
4. **Check email verification**
5. **Test login/logout**

## 🎯 Benefits of Firebase Auth

- ✅ **No email setup required**
- ✅ **Built-in email verification**
- ✅ **Password reset functionality**
- ✅ **Multiple auth providers** (Google, Facebook, etc.)
- ✅ **Secure and reliable**
- ✅ **Free tier available**

## 🚨 Important Notes

1. **Keep your service account key secure** - never commit it to git
2. **Use environment variables** for all Firebase config
3. **Test thoroughly** before deploying
4. **Monitor Firebase console** for any issues

## 🔧 Troubleshooting

### Common Issues:
1. **"Firebase not initialized"** - Check your config
2. **"Permission denied"** - Check service account permissions
3. **"Email not sent"** - Check Firebase console settings

### Support:
- Firebase Documentation: https://firebase.google.com/docs
- Firebase Console: https://console.firebase.google.com/

---

**🎉 You're all set! Firebase will handle all your authentication needs!**

