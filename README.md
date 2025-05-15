# 📬 Inquiry Management System

A RESTful API built with **Node.js**, **Express.js**, and **Sequelize (PostgreSQL)** to manage anonymous inquiries efficiently.

This system allows users to submit inquiries, track their statuses, provide solutions or cancellation reasons, and filter by dates. Designed to be lightweight and developer-friendly.

---

##  Features

-  Create anonymous inquiries with subject & message
-  Change inquiry statuses:
  - New → In Progress → Completed / Cancelled
-  Add resolution text when completing
-  Provide cancellation reason when cancelling
-  Filter inquiries by date or date range
-  Bulk cancel all "In Progress" inquiries

---

##  Tech Stack

- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **PostgreSQL**
- **express-validator**
- **JavaScript (CommonJS)**

---

##  Installation

```bash
# 1. Clone the repo
git clone https://github.com/baxtiyarovich0102/inquiry.git
cd inquiry

# 2. Install dependencies
npm install

# 3. Set up PostgreSQL and update config/database.js

# 4. Run migrations (if using Sequelize CLI)
# Or ensure your database matches the models

# 5. Start the server
npm start

Server runs on: http://localhost:3000
Postman documantation: https://documenter.getpostman.com/view/41857356/2sB2qUp5nk
