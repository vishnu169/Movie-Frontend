# 🎮 MovieDB Frontend

This is the **frontend** for the MovieDB application, built using **React.js**. It provides an interactive UI to browse movies and watch trailers.

---

## 🚀 Features

✅ Display a list of movies  
✅ View movie details  
✅ Watch movie trailers  
✅ Responsive UI using React  

---

## 🧪 Tech Stack

- **Frontend**: React.js  
- **State Management**: React Hooks  
- **API Calls**: Axios  
- **Routing**: React Router  
- **Styling**: CSS  

---

## 📌 Installation

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/vishnu169/MovieDB-Frontend.git
cd MovieDB-Frontend
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

---

## ▶️ Running the Project

### **1️⃣ Start the React Application**
```bash
npm start
```
The application will start at:  
📍 **http://localhost:3000/**

### **2️⃣ Ensure Backend is Running**
Make sure the **MovieDB Backend** is running at:  
📍 **http://localhost:8080/api/v1/movies**

---

## 🤦🏻 How to Use

1. Open the application in your browser.
2. Browse the list of movies.
3. Click on a movie to view details.
4. Watch the trailer by clicking the **Play** button.

---

## 📩 API Integration

The frontend fetches movie data from the **backend API** using Axios:
```javascript
axios.get("http://localhost:8080/api/v1/movies")
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
```

---

## 🐝 License

This project is open-source and available under the **MIT License**.

---

👉 **Now, your frontend README is complete!** 🎉  
Let me know if you need any modifications. 🚀😊

