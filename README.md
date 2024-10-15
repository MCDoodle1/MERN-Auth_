# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

I took this challenge as basis for a MERN authentication application.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_ Note: I left this out.
- `Extended challenge`: Turn the design into a MERN stack app that signs up and logs in a user and enables the user to register a new password in case the password is forgotten. The app sends emails to verify and confirm registration, and to allow changing the password. Below screenshots show the different steps in this process.

### Screenshots

`Step 1 : Signup`

![Mobile design](/frontend/src/assets/images/Screenshot-Mobile.png)
Mobile design

![Desktop design](/frontend/src/assets/images/Screenshot-Desktop.png)
Desktop design

![Active states design](/frontend/src/assets/images/Screenshot-ActiveStates.png)
Active states design

`Step 2` : Verification

![Verification email](/frontend/src/assets/images/Email-VerifyEmail.png)
User receives an email with a code

![Verification page](/frontend/src/assets/images/Screenshot-VerifyEmail.png)
User can enter the code in the app's verification page. If the code is correct,
user is navigated to the app's dashboard.

![Welcome email](/frontend/src/assets/images/Email-Welcome.png)
After verification the user receives an email confirming registration

`Step 3` : Access to dashboard - User can logout and login to app using credentials

![Dashboard page](/frontend/src/assets/images/Screenshot-Dashboard.png)

`Step 4` : User wants to login but forgot password

![Login Page](/frontend/src/assets/images/Screenshot-LoginPage.png)
User clicks the link "forgot password" on the login page and is redirected to:

![Forgot Password Page](/frontend/src/assets/images/Screenshot-ForgotPasswordPage.png)
User enters email address and clicks the button to confirm. App now shows a confirmation:

![Forgot Password Confirmation](/frontend/src/assets/images/Screenshot-ForgotPasswordPage-confirmation.png)

`Step 5` : Changing a password

![Forgot Password Email](/frontend/src/assets/images/Email-ForgotPassword.png)
An email with a link is sent to user's email address. After clicking the link,
user is redirected to:

![Reset Password Page](/frontend/src/assets/images/Screenshot-ResetPasswordPage.png)
In this page user enters a new password and confirms the new password. The user is then
redirected to the Login Page.

![Reset Password Confirmation Email](/frontend/src/assets/images/Email-ResetPassword-confirmation.png)
User receives an email to confirm the password is changed.

### Links

- Solution URL: [Github - MERN-Auth\_](https://github.com/MCDoodle1/MERN-Auth_)
- Live Site URL: [Render - MERN-Auth](https://mern-auth-9ykj.onrender.com)

## My process

I started by implementing the backend and then the frontend UI and functionality.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Flexbox
- Mobile-first workflow
- [MongoDB](https://www.mongodb.com) - Source-available, cross-platform, document-oriented database program
- [Express.js](https://expressjs.com) - Backend web application framework for building RESTful APIs with Node.js
- [Node.js](https://nodejs.org/en) - cross-platform, open-source JavaScript runtime environment
- [React](https://reactjs.org/) - JS library
- [Mailtrap](https://mailtrap.io) - Email Delivery Platform to test, send and control email infrastructure.
- [Zustand](https://zustand-demo.pmnd.rs) - A small, fast, and scalable state management solution.

### Useful resources

- [YouTube - Advanced MERN Auth Course](https://www.youtube.com/watch?v=pmvEgZC55Cg&t=13574s) - I used this course to build backend and frontend functionality

## Author

- Website - [Marco Clarijs](https://github.com/MCDoodle1)
- Frontend Mentor - [@MCDoodle1](https://www.frontendmentor.io/profile/MCDoodle1)

## Acknowledgments

Thanks to Burak Orkmez / As a programmer for the clear and well-structured course.
