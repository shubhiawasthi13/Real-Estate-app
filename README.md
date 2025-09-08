🏠**PropBot – Real Estate Property Listing App**
A responsive property listing web application built with React (Vite), integrated with Firebase Authentication, and deployed on Netlify.
https://propbot-real-estate-app.netlify.app

## 📸 App Screenshots
Home page- 
[https://res.cloudinary.com/djg40ufiy/image/upload/v1757329795/home_cyz9hl.png], 
Buy Page-
[https://res.cloudinary.com/djg40ufiy/image/upload/v1757329854/buy_t7frss.png], 
LoginPage- 
[https://res.cloudinary.com/djg40ufiy/image/upload/v1757329880/login_fdppaq.png],
SignupPage-
[https://res.cloudinary.com/djg40ufiy/image/upload/v1757329901/signup_qqellp.png], 
ProductlistPage- 
[https://res.cloudinary.com/djg40ufiy/image/upload/v1757329918/productlist_uxgxpa.png]

🚀 **Features**
🔑 User Authentication (Firebase Auth)
🏡 Property Listings
🔍 Search & Filter properties by location
📱 Fully Responsive design
⚡ Fast Build with Vite
☁️ Deployed on Netlify

📂**tech Stack**
Frontend: React + Vite + Tailwind CSS
Backend/API: MockAPI (for property data)
Auth: Firebase Authentication
Hosting: Netlify


⚙️ **Installation & Setup**
Clone the Repository
cd main-project-folder

Install Dependencies
npm install

**Set up Firebase Authentication**
Go to Firebase Console
Create a new project & enable Email/Password Authentication
Copy your Firebase config and paste it into a new file:

**Add Environment Variables**
In your project root, create a .env file:

VITE_FIREBASE_API_KEY=your_api_key, 
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain, 
VITE_FIREBASE_PROJECT_ID=your_project_id, 
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket, 
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id, 
VITE_FIREBASE_APP_ID=your_app_id

**Run the Development Server**
npm run dev
