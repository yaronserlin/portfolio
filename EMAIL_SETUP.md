# Email Setup Guide - EmailJS Configuration

Your contact form is now ready to send emails to **yaron.serlin.dev@gmail.com**! Follow these steps to activate it:

## 📧 Step 1: Create EmailJS Account

1. Visit [emailjs.com](https://www.emailjs.com/)
2. Click **Sign Up** (free account includes 200 emails/month)
3. Complete the registration

## 🔧 Step 2: Add Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Choose **Gmail** as the service provider
4. Connect your Gmail account (or use a different email provider)
5. Copy the **Service ID** (looks like: `service_abc123...`)
6. Save it somewhere - you'll need this soon

## 📋 Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Set template name to: `contact_form` (or any name you prefer)
4. Copy the **Template ID** (looks like: `template_xyz789...`)
5. In the email template editor, set up the content like this:

**Email Subject:**
```
New Contact Form Submission: {{subject}}
```

**Email Body (HTML or Text):**
```html
<h2>New Message from Your Portfolio</h2>
<p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
<p><strong>Subject:</strong> {{subject}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>
<hr>
<p><small>This email was sent from your portfolio contact form.</small></p>
```

6. Save the template

## 🔑 Step 4: Get Your Public Key

1. Go to **Account** in your dashboard
2. Look for **Public Key** section
3. Copy your public key (looks like: `abc123xyz...`)

## 🚀 Step 5: Update Your `.env` File

1. Open `/Users/user/programing/portfolio/.env` in your editor
2. Replace the placeholder values with your actual keys:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_from_step_2
VITE_EMAILJS_TEMPLATE_ID=your_template_id_from_step_3
VITE_EMAILJS_PUBLIC_KEY=your_public_key_from_step_4
```

Example:
```env
VITE_EMAILJS_SERVICE_ID=service_a1b2c3d4e5f6g7h8
VITE_EMAILJS_TEMPLATE_ID=template_x1y2z3a4b5c6d7e8
VITE_EMAILJS_PUBLIC_KEY=abc123def456ghi789jkl
```

3. Save the file

## ✅ Step 6: Test It!

1. Go to your portfolio contact page
2. Fill out the form with test data
3. Click **Send Message**
4. Check your email at `yaron.serlin.dev@gmail.com` for the message
5. If it works, you're all set! 🎉

## 🆘 Troubleshooting

**"Failed to send message" error?**
- Check that your `.env` file values are correct (no extra spaces)
- Make sure your EmailJS template includes all required variables
- Verify your Service ID and Template ID match the EmailJS dashboard

**Email not arriving?**
- Check your spam/junk folder
- Verify the email template's recipient is set correctly
- Try sending a test email from the EmailJS dashboard

**Still having issues?**
- Make sure you're using the correct variable names in your template: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
- Check the EmailJS console for error messages when you submit

## 📝 Notes

- The form sends emails **directly from the client browser** - no backend server needed
- EmailJS is free for up to 200 emails/month
- Your API keys are secure (public key is meant to be public)
- The email recipient is hardcoded to `yaron.serlin.dev@gmail.com` - change it in `src/hooks/useContactForm.js` if needed

## 🔄 Environment Variables Explanation

- `VITE_` prefix: Required to make env vars accessible in the browser
- `VITE_EMAILJS_SERVICE_ID`: Which email service to use (Gmail, Outlook, etc.)
- `VITE_EMAILJS_TEMPLATE_ID`: Which email template format to use
- `VITE_EMAILJS_PUBLIC_KEY`: Public authentication key (safe to expose)

Happy emailing! 📬
