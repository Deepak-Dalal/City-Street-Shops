# City Street Shops

## Overview
City Street Shops is a full-featured e-commerce web application that enables users to browse, purchase, and manage orders from shops within a city. There can be 3 types of users of the app: Customers, Sellers and Admins. It provides access to different features and pages based on the user role.

## Live Links :

https://city-street-shops.vercel.app 

https://city-street-shops.onrender.com (Cold start)

## Features

<li>JWT based user authentication</li> 
<li>Feature to upload images and store them on cloud using AWS S3 bucket</li>
<li>Online order Payments integration using Razorpay payments API</li>
<li>Automatic order notification to seller and customer through email</li>
<li>Google Maps API for selecting delivery address through map</li>
<li>Customer - Admin chat interface implementation using socket.io</li>
<li>Cloud NoSQL Database (MongoDB Atlas)</li>
<li>Deployed and hosted on Vercel.com and Render.com</li>
<li>Bcrypt.js for password encryptio</li>

## Tech Stack

- **Node.js** (Backend)
- **Express.js** (API Framework)
- **Mongoose** (ORM for MongoDB)
- **MongoDB Atlas** (Cloud Database)
- **AWS S3** (Images and media storage)
- **Multer** (Middleware for file uploads)
- **Socket IO** (Seller-Customer chat)
- **Vercel and Render** (Deployment)
- **Nodemail** (Email notification of orders)
- **Razorpay API** (Online order payments)
- **Google Maps API** (Interactive Address selection on Geo-map)
- **JWT** (User authentication/authorization)

## Steps to run in local environment

### Prerequisites

- **Node.js** v20+

### Steps

1. Clone the repository:
   ```sh
   git clone https://github.com/Deepak-Dalal/City-Street-Shops.git
   ```
2. Navigate to backend directory:
   ```
   cd backend
   ```
3. Set up backend environment variables:
   - Create a `.env` file in the backend directory.
   - Add the following:
     ```env
     MONGODB=your_mongodb_atlas_url
     AWS_BUCKET_NAME1=your_aws_s3_bucket_name
     AWS_BUCKET_REGION1=your_aws_s3_bucket_region
     AWS_ACCESS_KEY1=your_aws_s3_bucket_access_key
     AWS_SECRET_KEY1=your_aws_s3_bucket_secret_key
     MAIL_PASS=your_email_secret_pass_key_for_nodemail
     RAZORPAY_KEY_ID=your_razorpay_key
     RAZORPAY_SECRET=your_razorpay_secret
     ```
4. Install backend dependencies
   ```
   npm install
   ```
5. Start backend server
   ```
   npm start
   ```
6. Navigate to frontend directory:
   ```
   cd frontend
   ```
7. Set up frontend environment variables:
   - Create a `.env` file in the frontend directory.
   - Add the following:
     ```env
     VITE_REACT_APP_BACKEND_BASE_URL='http://localhost:5000'
     ```
8. Install frontend dependencies
   ```
   npm install --legacy-peer-deps
   ```
9. Start frontend server
   ```
   npm run dev
   ```

The API will be accessible at `http://localhost:3000`.

## Some of the Screens

### Seller Page
![image](https://github.com/Deepak-worthy/city-street-shops/assets/82026071/36ca1c2e-c39e-484a-9f51-4d591ee1a37e)

### Product page
![image](https://github.com/Deepak-worthy/city-street-shops/assets/82026071/a6c9d189-32aa-4473-9fb2-f54ea6e92610)

### Cart Page
![image](https://github.com/Deepak-worthy/city-street-shops/assets/82026071/e0fb5eba-a4b1-4819-8132-60e474851499)

### Place Order Page
![image](https://github.com/Deepak-worthy/city-street-shops/assets/82026071/9e1f1b72-6459-4600-8ced-7eb18f07a2c2)

### Seller Products Management Page 
![image](https://github.com/Deepak-worthy/city-street-shops/assets/82026071/094e5f67-5c73-498f-b220-2f2ca4de5cac)

### Seller Orders Management Page
![image](https://github.com/Deepak-worthy/city-street-shops/assets/82026071/1beef749-1512-4e06-9e5a-e1cb5a69b8af)

### Admin Dashboard Page
![image](https://github.com/Deepak-worthy/city-street-shops/assets/82026071/6b527197-e675-4901-9e48-c1c91cc044c5)

### Email recieved by seller
![image](https://github.com/user-attachments/assets/813ddcd3-ff95-414f-b6e3-6bc0a2b1460b)

### Email recieved by customer
![image](https://github.com/user-attachments/assets/390b06cf-c93c-4824-bd6b-6208f1043537)

