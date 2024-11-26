# Task Mangement App 📋

**Task Management App** powered by `google tasks api`.

## ✨ Features

- **Google authentication:** Direct login with google accounts.
- **Task Management:** List, Add, Edit or Delete tasks using google tasks api.

### NOTICE !! 11/27/24

Features stated below are still work in progress

- **add tasks**
- **create tasks**
- **edit tasks**
- **delete tasks**

## 📦 Local Setup Instructions

Follow these steps to get started with Task Mangement App on your local machine:

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v20.x or above)
- **npm** (v10.x or above)
- **google oauth client** (client_id)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/sithsithsith/google-tasks-management-app.git
   cd google-tasks-management-app
   ```
2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   ```env
   VITE_GOOGLE_TASK_SERVICE_ENDPOINT=https://tasks.googleapis.com/tasks/v1
   VITE_GOOGLE_CLIENT_OAUTH2_SCOPES=https://www.googleapis.com/auth/tasks
   VITE_GOOGLE_CLIENT_ID={UR_CLIENT_ID}
   ```

4. **Run the Application**

   ```bash
   npm run dev
   ```

5. **Run Tests (Optional)**

   ```bash
   Work in progress
   ```

## 📬 Support

If you have any questions or need assistance, feel free to reach out at withzues@gmail.com.
