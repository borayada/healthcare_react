Healthcare Dashboard
A simple healthcare dashboard built using React.js for the frontend and Flask for the backend. The application allows users to submit their name, age, and a file through a form, which is then processed and stored on the server.

Project Features
Frontend: A React.js application to collect user data.
Backend: A Python Flask server to handle form submissions and file uploads.
Cross-Origin communication is enabled using CORS.
Technologies Used
Frontend: React.js, Axios, Bootstrap
Backend: Python, Flask, Flask-CORS
Getting Started
Prerequisites
Node.js (for React frontend)
Python (for Flask backend)
Setup Instructions
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/healthcare-dashboard.git
cd healthcare-dashboard
Backend Setup (Python)
Navigate to the backend folder:

bash
Copy code
cd backend
Create a virtual environment and activate it:

bash
Copy code
python -m venv env
source env/bin/activate  # Linux/Mac
env\Scripts\activate     # Windows
Install dependencies:

bash
Copy code
pip install flask flask-cors
Run the Flask server:

bash
Copy code
python main.py
The server will start on http://127.0.0.1:5000.

Frontend Setup (React.js)
Navigate to the frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start the React development server:

bash
Copy code
npm start
The frontend will run on http://localhost:3000.

Running the Application
Start the Flask backend on http://127.0.0.1:5000.
Start the React frontend on http://localhost:3000.
Open the React app in your browser.
Fill out the form and submit data. The backend will process the data and save the uploaded file.
Project Structure
Frontend (React)
php
Copy code
frontend/
├── src/
│   ├── components/
│   │   └── FormComponent.js   # Form for submitting data
│   ├── App.js                 # Main app file
│   └── index.js               # React entry point
├── public/
├── package.json
Backend (Python Flask)
bash
Copy code
backend/
├── main.py                    # Flask server
├── uploads/                   # Folder to store uploaded files
├── requirements.txt           # Python dependencies
API Reference
Endpoint: POST /submit
Submit form data to the Flask backend.

URL: http://127.0.0.1:5000/submit

Method: POST

Request Format: multipart/form-data

Request Fields:

name: User's name (string)
age: User's age (integer)
file: File to upload (file)
Response:

json
Copy code
{
    "message": "Form submitted successfully",
    "name": "John Doe",
    "age": "30",
    "file_path": "uploads/filename.ext"
}
