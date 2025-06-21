# 🔐 Password Manager

A simple and secure password manager built with **React**, featuring full **CRUD (Create, Read, Update, Delete)** functionality. This application allows users to manage their login credentials (site name, username, and password) with client-side **encryption** and **persistent storage** using `localStorage`.

> ⚠️ For demonstration and learning purposes only. Not intended for production-level password management without proper backend and advanced encryption.

---

## ✨ Features

- ✅ Add, view, update, and delete credentials
- ✅ Store **site name**, **username**, and **password**
- ✅ Passwords are **encrypted** before saving to localStorage
- ✅ Clean and responsive UI using **React Hooks**
- ✅ Persistent data with browser **localStorage**

---

## 🛠️ Tech Stack

| Tech         | Purpose                     |
|--------------|------------------------------|
| React        | Frontend framework            |
| JavaScript   | Application logic             |
| CSS          | Styling                       |
| localStorage | Client-side data persistence  |
| Crypto-js *(optional)* | Encryption library |

---

## 📂 Project Structure

src/
├── components/
│ ├── CredentialForm.jsx
│ ├── CredentialList.jsx
│ └── CredentialItem.jsx
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
