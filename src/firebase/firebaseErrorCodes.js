export const firebaseErrorMessages = {
  // 🔐 Sign Up
  "auth/email-already-in-use": "This email is already registered.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/operation-not-allowed": "Email/password accounts are not enabled.",
  "auth/weak-password": "Password should be at least 6 characters long.",

  // 🔑 Sign In
  "auth/user-not-found": "No account found with this email.",
  "auth/wrong-password": "Incorrect password. Please try again.",
  "auth/invalid-credential": "Invalid login credentials.",
  "auth/too-many-requests": "Too many failed attempts. Try again later.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/invalid-email": "Invalid email format.",

  // 📧 Email Verification / Reset Password
  "auth/missing-email": "Email is required.",
  "auth/invalid-action-code": "This verification link is invalid or expired.",
  "auth/expired-action-code": "This action link has expired.",
  "auth/user-mismatch": "User credentials do not match.",
  "auth/missing-password": "Password is required.",

  // 🔁 Reauthentication / Profile Updates
  "auth/requires-recent-login": "Please log in again to complete this action.",
  "auth/invalid-user-token": "Your session has expired. Please log in again.",

  // 🌐 Network / Misc
  "auth/network-request-failed": "Network error. Check your connection.",
  "auth/internal-error": "Something went wrong. Please try again.",
  "auth/unauthorized-domain": "This domain is not authorized for your app.",
};