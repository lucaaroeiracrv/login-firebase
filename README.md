# 🔐 **Firebase Authentication & Firestore Login Screen**

### 📱 **Project Overview**
This project is a simple login and registration screen using **React Native**, **TypeScript**, and **Firebase Authentication**. It allows users to create an account, log in using their email and password, and store additional user data (full name and date of birth) in **Firestore**.

### 🚀 **Technologies Used**
- **React Native** ⚛️
- **TypeScript** 🟦
- **Firebase Authentication** 🔐
- **Firestore Database** 🔥

---

### 🎯 **Features**
- **Sign Up**: Users can create a new account with their email and password.
- **Login**: Registered users can log in with their email and password.
- **Firestore Integration**: Stores additional user data like full name and date of birth in Firestore.
- **Error Handling**: Displays error messages for invalid login attempts or incomplete sign-up forms.

---

### 🔧 **Firebase Services Used**

1. **Authentication** 🛡️:
   - Handles **user registration** and **login**.
   - Provides secure and easy-to-implement authentication methods.
   
2. **Firestore** 📂:
   - Stores additional data like **Full Name** and **Date of Birth** for each registered user.
   - Allows seamless integration with real-time databases, making data management easier.

---

### 🛠️ **Installation & Setup**

1. Clone the repository:

    ```bash
    git clone https://github.com/your-repo-name.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Configure Firebase:
   - Go to the **Firebase Console** and create a new project.
   - Enable **Email/Password Authentication** in the **Authentication** section.
   - Create a Firestore database and set your security rules.
   - Add your Firebase configuration to the project:
   
     ```ts
     import firebase from 'firebase/app';
     import 'firebase/auth';
     import 'firebase/firestore';

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
     };

     if (!firebase.apps.length) {
       firebase.initializeApp(firebaseConfig);
     }
     ```

4. Run the app:

    ```bash
    npm run start
    ```

---

### 🔄 **Authentication Flow**

1. **User Registration** ✍️
   - The user enters their email, password, full name, and date of birth.
   - The app uses Firebase **Auth** to create a new user account.
   - After the account is created, additional user details are stored in Firestore.

2. **User Login** 🔑
   - The user enters their email and password.
   - Firebase **Auth** checks the credentials.
   - If the credentials are valid, the user is logged in and redirected to the main screen.

3. **Firestore Storage** 🗄️
   - Once registered, user data is stored in **Firestore** in a structured format:
   
     ```json
     {
       "email": "user@example.com",
       "fullName": "John Doe",
       "dateOfBirth": "1990-01-01"
     }
     ```

---

### 🎉 **Conclusion**
With Firebase's robust services for authentication and real-time data management, this app provides a simple and efficient way to manage user login and registration. Enjoy coding and building more features on top of this base!
