# 📧 Gmail Setup Guide for Contact Form

This guide will help you set up your Gmail account to send emails directly from your portfolio contact form.

## 🚀 **Step 1: Enable 2-Factor Authentication**

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Click **"Security"** in the left sidebar
3. Under **"Signing in to Google"**, click **"2-Step Verification"**
4. Follow the steps to enable 2FA

## 🔑 **Step 2: Generate App Password**

1. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
2. Sign in with your Gmail account: **akdessai6@gmail.com**
3. Under **"Select app"**, choose **"Mail"**
4. Under **"Select device"**, choose **"Other (Custom name)"**
5. Type: **"Portfolio Contact Form"**
6. Click **"Generate"**
7. **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)
8. **Save this password** - you'll need it for the next step!

## 🌐 **Step 3: Set Environment Variables in Netlify**

1. Go to your [Netlify dashboard](https://app.netlify.com)
2. Select your portfolio site
3. Go to **"Site settings"** → **"Environment variables"**
4. Add these variables:

### **Variable 1:**
- **Key**: `GMAIL_USER`
- **Value**: `akdessai6@gmail.com`

### **Variable 2:**
- **Key**: `GMAIL_APP_PASSWORD`
- **Value**: `[Your 16-character app password from Step 2]`

5. Click **"Save"**

## ✅ **Step 4: Test Your Contact Form**

1. **Deploy your updated code** to GitHub
2. **Netlify will automatically rebuild** with the new email function
3. **Test the contact form** on your live website
4. **Fill out the form** and click "Send Message"
5. **Check your inbox** at akdessai6@gmail.com

## 📱 **How It Works Now:**

1. **Visitor fills contact form** → Name, Email, Phone, Subject, Message
2. **Clicks "Send Message"**
3. **Email sent directly** to akdessai6@gmail.com
4. **No extra apps open**
5. **No extra windows**
6. **Works on all devices**

## 🎯 **What You'll Receive:**

```
From: akdessai6@gmail.com
To: akdessai6@gmail.com
Subject: Portfolio Contact: [their subject]

New Contact Form Submission

Name: [visitor name]
Email: [visitor email]
Phone: [visitor phone]
Subject: [their subject]
Message: [their message]

---
This message was sent from your portfolio contact form.
```

## 🔒 **Security Features:**

- ✅ **Uses Gmail's official API**
- ✅ **Secure app password** (not your main password)
- ✅ **2FA required** for security
- ✅ **No third-party services** involved
- ✅ **Direct to your Gmail inbox**

## 🚨 **Important Notes:**

- **Never share** your app password
- **Keep it secure** like your main password
- **App password works** even with 2FA enabled
- **You can revoke** app passwords anytime
- **No monthly fees** - completely free

## 🆘 **Need Help?**

If you encounter any issues:
1. **Check your app password** is correct
2. **Verify environment variables** are set in Netlify
3. **Ensure 2FA is enabled** on your Google account
4. **Check Netlify function logs** for errors

---

**Your contact form will now send emails directly to your Gmail inbox without opening any extra apps!** 🎉 