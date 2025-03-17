# 📸 Sociogram

Sociogram is a social media web application built with React and Firebase, allowing users to authenticate, chat, and share content in real-time.

🚀 **Live Demo:** [Sociogram](https://sociogram-v1.onrender.com)

---

## 📁 Project Directory Structure

```
raamprathap-sociogram-v1/
├── README.md
├── package.json
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    └── setupTests.js
```

---

## ⚙️ Features

- 🔑 User Authentication (Firebase Auth)
- 💬 Real-time Chat
- 📷 Firebase Storage for media sharing
- 🛠️ Modern UI with React

---

## 🛠 Installation & Setup

### **1️⃣ Clone the repository**
```sh
git clone https://github.com/Raamprathap/Sociogram-v1.git
cd Sociogram-v1
```

### **2️⃣ Install dependencies**
```sh
npm install
```

### **3️⃣ Set up Firebase**
- Create a `.env` file in the root directory.
- Add the following Firebase configuration:

```sh
REACT_APP_API_KEY=your_api_key
REACT_APP_AUTH_DOMAIN=your_auth_domain
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_APP_ID=your_app_id
REACT_APP_MEASUREMENT_ID=your_measurement_id
```

> **Note:** Replace `your_*` with your Firebase project details.

### **4️⃣ Run the project**
```sh
npm start
```

The app will start on `http://localhost:3000/`

---

## 🌍 Deployment

Sociogram is deployed on Render. To deploy it yourself:

1. **Push to GitHub**
2. **Connect your repository to Render**
3. **Set up environment variables** in Render
4. **Build and Deploy** with the following command:
   ```sh
   npm run build
   ```

---

## 🛠 Tech Stack

- **Frontend:** React, Firebase Authentication
- **Backend:** Firebase Firestore
- **Deployment:** Render

---

## 📜 License

MIT License © 2025 [Raamp](https://github.com/Raamprathap)

---
