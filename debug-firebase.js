// Debug Firebase Password Reset
// Run this in browser console at http://localhost:3000/forgot-password

// Test if Firebase is properly configured
console.log('Testing Firebase configuration...');

// Check if auth object exists
if (typeof auth !== 'undefined') {
  console.log('✅ Firebase auth object found');
  console.log('Auth config:', auth.config);
} else {
  console.log('❌ Firebase auth object not found');
}

// Test password reset function
async function testPasswordReset() {
  try {
    console.log('Attempting to send password reset email...');
    
    // Import Firebase functions
    const { sendPasswordResetEmail } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
    
    // Try to send reset email
    await sendPasswordResetEmail(auth, 'shaurya098n@gmail.com');
    console.log('✅ Password reset email sent successfully!');
    console.log('Check your email inbox and spam folder');
  } catch (error) {
    console.error('❌ Password reset failed:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
  }
}

// Run the test
testPasswordReset();

