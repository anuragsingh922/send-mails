# Getting Started with Send-Mails

**Note**: This service is hosted on a free server, so it may take up to a minute to start after a period of inactivity.

## Base URL:

```url
https://send-mails-0lz7.onrender.com
```

## Parameter Information

- **toEmails**: Recipient email address(es) (comma-separated for multiple emails).
- **companyName**: The name that will appear as the sender (your company name or personal name).
- **subject**: The subject of the email.
- **textMessage**: The body of the email.
- **fromEmail**: Your email address.
- **fromPassword**: Your app password (explained below).

### How to Obtain an App Password

To send emails through providers like Gmail using Nodemailer, you must generate an app-specific password. Here’s how to set it up for Gmail:

### For Gmail:

1. **Enable 2-Step Verification**:
   - Go to your [Google Account settings](https://myaccount.google.com/).
   - Select **Security** from the sidebar.
   - Under **Signing in to Google**, enable **2-Step Verification** if it’s not already enabled. Follow the steps to complete the process.

2. **Generate an App Password**:
   - After enabling 2-Step Verification, search for **App Passwords**.
   - Select the app as **Mail** and the device as **Other (Custom)**.
   - Give it a name, then click **Generate**.
   - Google will provide a 16-character app password. **Copy this password**.

- Replace `your-app-password` in your code with the 16-character app password generated. This will enable Nodemailer to send emails securely via Gmail.
- It's recommended to store this password in your project's environment file (`.env`) for security.

## Example for Sending Emails

### Sending an Email to a Single Recipient

```json
{
  "toEmails": "recipient@example.com",  // Replace with the recipient's email address
  "companyName": "Your Company Name",   // Replace with your company or personal name
  "subject": "Test Email",
  "textMessage": "Hello, this is a test message.",
  "fromEmail": "your-email@gmail.com",  // Replace with your email address
  "fromPassword": "your-app-password"   // Replace with the generated app password
}
```

### Sending an Email to Multiple Recipients

```json
{
  "toEmails": "recipient1@example.com, recipient2@example.com",  // Replace with multiple email addresses separated by commas
  "companyName": "Your Company Name",    // Replace with your company or personal name
  "subject": "Test Email",
  "textMessage": "Hello, this is a test message.",
  "fromEmail": "your-email@gmail.com",   // Replace with your email address
  "fromPassword": "your-app-password"    // Replace with the generated app password
}
```