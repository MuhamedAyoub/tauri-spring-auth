# Auth with Tauri & Java Spring Boot

<div style="display:flex; justify-content: space-between; padding:35px">
<img src="assets/Spring.png" alt="Spring" width="220" height="200">

<img src="assets/Tauri.png" alt="Tauri" width="220" height="200">
 </div>

# Overview:

This document provides an overview of the project, including its purpose, features, and technology stack

# Purpose:

The project is an academic endeavor aimed at implementing authentication tasks with a profile page for the ASCI module. It serves as a learning exercise to understand and implement various authentication mechanisms and security practices.

# Features:

**Hashing Password:** Passwords are securely hashed before storage to enhance security.

- **JWT-Based Authentication:** Authentication is implemented using JSON Web Tokens (JWT) for secure and stateless communication between client and server.
- **Spring Security:** The project leverages Spring Security for implementing authentication and authorization mechanisms.
- **Authorization Handling:** Authorization is managed effectively using Spring Security to control access to different resources.
- **Frontend Input Validation:** User input is validated on the frontend to ensure data integrity and security.
- **Backend API Validation:** API inputs are validated on the backend to prevent malicious or invalid data from entering the system.
- **Sign In and Sign Up Pages:** Dedicated pages are provided for user registration and authentication.

# Tech Stack:

- **Languages:**
    - Rust 🔥
    - TypeScript
    - Java
- **Frameworks/Libraries:**
    - Tauri 🔥
    - React 💪
    - Spring Boot ♨️
    - Spring Security v6
    - Shad cn
    - Tailwind CSS 🗽

### Frontend web Setup
```bash
# Install dependencies
npm install # OR pnpm i 

# Run the frontend server
npm run dev # or pnpm dev 
 ```
### Frontend Desktop Setup
```bash
# Install dependencies
npm install # OR pnpm i 

# Run the desktop dev view
npm run tauri dev # or pnpm trauri dev 
 ```
### Backend Server Setup
**Projet runs postgres db using docke**.

use Jetbrain IDE , maven for runing the java code

## Conclusion
The project aims to provide a comprehensive understanding of authentication mechanisms, security practices, and modern development tools and frameworks. Through the implementation of various features and technologies, it serves as a practical learning experience for students studying authentication and security.`
