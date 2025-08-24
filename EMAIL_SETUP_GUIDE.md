# 📧 Email Verification Setup Guide

## 🎯 Overview
This guide will help you set up email verification for new user registrations in your THRIFTY CLOTHINGS application.

## 🔧 Setup Options

### Option 1: Gmail (Recommended for Development)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Update your .env file**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-digit-app-password
   SMTP_FROM=your-email@gmail.com
   ```

### Option 2: Resend (Recommended for Production)

1. **Sign up at [resend.com](https://resend.com)**
2. **Get your API key**
3. **Update your .env file**:
   ```env
   SMTP_HOST=smtp.resend.com
   SMTP_PORT=587
   SMTP_USER=resend
   SMTP_PASS=re_YOUR_API_KEY_HERE
   SMTP_FROM=onboarding@resend.dev
   ```

### Option 3: Development Mode (No Email)

For development without email setup:
```env
DISABLE_EMAIL_VERIFICATION=true
```

## 🚀 How Email Verification Works

1. **User Registration**: User fills out registration form
2. **Email Sent**: System sends verification email with OTP
3. **User Verification**: User enters OTP to verify email
4. **Account Activation**: User can now login

## 🔍 Testing Email Verification

1. **Register a new account** with any email
2. **Check your email** for verification code
3. **Enter the code** on the verification page
4. **Login** with your new account

## 🛠️ Troubleshooting

### Email Not Sending?
- Check SMTP credentials in .env
- Verify Gmail app password is correct
- Check spam folder

### Want to Skip Email Verification?
Set `DISABLE_EMAIL_VERIFICATION=true` in your .env file

## 📝 Current Status

- ✅ Email verification system implemented
- ✅ OTP-based verification
- ✅ Resend functionality
- ✅ Development mode support
- ⚠️ Email credentials need to be configured

## 🎯 Next Steps

1. Choose an email service (Gmail recommended for testing)
2. Update your .env file with email credentials
3. Test registration with a new account
4. Verify emails are being sent and received


